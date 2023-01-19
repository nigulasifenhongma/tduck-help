# 前后端分离部署

声明：此文档适用于V2/Pro版本，但其部署步骤是最简化的部署步骤，仅作为参考；如实际业务中对部署有严格安全规范，请自行调整部署方案。
## **1.线上部署**
### **1.1后端部署**
```tsx
mvn clean install -DskipTests

cd tduck-platform/tduck-api

mvn clean package -DskipTests

nohup java -Dfile.encoding=UTF-8 -jar tduck-api.jar &
```
nohup意为后台不挂断运行，与是否账号退出无关
### 1.2前端部署
拉取前端代码 进入tduck-front目录执行命令 试用cnpm或者yarn都可以 推荐使用yarn yarn命令
```yaml
npm install -g yarn
yarn install 
yarn run build
cnpm 命令
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install 
cnpm run build
```

构建打包成功之后，会在根目录生成 dist文件夹，里面就是构建打包好的文件，通常是
***.js 、***.css、index.html等静态文件。
通常情况下 dist 文件夹的静态文件发布到你的 nginx 或者静态服务器即可，其中的
index.html 是项目的入口页面。
### **1.3nginx配置**

```xml
worker_processes  1;

events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;

    server {
        listen       80;
        server_name  localhost;

       location / {
          # 静态文件地址
            root   /usr/share/nginx/html/tduck;
	    try_files $uri $uri/ /index.html;
            index  index.html index.htm;
        }
		
	location /tduck-api/{
	    proxy_set_header Host $http_host;
	    proxy_set_header X-Real-IP $remote_addr;
	    proxy_set_header REMOTE-HOST $remote_addr;
	    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
	    # 改为你后端接口地址   http://xxxx/tduck-api/
	    proxy_pass http://localhost:8999/tduck-api/;
	}

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
}

```
## **2.后端项目配置**
### **2.1必要配置**
```yaml
spring:   
datasource:     driver-class-name: com.mysql.cj.jdbc.Driver     
url: #数据库地址     
username:  #用户名    
password: #密码   
redis:     
database: 1     
host: #地址     
port: #端口     
password:    # 密码（默认为空）
```
## 3.前端项目配置
tduck-front 项目中 src目录下
```yaml
.env.development 开发环境配置
.env.production 正式环境配置
# 页面标题 VUE_APP_TITLE = 填鸭测试环境 
# 接口请求地址，会设置到 axios 的 baseURL 参数上 VUE_APP_API_ROOT = /tduck-api 
# 调试工具，可设置 eruda 或 vconsole，如果不需要开启则留空 VUE_APP_DEBUG_TOOL = 
# 高德地图key VUE_APP_MAP_KEY = f2200337d0d08538e78729572749882d 
# 微信功能开关 开启设置 ON，关闭设置 OFF VUE_APP_WX = ON
```
## 4.图形验证码
图形验证码能使敏感操作更安全，建议开启
如需关闭请打开tduck-platform/tduck-api/src/main/resources/application.yml
```yaml
aj:   
captcha:     
enable: true # 关闭验证码
```

验证码拦截逻辑
路径：tduck-api/src/main/java/com/tduck/cloud/api/web/filter/ValidateCodeFilter.java
```Java
public class ValidateCodeFilter implements Filter {
  
    //需要进行滑动验证的接口
    private List<String> validateUrls = Lists.newArrayList(
            "/login/account",
            "/retrieve/password/email",
            "/retrieve/password/phone/code");

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest httpServletRequest = (HttpServletRequest) request;
        // 如果不是需要拦截的 则不拦截
        if (!StrUtil.containsAnyIgnoreCase(httpServletRequest.getRequestURI(),
                validateUrls.toArray(new String[validateUrls.size()]))) {
            filterChain.doFilter(request, response);
            return;
        }
        // 判断是否携带滑动验证码验证
        String code = request.getParameter("slideCode");
        if (StrUtil.isBlank(code)) {
            ResponseUtils.outJson(response, Result.failed(ResponseCodeConstants.NEED_VERIFICATION, ""));
            return;
        }
        CaptchaService captchaService = SpringContextUtils.getBean(CaptchaService.class);
        CaptchaVO vo = new CaptchaVO();
        vo.setCaptchaVerification(code);
        if (!captchaService.verification(vo).isSuccess()) {
            ResponseUtils.outJson(response, Result.failed(ResponseCodeConstants.FAIL, ResponseCodeConstants.VALIDATE_CODE_FAIL_MSG));
            return;
        }
        filterChain.doFilter(request, response);
    }
}
```
## 5.微信功能
微信配置比较繁琐 如果无需使用 需要关闭可以在如下配置关闭
.env.development # 本地环境配置 .env.production # 正式环境配置

微信功能开关 开启设置 ON，关闭设置 OFF
```yaml
VUE_APP_WX = ON
```
