const commonPath = '/functionDesc';

export default [
    {
        text: '功能说明',
        items: [
            {text: 'Pro与Uniapp区别', link: `${commonPath}/index`},
            {text: 'Uniapp使用说明', link: `${commonPath}/uniappDesc`},
            {text: 'Pro使用说明', link: `${commonPath}/proDesc`},
            {text: '演示账号', link: `${commonPath}/account`},
        ]
    },
    {
        text: '快捷入口',
        items: [
            {text: '购买说明', link: `../buyPro/`},
            {text: '最佳实践', link: `../example/`},
            {text: '部署说明', link: `../proDeploy/`},
        ]
    }
]

