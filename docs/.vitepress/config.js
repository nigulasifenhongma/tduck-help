import pro from "./pro";
import openSource from "./openSource";

export default {
    base: '/',
    title: 'tduck-doc', // 所有文档的浏览器标签title
    description: '填鸭文档', // 会渲染成<meta>标签，SEO用
    themeConfig: {
        siteTitle: false,
        logo: '/public/logo-blue.png',
        nav: [
            {text: '菜单1', link: '/openSource/', activeMatch: '/openSource/'},
            {text: '菜单2', link: '/menu2/', activeMatch: '/menu2/'},
            {text: '菜单3', link: '/menu3/', activeMatch: '/menu3/'},
        ],
        sidebar: {
            '/openSource/': openSource,
            '/menu2/': pro
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2018-2022 -TDUCK 填鸭表单 Evan You'
        }
    },
}
