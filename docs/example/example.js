const commonPath = '/example';

export default [
    {
        text: '引导',
        collapsible: true,
        collapsed: false,
        items: [
            {text: '如何使用公开回复', link: `${commonPath}/index`},
            {text: '如何设置部门主管', link: `${commonPath}/departmentHead`},
            {text: '如何使用流程表单', link: `${commonPath}/flowableForm`},
            {text: '如何使用函数计算', link: `${commonPath}/functionCalculation`},
            {text: '如何使用共享表单', link: `${commonPath}/teamWork`},
            {text: '如何使用数据唯一校验', link: `${commonPath}/dataOnly`},
            {text: '如何使用多渠道收集', link: `${commonPath}/multiChannel`},
            {text: '如何使用投票组件', link: `${commonPath}/voteScene`},
            {text: '公开查询进阶演示', link: `${commonPath}/publicQuery`},
            {text: '如何关联用户角色', link: `${commonPath}/relationRole`},
            {text: '协同管理进阶演示', link: `${commonPath}/collaborativeManagement`},
        ]
    }
]

