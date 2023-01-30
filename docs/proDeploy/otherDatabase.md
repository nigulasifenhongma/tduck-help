# 其他数据库兼容
:::tip 前言
官方主要维护Mysql版本，无特殊需求建议使用Mysql，项目通过MybatisPlus实现对主流数据库兼容，提供对Mysql、Oracle、Pgsql 等数据库兼容。添加对应的驱动和配置即可。
:::

## 统一修改内容

1. Oracle等数据库对自增不友好，修改主键生成策略为自动生成
 
修改tduck-api/src/main/resources/application.yml 文件 id-type参数为 _ASSIGN_ID_

![image.png](https://oss.tduckcloud.com/1646734509811-289c9c75-3eb7-404d-8b1a-5fc7e40cbcfb.png)

2. 驱动依赖建议添加在_tduck-common/pom.xml 里面
3. 修改分页类型：

> tduck-api/src/main/java/com/tduck/cloud/api/config/MybatisPlusConfig.java

文件内为你的数据类型

![image.png](https://oss.tduckcloud.com/1646893960627-29dc1f52-e51e-4be5-90c5-c9f3bb073c92.png)

## 1. Oracle数据库

测试使用为oracle 12c版本   可能需要更换为对应版本驱动

```bash
<!--oracle驱动-->
<dependency>
    <groupId>com.oracle.database.jdbc</groupId>
    <artifactId>ojdbc8</artifactId>
    <version>${oracle.version}</version>
</dependency>
```

```bash
spring:
  datasource:
    driver-class-name: oracle.jdbc.OracleDriver
    url: jdbc:oracle:thin:@101.78.115.221:1521/xe
    username: tduck_pro
    password: 123456
```

## 2. PostgreSQL

(根据不同版本的数据库引入对应版本的驱动，下载地址：[https://jdbc.postgresql.org/download.html](https://jdbc.postgresql.org/download.html))

```bash
<!--  postgresql-->
<dependency>
   <groupId>org.postgresql</groupId>
   <artifactId>postgresql</artifactId>
   <version>42.2.6</version>
</dependency>
```

```bash
spring:
  datasource:
    driver-class-name: org.postgresql.Driver
    url:  jdbc:postgresql://localhost:5432/postgres
    username: postgres
    password: root
    type: com.zaxxer.hikari.HikariDataSource
    hikari:
      connection-test-query: SELECT 1
```

## 3. 达梦数据库

参考官方文档

[https://eco.dameng.com/docs/zh-cn/start/java-development.html](https://eco.dameng.com/docs/zh-cn/start/java-development.html)

```bash
<dependency>
  <groupId>com.dameng</groupId>
  <artifactId>DmJdbcDriver18</artifactId>
  <version>8.1.2.79</version>
</dependency>
```

```bash
spring:
  datasource:
    driver-class-name: org.postgresql.Driver
    url:  jdbc:postgresql://localhost:5432/postgres
    username: postgres
    password: root
    type: com.zaxxer.hikari.HikariDataSource
    hikari:
      connection-test-query: SELECT 1
```

## 4. 兼容Activiti

acitivti 本身是不兼容国产DB的，如达梦 KingBase等。
在适配达梦时遇到

``` java
Cause: dm.jdbc.driver.DMException: 第1 行附近出现错误:
```

无效的表或视图名[ACT_GE_PROPERTY]

此时需要注意用户和模式的关系，账号下是否存在多个模式。
