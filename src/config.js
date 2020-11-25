export default {
    asideMenu: [
        {
            name: '用户管理',
            id: '1',
            icon: 'el-icon-user-solid',
            path: '',
            child: [
                {
                    name: '用户列表',
                    id: '1-1',
                    path: '',
                    parentId: '1',
                    child: [] 
                },
                {
                    name: 'VIP',
                    id: '1-2',
                    path: '',
                    parentId: '1',
                    child: [] 
                },
            ]
        },
        {
            name: '资源管理',
            id: '2',
            icon: 'el-icon-s-grid',
            path: '',
            child: [
                {
                    name: '所有资源',
                    id: '2-1',
                    path: '',
                    parentId: '2',
                    child: [] 
                },
                {
                    name: '资源拉取',
                    id: '2-2',
                    path: '',
                    parentId: '2',
                    child: [] 
                },
            ]
        },
    ],
    // rightMenu: [
    //     {
    //         name: '个人信息',
    //         id: '1',
    //         icon: '',
    //         path: '/user/userinfo',
    //         auth: {}
    //     },
    //     {
    //         name: '退出登录',
    //         id: '2',
    //         icon: '',
    //         path: '/auth/logout',
    //         auth: {}
    //     },
    // ]
}