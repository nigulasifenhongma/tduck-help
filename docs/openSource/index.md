# 引导

::: tip 项目的简介 💡
- 2019年初，同事想做一场针对全国的范围内的照片数据收集，当时使用了一款saas工具：[*客表单]；

- 市面上的表单平台虽功能强大，但部分业务组件以及附件存储费用偏高，考虑到问卷调研结果的数据安全性以及成本费用的原因；而且我们发现，若数据隐私性较强，有特殊场景的需求，saas化的工具无法满足业务。 

- 逛了开源社区发现国内的开源表单系统比较少；我们计划用工作空余时间写一个项目，并开源。```tduck表单```从此诞生。

- 我们愿景能够让企业低成本拥有独立自定义表单问卷，快速赋能业务。

- [开源版](https://demo.tduckapp.com) 经过了2年的优化后，功能趋于稳定； 2021年下半年推出了[tduck-Pro商业版](https://pro.tduckcloud.com)。

:::
## Hot！社区活动
> 点star，获取 [开源版表单编辑器] 源码

💥开源版v3分支表单编辑器暂未开源，该模块通过npm引用，不影响使用、二开其他功能。

💥如果您想提前获得该源码 请贡献20个star（gitee/github），[联系作者](https://pro.tduckcloud.com/s/QUiDSKq8)获取源码。

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


## 了解更多

- [来看看TDUCK的新面孔](https://mp.weixin.qq.com/s/pLltfRv-KvStMxKefAvD_g)
- [参与TDUCK项目，贡献一份力量！](https://gitee.com/TDuckApp/tduck-platform/issues/I4ZC6R)
- [JAR包部署修改前端内容](./deploy/jarChange)
- [宝塔Jar包部署如何指定配置文件](./deploy/startByProfile)
