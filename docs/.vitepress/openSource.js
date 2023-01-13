const commonPath = '/openSource';

export default [
    {
        text: '概要',
        collapsible: true,
        collapsed: false,
        items: [
            {text: '关于填鸭', link: `${commonPath}/outline/about`},
            {text: '更新日志', link: `${commonPath}/outline/change`},
            {text: '快速启动', link: `${commonPath}/outline/quickStart`},
        ]
    },
    {
        text: '部署说明',
        collapsible: true,
        items: [
            {text: '宝塔部署', link: `${commonPath}/deploy/openSourceDeploy.md`},
            {text: '常见问题', link: '/item-d'},
            {text: '使用jar包部署如何修改前端？', link: '/item-d'},
            {text: '前后端分离部署', link: '/item-d'},
            {text: '配置文件/三方配置', link: '/item-d'},
            {text: '指定配置文件启动', link: '/item-d'},
        ]
    },
    {
        text: '配置说明',
        collapsible: true,
        items: [
            {text: '文件存储', link: '/item-c'},
            {text: '图形验证码', link: '/item-d'},
            {text: '邮箱配置', link: '/item-d'},
            {text: '接口安全配置', link: '/item-d'},
            {text: '前端项目配置', link: '/item-d'},
            {text: '微信公众号配置', link: '/item-d'},
            {text: '微信扫码功能', link: '/www.baidu.com'}
        ]
    }
]
