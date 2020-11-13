<template>
    <div id='postlist'>
            <ul>
                <li>
                    <div class="topbar">
                        <span v-for="(item,index) in topbararr" @click='clicktopbar(index)' :class="{current:clickindex==index}">{{item}}</span>
                    </div>
                </li>
                <li v-for="item in posts">
                    <router-link :to="{name:'userinfo',params:{loginname:item.author.loginname}}"><img :src="item.author.avatar_url" alt=""></router-link>
                    <span class="reply_count">{{item.reply_count}}/<span class="visit_count">{{item.visit_count}}</span></span>
                    <span :class="[{put_good:(item.good  == true),put_top:(item.top  == true),
        'topiclist-tab':(item.good  != true && item.top  != true)}]">{{item|tabFormatter}}</span>
                    <router-link :to="{name:'post_content',params:{id:item.id,loginname:item.author.loginname}}"><span class="title">{{item.title}}</span></router-link> 
                    <span class="time">{{item.create_at|formatDate}}</span>
                </li>
            </ul>
            <Pagination  @CurrentPage="currentPage"></Pagination>
    </div>
</template>

<script>

import Pagination from './Pagination'

export default {
    name:'Postlist',
    data:function(){
        return {
            posts:[],
            clickindex:0,
            pageindex:1,
            toptab:'',
            topbararr:['全部','精华','分享','问答','招聘'],
            toptabarr:["all","good","share", "ask", "job"],
        }
    },
    methods:{
    getlistdata:function(){
          var self = this;
          this.$http.get('http://mock.hunger-valley.com/cnode/api/v1/topics',{params:{
                page:this.pageindex,
                tab:this.toptab,
          }})
          .then(function(res){
              console.log(res);
              self.posts=res.data.data;
          })
          .catch(function(err){
              console.log(err);
          })
    },
    clicktopbar:function(index){
        this.clickindex=index;
        this.toptab=this.toptabarr[index];
        console.log('vvvvvvvvvvvvv',index, this.toptab);
        this.getlistdata();

    },
    currentPage:function(value){
       
        this.pageindex=value;
    
        this.getlistdata();
    }
  },
  beforeMount:function(){
      this.getlistdata();
  },
  components:{
      Pagination,
  }
}
</script>


<style scoped>

#postlist{
    background-color: white;
}
li{
    height: 30px;
    width: calc(100% - 20px);
    padding: 10px;
    border-bottom: 1px  #f0f0f0 solid;
    /* border: 1px red solid; */
   
}
img{
    
    height: 30px;
    width: 30px;
    display:inline-block;
    vertical-align: middle;
   
}
.reply_count{
 
    margin-left: 10px;
    line-height: 30px;
    font-size: 12px;
    color: #9e78c0;

}
.visit_count{
    color: #b4b4b4;
    font-size: 10px;
}
.title{
    
    margin-left: 10px;
    font-size: 14px;
    line-height: 30px;
    color: #333;
    
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    vertical-align: middle;
    display: inline-block;
    max-width: 80%;
 
}
.time{
   color:#778087;
   font-size: 10px;
   float: right;
   line-height: 30px;
}

ul{
    list-style: none;
     background-color: white;
}
.topbar>.current{
    background-color: #80bd01;
    color: #fff;
    padding: 3px 4px;
    border-radius: 3px;
}
.topbar>span{
    font-size: 14px;
    display: inline-block;
    padding: 6px 10px;
    color: #80bd01;
    cursor: pointer;
}
.topbar>span:hover{
    color: #08c;
}
.topbar>.current:hover{
     color: #fff;
}

.put_good, .put_top {
    background: #80bd01;
    padding: 2px 4px;
    border-radius: 3px;
    color: #fff;
    font-size: 12px;
    margin-left: 10px;
}

.topiclist-tab {
    background-color: #e5e5e5;
    color: #999;
    padding: 2px 4px;
    border-radius: 3px;
    font-size: 12px;
    margin-left: 10px;
}
a{
    text-decoration: none;
}

@media (min-width: 1000px) and (max-width: 1400px){
    .title{
     max-width: 75%;
    }
}

@media (max-width: 1000px){
    .title{
     max-width: 70%;
    }
}
@media (max-width: 810px){
    .title{
     max-width: 65%;
    }
}
@media (max-width: 700px){
    .title{
     max-width: 60%;
    }
}
@media (min-width: 600px) and (max-width: 650px){
    .title{
     max-width: 55%;
    }
}
@media (max-width: 600px){
    .title{
     max-width: 53%;
    }
}
@media (max-width: 560px){
    .title{
     max-width: 48%;
    }
}
@media (max-width: 510px){
    .title{
     max-width: 50%;
     margin-left: 1px;
     font-size: 12px;
    }
    .reply_count{
        margin-left: 1px;
        line-height: 30px;
        font-size: 10px;
    }
    .visit_count{
        font-size: 8px;
    }
    .put_good, .put_top {
        font-size: 10px;
        margin-left: 1px;
    }
    .topiclist-tab {
    font-size: 10px;
    margin-left: 1px;
    }
}
@media (min-width: 450px) and (max-width: 470px){
    .title{
     max-width: 48%;
    }
}
@media (max-width: 450px){
    .title{
     max-width: 45%;
    }
}
@media (max-width: 420px){
    .title{
     max-width: 42%;
    }
}
@media (max-width: 414px){
    .title{
     max-width: 52%;
    }
}
@media (max-width: 384px){
    .title{
     max-width: 50%;
    }
}
@media (max-width: 370px){
    .title{
     max-width: 48%;
    }
}
@media (max-width: 355px){
    .title{
     max-width: 45%;
    }
}
@media (max-width: 336px){
    .title{
     max-width: 42%;
    }
}

</style>


