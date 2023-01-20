const commonPath = '/openSource';

export default [
    {
        text: '项目引导',
        collapsible: true,
        collapsed: false,
        items: [
            {text: '开始', link: `${commonPath}/index`},
            {text: '启动', link: `${commonPath}/quickStart`},
            {text: '更新日志', link: `${commonPath}/changeLog`},
        ]
    },
    {
        text: '部署说明',
        collapsible: true,
        items: [
            {text: '使用宝塔部署', link: `${commonPath}/deploy/openSourceDeploy`},
            {text: '使用前后端分离部署', link: `${commonPath}/deploy/fenli`},
            {text: '使用指定配置文件启动', link: `${commonPath}/deploy/startByProfile`},
            {text: '使用jar包部署修改前端', link: `${commonPath}/deploy/jarChange`},
            {text: '配置文件/三方配置', link: `${commonPath}/deploy/setProfile`},
            {text: '常见问题', link: `${commonPath}/deploy/usualQuestion`},
        ]
    },
    {
        text: '项目配置',
        collapsible: true,
        items: [
            {text: '文件存储', link: `${commonPath}/configure/fileConfigure`},
            {text: '图形验证码', link: `${commonPath}/configure/photoCode`},
            {text: '邮箱配置', link: `${commonPath}/configure/emailConfigure`},
            {text: '接口安全配置', link: `${commonPath}/configure/apiSecurityConfigure`},
            {text: '微信公众号配置', link:`${commonPath}/configure/wxConfigure`},
        ]
    }
]
