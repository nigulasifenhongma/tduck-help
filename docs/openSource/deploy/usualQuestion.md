# 开源版常见问题

## 1.运行不起来（启动没有任何日志）

![img](https://oss.tduckcloud.com/wps96.jpg)

原因是没有安装java环境，参考如下文档，先安装java环境后再删除项目重试

![img](https://oss.tduckcloud.com/wps97.jpg)

## 2.日志invalid file bad magic number exec formaterror

![img](https://oss.tduckcloud.com/wps98.jpg)

建议检查jar包路径，以及启动参数的路径是否正确

## 3.数据库导入后没有表

![img](https://oss.tduckcloud.com/wps99.jpg)

如果是在宝塔部署，请确保点击过“导入”按钮；重试无效的话请将sql文件通过数据库工具手动执行。

## 4.报错： Could not initialize class com.baomidou.mybatisplus.core.toolkit.support.SerializedLambdaMeta]

nested exception is org.apache.ibatis.builder.BuilderException: Error evaluating expression 'ew.sqlSegment != null and ew.sqlSegment != '' and ew.nonEmptyOfWhere'. Cause: org.apache.ibatis.ognl.OgnlException: sqlSegment [java.lang.NoClassDefFoundError: Could not initialize class com.baomidou.mybatisplus.core.toolkit.support.SerializedLambdaMeta]

![img](https://oss.tduckcloud.com/wps100.jpg)

请确保使用的jdk版本为1.8，不要使用其他高版本jdk

## 5.发布后访问404、预览404

![img](https://oss.tduckcloud.com/wps101.jpg)

nginx配置文件中增加如下参数：try_files $uri $uri/ /index.html;

![img](https://oss.tduckcloud.com/wps102.jpg)

### 6.文件上传没用，照片上传不了怎么办

如果使用非jar文件部署，需要参考 [文件存储设置](https://www.yuque.com/tduck/home/hg5u8x) 并在图示配置文件中进行文件存储配置的修改；修改配置文件后需要重新进行后端项目编译，否则配置不会生效！

![img](https://oss.tduckcloud.com/wps103.jpg)

### 7.点击登录报错

![img](https://oss.tduckcloud.com/wps104.jpg)

检查数据库链接信息，确认账号、密码、数据库名称填写正确，且按照部署文档格式要求进行空格！
