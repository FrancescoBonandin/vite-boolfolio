import {createRouter,createWebHistory} from 'vue-router';

const router = createRouter({

    history:createWebHistory(),
    routes: [
        {
            path:'/',
            name: 'home',
            component: Homepage
        },
        {
            path:'/index',
            name:'projects',
            component: ProjectList
        },
    ]


})

export{router};