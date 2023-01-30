const commonPath = '/buyPro';

export default [
    {
        text: '购买说明',
        items: [
            {text: '购买步骤', link: `${commonPath}/index`},
            {text: '授权说明', link: `${commonPath}/authorize`},
            {text: '更新日志', link: `${commonPath}/changeLog`},
            {text: '技术说明', link: `${commonPath}/technology`},
            {text: '工单反馈', link: `${commonPath}/workOrder`},
            {text: '免责声明', link: `${commonPath}/disclaimer`},
            {text: '功能对比', link: `https://www.yuque.com/tduck/home/ntfcoq7situdnuyq?singleDoc#v6Pl`},
        ]
    },
    {
        text: '快捷入口',
        items: [
            {text: '最佳实践', link: `../example/`},
            {text: '功能说明', link: `../functionDesc/`},
            {text: '部署说明', link: `../proDeploy/`},
        ]
    }
]

