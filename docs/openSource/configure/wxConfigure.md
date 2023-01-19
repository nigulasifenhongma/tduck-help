# 微信公众号配置

## 说明
不配置在使用微信公众号相关功能时会抛出异常(登录，微信通知，微信中分享信息定义等)，可以申请微信测试公众号 [https://mp.weixin.qq.com/debug/cgi-bin/sandbox?t=sandbox/login](https://mp.weixin.qq.com/debug/cgi-bin/sandbox?t=sandbox/login)
```
wx:
  mp:
    configs:
      - appId: 
        secret: 
        token: 
        aesKey:
```
![](https://cdn.nlark.com/yuque/0/2022/png/639882/1652339693289-55040614-47bd-45fc-87ab-e1ec45dd8257.png#clientId=u645bc863-f476-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u13c438c4&margin=%5Bobject%20Object%5D&originHeight=559&originWidth=1145&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ub34fbd73-8004-4697-872e-8cd0c5dc9a1&title=)
如图所示 把对应参数appId等配置到项目中，然后启动项目，本地可以使用内网穿透
微信接口配置信息
url：填入外网可访问地址/tduck-api/wx/mp/portal/你的appId
token：可自行定义 需要与项目中token相同

如果提示配置失败请仔细检查项目中参数是否配置正确

<a name="9b2115db"></a>
## 开启微信登录
微信配置比较麻烦 如果无需使用 需要关闭可以在如下配置关闭

.env.development # 本地环境配置

.env.production # 正式环境配置
```yaml
# 微信功能开关 开启设置 ON，关闭设置 OFF
VUE_APP_WX = ON
```

