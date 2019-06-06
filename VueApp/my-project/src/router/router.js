
import Vue from 'vue'
import Router from 'vue-router'
import Particulars from '../components/Particulars'
import Postlist from '../components/Postlist'
import UserInfo from '../components/UserInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name:'root',
      path:'/',
      components:{
        main:Postlist
      }
    },
    {
      name:'post_content',
      path:'/topic/:id&author=:loginname',
      components:{
        main:Particulars,
      }
    },
    {
      name:'userinfo',
      path:'/user/:loginname',
      components:{
        main:UserInfo,
      }
    }
 
  ]
})

