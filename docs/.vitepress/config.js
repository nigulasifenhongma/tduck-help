import buyPro from "../buyPro/buyPro"
import openSource from "../openSource/openSource";
import example from "../example/example";
import FunctionDesc from "../functionDesc/functionDesc";
import proDeploy from "../proDeploy/proDeploy";

export default {
    base: '/',
    title: '填鸭表单帮助中心', // 所有文档的浏览器标签title
    description: '填鸭文档', // 会渲染成<meta>标签，SEO用
    head: [
        ['link', {rel: 'icon', href: '/public/favicon-blue.png'}],
        ['meta', {name: 'theme-color', content: '#1470d7'}],
        ['meta', {name: 'twitter:card', content: 'summary_large_image'}],
    ],
    themeConfig: {
        siteTitle: '帮助中心',
        logo: '/public/logo-blue.png',
        nav: [
            {text: '开源版', link: '/openSource/', activeMatch: '/openSource/'},
            {
                text: '🔥PRO版本',
                items: [
                    {
                        text: '在线体验',
                        link: 'https://pro.tduckcloud.com'
                    },
                    {
                        text: '购买说明',
                        link: '/buyPro/'
                    },
                    {
                        text: '最佳实践',
                        link: '/example/'
                    },
                    {
                        text: '功能说明',
                        link: '/functionDesc/'
                    },
                    {
                        text: '部署说明',
                        link: '/proDeploy/'
                    }
                ]
            },
            {text: 'TDUCK-Data', link: '/menu3/', activeMatch: '/menu3/'},
            {
                text: '相关链接',
                items: [
                    {
                        text: 'Vue3',
                        link: 'https://cn.vuejs.org/'
                    }
                ]
            },
        ],
        sidebar: {
            '/openSource/': openSource,
            '/buyPro/': buyPro,
            '/example/': example,
            '/functionDesc/': FunctionDesc,
            '/proDeploy/': proDeploy
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2018-2022 -TDUCK 填鸭表单 '
        },
        algolia: {
            appId: 'C0XYPUDBSQ',
            apiKey: '9fb2ac478bdcaf642ad36fec02d50871',
            indexName: 'tduckSearch',
            placeholder: '请输入关键词',
            buttonText: '请输入您想搜索的内容',
        },
    },

}
