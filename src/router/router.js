import Main from '@/views/Main.vue';

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login - 登录'
    },
    component: resolve => { require(['@/views/login.vue'], resolve); }
};
export const page404 = {
    path: '/*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在'
    },
    component: resolve => { require(['@/views/error-page/404.vue'], resolve); }
};

export const page403 = {
    path: '/403',
    meta: {
        title: '403-权限不足'
    },
    name: 'error-403',
    component: resolve => { require(['@//views/error-page/403.vue'], resolve); }
};

export const page500 = {
    path: '/500',
    meta: {
        title: '500-服务端错误'
    },
    name: 'error-500',
    component: resolve => { require(['@/views/error-page/500.vue'], resolve); }
};

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',   
    component: Main,
    children: [
        { path: 'home', title: { i18n: 'home' }, name: 'home_index', component: resolve => { require(['@/views/home/home.vue'], resolve); } },
        { path: '/maccms/admin/add', title: { i18n: 'add' }, name: 'add_index', component: resolve => { require(['@/views/maccms/admin/add.vue'], resolve); } },
        { path: '/maccms/admin/cloud', title: { i18n: 'cloud' }, name: 'cloud_index', component: resolve => { require(['@/views/maccms/admin/cloud.vue'], resolve); } },

    ]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
    {
        path: '/maccms',
        icon: 'ios-folder',
        name: 'maccms',
        title: '苹果插件',
        component: Main,
        children: [
            {
                path: 'explain',
                icon: 'ios-paper-outline',
                name: 'explain',
                title: '采集说明',
                component: resolve => { require(['@/views/maccms/explain/explain.vue'], resolve); }
            },
            {
                path: 'admin',
                icon: 'ios-paper-outline',
                name: 'admin',
                title: '管理采集',
                component: resolve => { require(['@/views/maccms/admin/admin.vue'], resolve); }
            },
            {
                path: 'page1',
                icon: 'ios-paper-outline',
                name: 'page1',
                title: 'Page1',
                component: resolve => { require(['@/views/maccms/page1/page1.vue'], resolve); }
            },
            {
                path: 'page2',
                icon: 'ios-list-outline',
                name: 'page2',
                title: 'Page2',
                component: resolve => { require(['@/views/maccms/page2/page2.vue'], resolve); }
            },
            {
                path: 'page3',
                icon: 'ios-list-outline',
                name: 'page3',
                title: 'Page3',
                component: resolve => { require(['@/views/maccms/page2/page2.vue'], resolve); }
            }
        ]
    }

];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    loginRouter,
    otherRouter,
    ...appRouter,
    page500,
    page403,
    page404
];
