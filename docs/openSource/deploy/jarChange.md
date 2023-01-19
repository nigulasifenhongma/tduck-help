# JAR包部署修改前端内容

## 修改前端内容

如果需要修改一些前端的文案或者功能，先进行修改！

## 打包前端项目

打包好的前端项目，生成一个dist文件

![img](https://oss.tduckcloud.com/wps105.jpg) 

复制文件夹内所有的文件

![img](https://oss.tduckcloud.com/wps106.jpg) 

## dist文件添加至后端项目

如图，将前端打包好的后端项目全部添加到后端项目的tduck-api/src/main/resources/static目录下

![img](https://oss.tduckcloud.com/wps107.jpg) 

删除target文件夹（确保检测到更新）

![img](https://oss.tduckcloud.com/wps108.jpg) 

完成上述步骤后，重新打包项目或生成jar包，即可完成修改！
