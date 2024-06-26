import {createRouter ,createWebHashHistory} from 'vue-router'


import indexVue from 'page/index.vue'
import photographVue from 'page/photograph.vue'

const routes = [
    { path : '/',component : indexVue },
    { path : '/photographVue',component : photographVue }
]

const router= createRouter({
    history : createWebHashHistory(),
    routes : routes
})

export default router