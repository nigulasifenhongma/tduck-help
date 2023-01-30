const commonPath = '/proDeploy';

export default [
    {
        text: '部署说明',
        collapsible: true,
        collapsed: false,
        items: [
            {text: 'Pro部署文档', link: `${commonPath}/index`},
            {text: 'Pro更新指导', link: `${commonPath}/proUpdate`},
            {text: 'Pro常见问题', link: `${commonPath}/proUsualQuestion`},
            {text: 'Uniapp部署文档', link: `${commonPath}/uniappDeploy`},
            {text: '文件存储配置', link: `${commonPath}/fileConfigure`},
            {text: '微信支付配置', link: `${commonPath}/wechatPay`},
            {text: '其他数据库兼容', link: `${commonPath}/otherDatabase`},
            {text: '邮件/短信/公众号配置', link: `${commonPath}/othersConfigure`},
        ]
    }, {
        text: '快捷入口',
        items: [
            {text: '购买说明', link: `../buyPro/`},
            {text: '最佳实践', link: `../example/`},
            {text: '功能说明', link: `../functionDesc/`},
        ]
    }
]

