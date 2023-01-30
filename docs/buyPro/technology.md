# 技术说明
::: danger 💁‍♂️ 声明：本产品未授权任何单位/个人进行代理出售，不受理通过非官方渠道购买的任何问题。
:::
![image.png](https://oss.tduckcloud.com/1662877232059-085d76fd-a851-4085-9625-780a0061e0a9.png)

<a name="e778d61a"></a>
## 后端项目技术栈
| 框架 | 说明 | 版本 | 学习指南 |
| --- | --- | --- | --- |
| [Spring Boot](https://spring.io/projects/spring-boot) | 应用开发框架 | 2.3.5.RELEASE | [文档](https://github.com/YunaiV/SpringBoot-Labs) |
| [MySQL](https://www.mysql.com/cn/) | 数据库服务器 | 5.7 |  |
| [MyBatis Plus](https://mp.baomidou.com/) | MyBatis 增强工具包 | 3.4.3.4 | [文档](http://www.iocoder.cn/Spring-Boot/MyBatis/?yudao) |
| [Redis](https://redis.io/) | key-value 数据库 | 5.0 |  |
| [Spring MVC](https://github.com/spring-projects/spring-framework/tree/master/spring-webmvc) | MVC 框架 | 5.3.15 | [文档](http://www.iocoder.cn/SpringMVC/MVC/?yudao) |
| [Spring Security](https://github.com/spring-projects/spring-security) | Spring 安全框架 | 5.5.4 | [文档](http://www.iocoder.cn/Spring-Boot/Spring-Security/?yudao) |
| [Hibernate Validator](https://github.com/hibernate/hibernate-validator) | 参数校验组件 | 6.2.0 | [文档](http://www.iocoder.cn/Spring-Boot/Validation/?yudao) |
| [flowable](https://www.flowable.com/open-source) | 工作流引擎 | 6.0 | [文档](https://www.flowable.com/open-source) |
| [~~Activiti~~](https://github.com/Activiti/Activiti)~~ 已弃用~~ | ~~工作流引擎~~ | ~~7.1.0.M6~~ | |
| [Knife4j](https://gitee.com/xiaoym/knife4j) | Swagger 增强 UI 实现 | 3.0.2 | [文档](http://www.iocoder.cn/Spring-Boot/Swagger/?yudao) |
| [Jackson](https://github.com/FasterXML/jackson) | JSON 工具库 | 2.12.6 |  |
| [Lombok](https://projectlombok.org/) | 消除冗长的 Java 代码 | 1.16.14 | [文档](http://www.iocoder.cn/Spring-Boot/Lombok/?yudao) |
| [~~ElasticSearch~~](https://www.elastic.co/)~~ 已弃用~~ | ~~搜索引擎 存储表单收集非结构数据便于检索~~ | ~~7.17.0~~ | [文档](https://www.elastic.co/) |

<a name="9abfe4a0"></a>
## 前端项目技术栈
| 框架 | 说明 | 版本 |
| --- | --- | --- |
| [Vue](https://cn.vuejs.org/index.html) | JavaScript 框架 | 2.6.12 |
| [ElementUI](https://element.eleme.cn/#/zh-CN/component/installation) | Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库 | 2.15.7 |

## 后台目录说明
| 目录名称 | 说明 |
| -- | --- |
|  tduck-api | 主项目 提供接口访问 |
|  tduck-common | 通用功能封装 |
|  tduck-storage | 文件存储 本地 oss等 |
|  tduck-system | 系统模块 包含用户 角色 部门等基础 |
|  tduck-form | 表单模块 表单设计 发布 填写等 |
|  tduck-wx-mp | 微信公众号相关模块 |
|  tduck-activiti | 工作流模块 |
|  tduck-message | 消息模块 系统内所有消息 包含邮件 短信 站内信 微信等通知 |


## **项目结构介绍**

-  api 后端接口调用相关
-  assets 静态资源相关
    -  icons svg图标
    -  images 图片
    -  logo
    -  styles 样式
-  components 通用组件 自动注册全局
-  formgen 核心表单生成组件
-  layout 项目主布局
-  plugin 插件
-  router 路由
-  store vue store
-  utils 工具类
-  views 项目页面
