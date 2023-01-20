# Pro更新指导

## 一、后端更新

## 1.拉取后端代码

1.首先进入部署时创建的后端项目的目录中，执行命令：

```java
git clone https://请输入私服地址/tduck/tduck-pro-platform.git
```

拉取代码 会提示你输入账号密码

2.进入后端项目

```java
cd tduck-pro-platform
```

进入拉取的代码目录
<a name="WzWGw"></a>

## 2.打包后端项目

1.tduck-pro-platform 项目路径下执行命令：

```java
mvn clean package -Dmaven.test.skip=true
```

等待很长时间 <br />2.执行完后，进入target目录，此目录会生成 tduck-api.jar文件

```java
cd tduck-api/target/
```

最终此目录下有一个tduck-api.jar 之后用用 划重点
<a name="i7kjP"></a>

## 3.上传后端jar包

进入宝塔后台-文件，选择刚打包的tduck-api.jar上传到宝塔的指定目录<br />![image.png](https://oss.tduckcloud.com/1650114803165-64dce20c-13fa-450b-bca7-1caa105112ef-20230119094353680.png)
<a name="AAfxh"></a>

## 4.导入更新脚本/数据库文件

**此步骤为选择执行，数据库有更新时执行此步骤，一般更新指南中会有说明。**<br />在上面步骤创建的 tduck-pro-platform 文件夹目录的 doc 目录中，找到 tduck-pro.sql 文件进行导入<br />![image.png](https://oss.tduckcloud.com/1650682547934-6cd6671c-bd47-4702-be04-9c88883636b7-20230119094353705.png)
<a name="nzfAJ"></a>

## 5.替换java项目

新建一个java项目（老项目删除），选择刚上传的tduck-api.jar，端口设置为8998，选择root用户，点击保存即可（注意启动参数）<br />![image.png](https://oss.tduckcloud.com/1650114719001-f226e328-dcc1-4545-a61f-b5cb796a799e-20230119094353733.png)
<a name="LPtEN"></a>

## 6.启动项目

点击项目状态，一键移动，启动成功后可以看到资源使用率占比<br />![image.png](https://oss.tduckcloud.com/1650682732544-58889327-6962-44bc-874b-cc17f762dafb-20230119094353758.png)


---


## 二、前端更新

<a name="Lb5dh"></a>

## 1.拉取代码

找到部署时创建的前端项目目录，进入项目目录

```java
cd tduck-pro-front 
```

![image.png](https://oss.tduckcloud.com/1649462346520-5d3156ff-b65e-4274-ba1e-4eb279233804-20230119094353778.png)

进入部署时创建放置前端项目的文件夹，找到tduck-pro-front目录，执行命令：

```java
git clone https://请输入私服地址/tduck/tduck-pro-front.git
```

拉取代码时会提示你输入账号密码 ，此时输入私服账号密码<br />![image.png](https://oss.tduckcloud.com/1649462263617-aa344e67-51a9-463a-8521-c26e9b703051-20230119094353799.png)
<a name="OkKXw"></a>

## 2.打包项目

tduck-pro-fornt目录下执行命令

```java
npm install
```

<a name="Am8yO"></a>

## 3.编译项目

tduck-pro-fornt目录下执行命令

```java
npm run build
```

编译完成tduck-pro-front目录会有一个dist文件夹，记住后面需要使用<br />![image.png](https://oss.tduckcloud.com/1649463370082-f23a19c0-382d-48d2-90e9-d3c48dd92655-20230119094353817.png)
<a name="QZs0l"></a>

## 4.替换文件

进入站点目录，将打包好的 dist 文件夹内的全部文件复制到站点文件夹下替换掉，可以先将旧文件删除<br />![image.png](https://oss.tduckcloud.com/1649480408021-8e30c1a3-afc2-4d39-b607-ddd311ff54ed.png)<br />默认部署密码：admin/12345678，登录后新建表单测试是否正常即可！

<a name="d0ZGM"></a>

## 常见问题：

[TDUCK‘Pro常见问题](./proUsualQuestion)
