# 引导

::: tip 项目的Idea
2019年初，一位同事想做一个针对C端用户的消费者调研，当时一直使用的是saas的某数据；
由于需要考虑问卷调研结果的数据安全性、成本费用等原因。 市面上的表单平台虽然功能强大，但部分业务组件或者额外收取存储等费用，
在数据隐私性较强且有特殊表单需求的场景下无法满足业务需求，国内的开源表单系统比较少。
于是我们计划用工作空余时间写一个项目，并开源。```tduck表单```应运而生。

愿景能够让企业低成本拥有独立自定义表单问卷，快速赋能业务。

[开源版](https://demo.tduckapp.com) 经过了2年的优化后，功能趋于稳定； 2021年下半年推出了[tduck-Pro商业版](https://pro.tduckcloud.com)。

<div style="text-align: left">
<a href="https://www.tduckcloud.com" target="_blank">体验地址</a>&nbsp;
<a href="#">部署文档</a>&nbsp;
<a href="https://pro.tduckcloud.com/s/QUiDSKq8" target="_blank">微信社区</a>&nbsp;
<a href="https://space.bilibili.com/409825300" target="_blank">Bilibili频道</a>
</div>
::: 
## Hot！社区活动👉获取开源版源码
💥表单设计模块（v3分支）暂未开源，项目通过npm引用，不影响使用、二开其他功能。

💥如果您想提前获得该源码 请贡献20个star（gitee/github），联系作者获取源码。

#### ① 发动好友给项目[点击 star️](https://gitee.com/TDuckApp/tduck-platform) ② 整理截图联系作者（企微） ③成功获取源码


## 技术体系
### 服务端
```
- SpringBoot 
- Mybatis-Plus
- Lombok
- Hutool
- Guava
```
### 客户端
```
- Vue2
- ElementUI
- Echarts
- Axios
- nprogress
```
## 后端项目结构

- tduck-common 通用模块
- tduck-account 账号模块
- tduck-storage 存储模块
- tduck-project 项目模块
- tduck-wx-mp  微信公众号模块
- tduck-api 客户端API

## 项目源码
| 后端源码                                                     | 前端源码                                                     |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [https://gitee.com/TDuckApp/tduck-platform](https://gitee.com/TDuckApp/tduck-platform) | [https://gitee.com/TDuckApp/tduck-front](https://gitee.com/TDuckApp/tduck-front) |
| [https://github.com/TDuckCloud/tduck-platform](https://github.com/TDuckCloud/tduck-platform) | [https://github.com/TDuckCloud/tduck-front](https://github.com/TDuckCloud/tduck-front) |


## 更多

- [来看看TDUCK的新面孔](https://mp.weixin.qq.com/s/pLltfRv-KvStMxKefAvD_g)
- [参与TDUCK项目，贡献一份力量！](https://gitee.com/TDuckApp/tduck-platform/issues/I4ZC6R)
- [JAR包部署修改前端内容](https://www.yuque.com/mawuhui/kgacqz/zpubyn)
- [宝塔Jar包部署如何指定配置文件](https://www.yuque.com/mawuhui/kgacqz/paqc6g)
