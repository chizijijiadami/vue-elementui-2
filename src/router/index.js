import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const _import = file => () => import('@/pages/' + file + '.vue')

export default new Router({
    scrollBehavior() {
        return { x: 0, y: 0 }
    },
    routes: [
        {
            path: '',
            redirect: '/index/index'
        },
        {
            path: '/index',
            component: _import('Layout/index'),
            redirect: '/index/index',
            children:[
                {
                    path: 'index',
                    component: _import('Index/index'), 
                }
            ]
        },
        {
            path: '/list',
            component: _import('Layout/index'),
            children:[
                {
                    path: 'detail',
                    component: _import('List/Detail/index'), 
                },
                {
                    path: 'feature',
                    component: _import('List/Feature/index'), 
                }
            ]
        },
        {
            path: '/404',
            component: _import('ErrorPages/404')
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})