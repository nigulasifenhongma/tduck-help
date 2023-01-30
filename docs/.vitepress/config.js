import buyPro from "../buyPro/buyPro"
import openSource from "../openSource/openSource";
import example from "../example/example";
import FunctionDesc from "../functionDesc/functionDesc";
import proDeploy from "../proDeploy/proDeploy";

export default {
    base: '/',
    title: '帮助中心', // 所有文档的浏览器标签title
    description: '免费问卷系统,免费表单系统,开源问卷系统,开源表单系统,调查问卷,数据收集,在线考试,工单系统,自定义流程,源码交付的TDUCK填鸭表单系统', // 会渲染成<meta>标签，SEO用
    head: [
        ['script', {}, `
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?cd7cf52e13751144070b720c4738bea1";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();
            `],
        ['link', {rel: 'icon', href: 'https://oss.tduckcloud.com/favicon-blue.png'}],
        ['meta', {name: 'theme-color', content: '#1470d7'}],
        ['meta', {name: 'twitter:card', content: 'summary_large_image'}],
    ],
    themeConfig: {
        siteTitle: '填鸭表单帮助中心',
        logo: 'https://oss.tduckcloud.com/favicon-blue.png',
        nav: [
            {text: 'Tduck开源版', link: '/openSource/', activeMatch: '/openSource/'},
            {
                text: '🔥TduckPro商业版',
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
            {
                text: '开源地址',
                items: [
                    {
                        text: 'Gitee',
                        link: 'https://gitee.com/TDuckApp/tduck-platform'
                    },
                    {
                        text: 'Github',
                        link: 'https://github.com/TDuckCloud/tduck-platform'
                    }
                ]
            },
            {
                text: '售前咨询',
                link: 'https://openai.weixin.qq.com/webapp/DVDIgC9Py9rIASfEVpzdcmrUUv56dB?robotName=TduckService',
                activeMatch: '#'
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
            message: '',
            copyright: 'Copyright © 2018 - 2023 TDuckCloud. 湖南省众达数蔚信息技术有限公司-<a href="https://beian.miit.gov.cn/#/Integrated/index">湘ICP备19005498号-3</a> All Rights Reserved.填鸭表单版权所有'
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
