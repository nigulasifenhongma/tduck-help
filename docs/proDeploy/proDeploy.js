const commonPath = '/proDeploy';

export default [
    {
        text: '引导',
        collapsible: true,
        collapsed: false,
        items: [
            {text: 'Pro部署文档', link: `${commonPath}/index`},
            {text: 'Pro更新指导', link: `${commonPath}/proUpdate`},
            {text: 'Pro常见问题', link: `${commonPath}/proUsualQuestion`},
            {text: 'Uniapp部署文档', link: `${commonPath}/uniappDeploy`},
            {text: '文件存储配置', link: `${commonPath}/fileConfigure`},
            {text: '微信支付配置', link: `${commonPath}/wechatPay`},
            {text: '邮件/短信/公众号配置', link: `${commonPath}/othersConfigure`},
        ]
    }
]

