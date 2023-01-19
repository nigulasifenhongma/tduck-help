# 快速启动
## 配置最小开发环境：
- [MySQL5.7或以上](https://dev.mysql.com/downloads/mysql/)
- [JDK1.8或以上](http://www.oracle.com/technetwork/java/javase/overview/index.html)
- [Maven](https://maven.apache.org/download.cgi)
- [Nodejs](https://nodejs.org/en/download/)
## 启动
###  1️⃣ 创建数据库  
**数据库版本选择mysql5.7**  ，并执行项目目录下doc/tduck.sql文件
###  2️⃣ 启动后端服务
打开命令行，输入以下命令
```bash
mvn clean install -DskipTests
cd tduck-platform/tduck-api
mvn clean package -DskipTests
java -Dfile.encoding=UTF-8 -jar target/tduck-api.jar
```
###  3️⃣ 启动管理后台前端
进入tduck-front根目录，打开命令行，输入以下命令
```bash
npm install -g cnpm --registry=https://registry.npm.taobao.org
cd tduck-front
cnpm install
cnpm run serve
```
###  4️⃣ 浏览器️打开，输入网址`http://localhost:8888`, 进入页面。
