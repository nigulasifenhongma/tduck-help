# 微信支付配置

::: tip 注意事项
系统目前使用微信支付，需要首先进行企业微信支付申请，签约完成后可进行配置
:::

## 后台配置

进入tduck后台，点击系统配置菜单，选择微信支付进行配置
![image.png](https://oss.tduckcloud.com/1666708084393-ce37831c-4b3e-43a4-9429-9cc6867867f5.png)

appid：填写同一主体下已认证的服务号appid
商户id：微信支付后台获取
![image.png](https://oss.tduckcloud.com/1671190185550-ba3e2951-4c11-4037-8ee9-3bdfe128e475.png)
商户秘钥：微信支付后台获取

回调地址：https://你的域名/tduck-api/form/ext/goods/pay/notify
