import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store=new Vuex.Store({
    state: { 
        menu: {
            isCollapse: false,
            location:"V"   //V、VH、H三个值，V表示在左侧，VH表示横跨头部，H表示在头部
        },
        tabs:{
            isShow:false
        },
        crumbs:{
            isShow:false
        },
        footer:{
            isShow:false
        }
    },
    mutations: {
        SET_MENU_ISCOLLAPSE: state => {
            state.menu.isCollapse = !state.menu.isCollapse
        }
    },
    actions: {
        setMenuIsCollapse({ commit }) {
            commit('SET_MENU_ISCOLLAPSE')
        }
    }
  })

export default store