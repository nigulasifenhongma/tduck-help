开发环境本地运行 正式环境请参考部署教程！

1. 项目运行所需环境：
    - [MySQL5.7或以上(opens new window)](https://dev.mysql.com/downloads/mysql/)
    - [JDK1.8或以上(opens new window)](http://www.oracle.com/technetwork/java/javase/overview/index.html)
    - [Maven(opens new window)](https://maven.apache.org/download.cgi)
    - [Nodejs(opens new window)](https://nodejs.org/en/download/)
2. 创建一个tduck的数据库，并执行项目目录下doc/tduck.sql文件
3. 启动后端服务拉取后端代码 git clone https://gitee.com/TDuckApp/tduck-platform.git 打开命令行，输入以下命令
```xml
mvn clean install -DskipTests
cd tduck-platform/tduck-api
mvn clean package -DskipTests
java -Dfile.encoding=UTF-8 -jar tduck-api.jar
```

4. <br />
5. 启动前端项目拉取前端代码 git clone https://gitee.com/TDuckApp/tduck-front.git
6. 打开命令行，输入以下命令
```xml
npm install -g cnpm --registry=https://registry.npm.taobao.org
cd tduck-front
cnpm install
cnpm run serve
```

7. 此时，浏览器打开，输入网址http://localhost:8888, 进入页面
