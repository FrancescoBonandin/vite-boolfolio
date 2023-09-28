import {createRouter,createWebHistory} from 'vue-router';

import Homepage from './pages/Homepage.vue';
import ProjectList from './pages/ProjectList.vue';

const router = createRouter({

    history:createWebHistory(),
    routes: [
        {
            path:'/',
            name: 'home',
            component: Homepage,
        },
        {
            path:'/show/:id',
            name:'project',
            component: ProjectList,
        },
    ]


})

export{router};