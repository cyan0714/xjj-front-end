---
title: 单体框架路由说明
---

```js
第一种路由（仅有父路由时）
这种路由的应用想法是用一个layout层，通过重定向功能跳转到下面的子路由
export default [
    {
        path: '/meetingTJ',
        name: 'meetingTJ',
        component: () => import('@xjjbase/modules/xjjvuelayout/views/'),

        redirect: "/meetingTJ/meetingTJ",
        // 当设置 true 的时候该路由不会在侧边栏出现 如401，login等页面，或者如一些编辑页面/edit/1
        hidden: false, // (默认 false)

        // 当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面
        // 只有一个时，会将那个子路由当做根路由显示在侧边栏--如引导页面
        // 若你想不管路由下面的 children 声明的个数都显示你的根路由
        // 你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由
        alwaysShow: false,  // (默认 false) 

        needInterception: true, // 控制过滤重复路由的，希望且应为true
        
        meta: {
            title: '会议统计', // 这个title是用来做路由匹配的，建议这里是什么配置页就写什么
            icon: 'meet-tj'
        },
        children: [
            {
                path: 'meetingTJ', // 那么二级路由就不用携带斜杠了 比如现在这个例子

                // 那么在配置页  做一个一级路由   /meetingTJ 
                name: 'meetingTJ',
                needInterception: true, // 控制过滤重复路由的，希望且应为true
                component: () => import('../views/list'),
                meta: {
                    title: '会议统计',
                    affix: false
                }
            },
        ]
    },

]
```


```js
第二种路由（有一个或者多个二级路由）
这种就是大家所熟悉的正常使用方式

export default [
    {
        path: '/meetingTJ',
        name: 'meetingTJ',
        component: () => import('@xjjbase/modules/xjjvuelayout/views/'),
        alwaysShow: true,
        needInterception: true,
        meta: {
            title: '会议统计',
            icon: 'meet-tj'
        },
        children: [
            {
                path: 'list',
                name: 'list',
                needInterception: true,
                component: () => import('../views/list'),
                meta: {
                    title: '会议列表',
                    affix: false
                }
            },
        ]
    },
]
```
```js

第三种路由（使用动态路由参数）
有些时候可能希望菜单页面是通过配置不同的参数，但是由同一个vue文件进行显示（代码复用） 参数值是确定的情况下，比如1， 2， 3等
export default [
    {
        path: '/meetScheme',
        name: 'meetScheme',
        component: () => import('@xjjbase/modules/xjjvuelayout/views/'),
        alwaysShow: true,
        needInterception: true,
        meta: {
            title: '会议方案',
        },
        children: [
            {
                path: 'notice/:type', 
                //  这里是动态路由的使用方式，
                //  /meetScheme/notice/1  这个时候会匹配到下面这个import('../views/list')组件， 正常进入页面
 
                //  那么在配置页面呢， 需要  notice/1  
                name: 'notice',
                needInterception: true,
                component: () => import('../views/list'),
                meta: {
                    title: '会议列表1',
                    affix: false
                }
            },
        ]
    },
]
```
```js

第四种路由（使用动态路由参数）
有些时候可能希望菜单页面是通过配置不同的参数，但是由同一个vue文件进行显示（如通过id控制的详情页面） 参数值是不确定的情况下，因为ID在配置页操作的时候你根本不确定
export default [
    {
        path: '/meetScheme',
        name: 'meetScheme',
        component: () => import('@xjjbase/modules/xjjvuelayout/views/'),
        alwaysShow: true,
        needInterception: true,
        meta: {
            title: '会议方案',
        },
        children: [
            {
                
                //  所以建议就不用正则约束了，简单传递动态参数已经能满足需求 
                path: 'notice/:id(\\d+)',  // 或者 notice/:id(\\d+)/:anotherId(\\d+)  或者 notice/:id/:anotherId

                // 那么在配置页面呢， 

                // 仔细看 这里如果写正则是需要自己转义的， 但是在配置页面就不用自己转义，直接写就可以

                // 这样写:  

                // notice/:id/:anotherId(\\d+) => notice/*/(\d+)

                // notice/:id(\\d+)/:anotherId(\\d+) => notice/(\d+)/(\d+)

                // notice/:id/:anotherId => notice/*/*

                // notice/:id => notice/*

                // 反正就是配置时把 :id 和 :anotherId干掉，因为我匹配不到，
                // 通过这样配置页可以将详情页进行复用, 就可以在页面里通过JavaScript做页面的详情跳转了
                // 如果你的详情页是通过弹窗的方式展示，那么第四种路由你就用不到了。
                name: 'notice',
                needInterception: true,
                component: () => import('../views/list'),
                meta: {
                    title: '会议列表1',
                    affix: false
                }
            },
        ]
    },
]
```
