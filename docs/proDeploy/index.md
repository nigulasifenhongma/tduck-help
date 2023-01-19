# Pro部署

为了简化部署，本教程使用宝塔面板进行基础环境的快速安装；文档仅供新手参考部署，如对运行环境有其余标准，建议采用其他方式部署。如发现文档有不正确或者有更好方案能够解决问题，欢迎提出建议。

> 💁 参考配置：
>
> - 演示环境使用的机器配置为 **腾讯云4核8G 5M带宽机器，**实测QPS可>1000
> - 文件存储使用 [七牛云对象存储 ](https://s.qiniu.com/ZBBBje)
> - 短信通道使用 [中昱维信](https://www.veesing.com/)
> - 图像识别使用 [百度ocr](https://ai.baidu.com/tech/ocr?track=cp:aipinzhuan|pf:pc|pp:AIpingtai|pu:r1-2|ci:|kw:10493549)
---


## 一、基础环境

## 1.宝塔面板安装

1.登录控制台后，输入：

```java
yum install -y wget && wget -O install.sh http://download.bt.cn/install/install_6.0.sh && sh install.sh
```

![image.png](https://oss.tduckcloud.com/1649422022768-3f692e43-d875-4fce-b06b-3b8124380358.png)出现此界面时安装完成，可以使用外网面板地址和username、password进行面板访问


## 2.安装MySql

使用宝塔面板的应用商店，搜索mysql，并点击安装![image.png](https://oss.tduckcloud.com/1649423530709-74dd1a7d-8bb0-4416-9fa5-f290e07be15e.png)

## 3.安装redis

步骤与上述一致，进入应用商店，寻找redis点击安装，此处没有版本要求，安装完毕即可！![image.png](https://oss.tduckcloud.com/1649423809188-dd492ace-a995-4452-8ede-feb39c0e7526.png)

## 4.安装Nginx

步骤同上，应用商店搜索Nginx，点击安装等待执行完毕即可![image.png](https://oss.tduckcloud.com/1649424001813-6237b0c5-0a4c-4f33-84ed-aaaa36ff3e8e.png)

## 5.安装java一键部署

步骤同上，不做赘述![image.png](https://oss.tduckcloud.com/1649424084542-12c38eb6-5871-4ee2-8f7d-0a084de830f7.png)

---


## 6.创建数据库

点击数据库-添加数据库，此处创建的数据库为了方便记忆为，数据库名称：tduck-pro，用户名：tduck，密码：tduck@pro（默认）；如果自行设定，请修改tduck-pro-platform>tduck-api>src>main>resources>application-prod.yml中的数据库密码，然后重新编译后端项目！![image.png](https://oss.tduckcloud.com/1649424528325-db42a23d-c59c-457e-a799-e894238b6efa.png)

---


## 二、构建后端Java项目

> 如果在winServer构建,需要自行百度安装方案 此处使用linux为例

## 1.安装git

用于拉取代码

```java
yum install git
```

![image.png](https://oss.tduckcloud.com/1649476676100-96eeafa6-c7d8-40a8-882e-3d3e024f1380.png)

## 2.安装jdk1.8

```java
yum install -y java-1.8.0-openjdk-devel.x86_64 
```

![image.png](https://oss.tduckcloud.com/1649477338018-d0531e40-b520-469c-9222-633ea0a5472b.png)

## 3.安装maven

参考链接 https://www.jianshu.com/p/dfccd5de6032

```java
sudo wget http://repos.fedorapeople.org/repos/dchen/apache-maven/epel-apache-maven.repo -O /etc/yum.repos.d/epel-apache-maven.repo
```

![image.png](https://oss.tduckcloud.com/1649477364667-af7ecd49-7aa8-4c4e-811e-aa2efcee8548.png)

```java
sudo sed -i s/\$releasever/6/g /etc/yum.repos.d/epel-apache-maven.repo 
```

```java
sudo yum install -y apache-maven 或 sudo yum install -y maven 
```

![image.png](https://oss.tduckcloud.com/1649477393268-06f0c294-34ab-4c37-8282-b42373976d5e.png)

## 4.拉取代码

拉取代码 会提示你输入账号密码

```java
git clone https://请输入私服地址/tduck/tduck-pro-platform.git

```

进入拉取的代码目录

```java
cd tduck-pro-platform
```

## 5.打包后端项目

进入项目根目录，tduck-pro-platform下执行

```java
mvn clean package -Dmaven.test.skip=true
```

执行打包命令，等待一段时间

```java
cd tduck-api/target/
```

最终target目录下有一个tduck-api.jar 之后用到 **⚠️ 划重点**


## 6.上传后端jar包

选择刚打包的tduck-api.jar上传到宝塔的指定目录![image.png](https://oss.tduckcloud.com/1650114803165-64dce20c-13fa-450b-bca7-1caa105112ef.png)
<a name="AAfxh"></a>

## 7.导入数据库文件

在上面步骤创建的 tduck-pro-platform 文件夹目录的 doc 目录中，找到 tduck-pro.sql 文件进行导入![image.png](https://oss.tduckcloud.com/1650682547934-6cd6671c-bd47-4702-be04-9c88883636b7.png)

## 8.新建java项目

创建一个java项目，选择刚上传的tduck-api.jar，端口设置为8998，选择root用户，点击保存即可![image.png](https://oss.tduckcloud.com/1650114719001-f226e328-dcc1-4545-a61f-b5cb796a799e.png)

## 9.启动项目

点击项目状态，一键移动，启动成功后可以看到资源使用率占比![image.png](https://oss.tduckcloud.com/1650682732544-58889327-6962-44bc-874b-cc17f762dafb.png)


---

## 三、构建前端项目

      1. 安装Nodejs 
      2. 拉取代码 
      3. 编译代码

## 1.安装node.js

```java
curl --silent --location https://rpm.nodesource.com/setup_14.x | bash - 
```

执行命令，等待执行完成![image.png](https://oss.tduckcloud.com/1649462032379-9df8e571-3b7c-4a57-baab-6d4fc7855a7e.png)

```java
yum install nodejs
```

执行，等待执行完成![image.png](https://oss.tduckcloud.com/1649462105150-dbd51011-3a52-4066-80d0-23056408ce17.png)

## 2.拉取代码

```java
git clone https://请输入私服地址/tduck/tduck-pro-front.git
```

拉取前端代码 会提示你输入账号密码 ![image.png](https://oss.tduckcloud.com/1649462263617-aa344e67-51a9-463a-8521-c26e9b703051.png)

## 3.进入代码目录

```java
cd tduck-pro-front
```

进入前端代码 目录![image.png](https://oss.tduckcloud.com/1649462346520-5d3156ff-b65e-4274-ba1e-4eb279233804.png)

## 4.安装依赖

```java
npm install --registry=http://registry.npm.taobao.org
```

安装依赖 需要等待很久 ![image.png](https://oss.tduckcloud.com/1649463227461-2faf6337-c0c9-4ee7-937b-aaf7fb716c1e-20230119093003260.png)

### 5.打包项目

```java
npm install
```

## 6.编译项目

```java
npm run build
```

** ****编译完成tduck-pro-front目录会有一个dist文件夹 记住 后面要用**![image.png](https://oss.tduckcloud.com/1649463370082-f23a19c0-382d-48d2-90e9-d3c48dd92655-20230119093033434.png)

## 7.创建站点

打包好的前端用安装的nginx 创建PHP项目 前端打包的dist目录下的文件复制到创建的站点根目录下 ![image.png](https://oss.tduckcloud.com/1649480343517-14d8cbc9-1b70-48aa-9504-0dd3d80662e2-20230119093051659.png)配置文件（默认单机部署参数情况下不用改，如果后端端口不是8998则需要自行修改)：

> 注意事项：出现404、502错误一定是nginx文件的问题，请仔细检查，不行重新删掉前端重来一次，或者重启nginx服务，重载配置，多试几次！

```tsx
server
{
    listen 80;
    server_name 你的网址;
    index index.php index.html index.htm default.php default.htm default.html;
    root /www/wwwroot/你的网址;
    try_files $uri $uri/ /index.html;
    #SSL-START SSL相关配置，请勿删除或修改下一行带注释的404规则
    #error_page 404/404.html;
    #SSL-END
    
    #ERROR-PAGE-START  错误页配置，可以注释、删除或修改
    #error_page 404 /404.html;
    #error_page 502 /502.html;
    #ERROR-PAGE-END
    
    #PHP-INFO-START  PHP引用配置，可以注释或修改
    include enable-php-00.conf;
    #PHP-INFO-END
    
    
    #禁止访问的文件或目录
    location ~ ^/(\.user.ini|\.htaccess|\.git|\.svn|\.project|LICENSE|README.md)
    {
        return 404;
    }
    
     # 前端代理
    location /tduck-api/{
        proxy_pass http://localhost:8998/tduck-api/;
        add_header Access-Control-Allow-Origin *;
        add_header Access-Control-Allow-Credentials: true;
        add_header Access-Control-Allow-Methods GET,POST,OPTIONS,PUT,DELETE;

        # 连接延时
        proxy_connect_timeout 3600s;
        proxy_read_timeout 3600s;
        proxy_send_timeout 3600s;
        # IP 穿透
        proxy_set_header        Host $proxy_host;
        proxy_set_header        X-Real-IP $remote_addr;
        proxy_set_header        X-Forwarded-For $proxy_add_x_forwarded_for;
        # WebSocket 穿透
        proxy_set_header Origin "";
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
    
    #一键申请SSL证书验证目录相关设置
    location ~ \.well-known{
        allow all;
    }

    
    location ~ .*\.(js|css)?$
    {
        expires      12h;
        error_log /dev/null;
        access_log /dev/null; 
    }
    access_log  /www/wwwlogs/你的网址.log;
    error_log  /www/wwwlogs/你的网址.error.log;
}
```

完成上述步骤后，检查80端口是否开放；并进行访问![image.png](https://oss.tduckcloud.com/1649513265249-76a1fc55-62da-4556-b717-e7fcb3ce3881-20230119093057971.png)默认部署密码：admin/12345678，登录后新建表单测试是否正常即可！



## 四、其他配置：

[文件存储配置](https://www.yuque.com/tduck/home/bezf05?view=doc_embed)[邮件/短信/公众号配置](https://www.yuque.com/tduck/home/mg3mqq?view=doc_embed)



## 五、常见问题：

[TDUCK‘Pro常见问题](
