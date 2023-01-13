


### 前言
目前市面上的表单平台虽然功能强大，但是部分业务组件或者额外收取存储等费用，且费用较高，在数据隐私性较强且有特殊表单需求的场景下无法满足业务需求，国内的开源表单系统比较少，tduck表单应运而生。愿景能够让企业低成本拥有独立自定义表单问卷，快速赋能业务。

[官方网站](https://www.tduckcloud.com/)&nbsp;&nbsp;
[部署文档](https://www.yuque.com/tduck/home)&nbsp;&nbsp;
[微信社区](https://pro.tduckcloud.com/s/QUiDSKq8)&nbsp;&nbsp;
[bilibili频道](https://space.bilibili.com/409825300) &nbsp;&nbsp;

---

💥表单设计模块暂未开源，项目通过npm引用，不影响使用、二开其他功能。<br />💥作者说：把[ **github托管的这个项目 点到1.5k star！** ](https://github.com/TDuckCloud/tduck-platform)💥就全部开源！<br />💥如果您想提前获得该源码 请贡献20个star（gitee/github都行），联系作者获取源码！

---

<a name="3962839d"></a>
### 开源版

- 在线体验：[演示地址](http://www.tduckcloud.com)
- 默认账号：test[@tduckapp.com ](/tduckapp.com ) 
- 默认密码：12345678
<a name="3b74893b"></a>
### PRO版

- 在线体验：[演示地址](http://www.tduckcloud.com)
- 账号：test
- 密码：12345678
<a name="qtVMp"></a>
## 快速启动

- 部署文档：[点击查看部署文档](https://www.yuque.com/tduck/home/vl7y79)
<a name="42ebb852"></a>
#### 配置最小开发环境：

- [MySQL5.7或以上](https://dev.mysql.com/downloads/mysql/)
- [JDK1.8或以上](http://www.oracle.com/technetwork/java/javase/overview/index.html)
- [Maven](https://maven.apache.org/download.cgi)
- [Nodejs](https://nodejs.org/en/download/)
<a name="8d08007a"></a>
#### 创建一个tduck的数据库  **版本选择mysql5.7**  ，并执行项目目录下doc/tduck.sql文件
<a name="f1e6fc47"></a>
#### 启动后端服务
打开命令行，输入以下命令
```bash
mvn clean install -DskipTests
cd tduck-platform/tduck-api
mvn clean package -DskipTests
java -Dfile.encoding=UTF-8 -jar target/tduck-api.jar
```
<a name="9a484d20"></a>
#### 启动管理后台前端
打开命令行，输入以下命令
```bash
npm install -g cnpm --registry=https://registry.npm.taobao.org
cd tduck-front
cnpm install
cnpm run serve
```
浏览器打开，输入网址`http://localhost:8888`, 进入页面。
<a name="96d8a15e"></a>
### 项目源码
| 后端源码 | 前端源码 |
| --- | --- |
| [https://gitee.com/TDuckApp/tduck-platform](https://gitee.com/TDuckApp/tduck-platform) | [https://gitee.com/TDuckApp/tduck-front](https://gitee.com/TDuckApp/tduck-front) |
| [https://github.com/TDuckCloud/tduck-platform](https://github.com/TDuckCloud/tduck-platform) | [https://github.com/TDuckCloud/tduck-front](https://github.com/TDuckCloud/tduck-front) |

<a name="ca9a2400"></a>
## 技术体系
<a name="55abea2d"></a>
### 服务端
```
- SpringBoot 
- Mybatis-Plus
- Lombok
- Hutool
- Guava
```
<a name="Ds7Ty"></a>
### 客户端
```
- Vue2
- ElementUI
- Echarts
- Axios
- nprogress
```
<a name="Mo2vf"></a>
### 后端项目结构

- tduck-common 通用模块
- tduck-account 账号模块
- tduck-storage 存储模块
- tduck-project 项目模块
- tduck-wx-mp  微信公众号模块
- tduck-api 客户端API
<a name="06a3c111"></a>
### 了解更多

- [来看看TDUCK的新面孔](https://mp.weixin.qq.com/s/pLltfRv-KvStMxKefAvD_g)
- [参与TDUCK项目，贡献一份力量！](https://gitee.com/TDuckApp/tduck-platform/issues/I4ZC6R)
- [JAR包部署修改前端内容](https://www.yuque.com/mawuhui/kgacqz/zpubyn)
- [宝塔Jar包部署如何指定配置文件](https://www.yuque.com/mawuhui/kgacqz/paqc6g)
