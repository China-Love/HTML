<template>
    <div >
        <div class="userinfo">
          <userinfo></userinfo>
        </div>
        <div class="content">
            <div class="panel">
                <div class="topic_header">  
            
            <span class="title"> <span class="type" :class="[{put_good:(requestdata.good  == true),put_top:(requestdata.top  == true),
            'topiclist-tab':(requestdata.good  != true && requestdata.top  != true)}]">{{requestdata|tabFormatter}}</span>{{requestdata.title}}</span>
            <ul>
                <li>· 发布于 {{requestdata.create_at|formatDate}}</li>
                <li>· 作者 {{requestdata.author.loginname}}</li>
                <li>· {{requestdata.visit_count}} 次浏览</li>
                <li>· 来自 {{requestdata|tabFormatter}}</li>
            </ul>
            </div>
             <div class="inner topic" >
                 <div class="topic_content" v-html="requestdata.content"></div>
             </div>
         </div>
        <div class="reply">
             <div class="replay-header" v-show="(requestdata.replies.length>0)">
                 {{requestdata.replies.length}} 回复
             </div>
             <div class="replay-content" v-for="(item,index) in requestdata.replies">
                <router-link :to="{name:'userinfo',params:{loginname:item.author.loginname}}"><img :src="item.author.avatar_url" alt=""></router-link>
                 <span class="replay-name">{{item.author.loginname}}</span>
                 <span class="replay-time">{{index+1}}楼{{item.create_at|formatDate}}</span>
                 <div class="topic_content" v-html="item.content"></div>
                 
             </div>
        </div>
         </div>
      
    </div>  
</template>

<script>

import userinfo from './UserInfo'
export default {
     data:function(){
         return {
             requestdata:{},
         }
     },
     methods:{
         getParticularsdata:function(){
             var self = this;
             console.log(`http://mock.hunger-valley.com/cnode/api/v1/topic/${this.$route.params.id}`)
             this.$http.get(`http://mock.hunger-valley.com/cnode/api/v1/topic/${this.$route.params.id}`)
             .then(function(res){
                 
                console.log(res.data.data);
                self.requestdata=res.data.data;
             })
             .catch(function(err){
                console.log(err);
             })
         }
     },
     beforeMount:function(){
         this.getParticularsdata();
     },
     components:{
         userinfo,
     },
     watch:{
          '$route'(to,from){
            this.getParticularsdata()
          }
      }
}
</script>

<style scoped>

@import '../assets/markdown.css';
.content{
    width: 57%
}
.userinfo{
    float: right;
    width: 40%;
   
}
.reply>.replay-header{
     width: 100%;
     margin-left: -10px;
}
.panel,.reply{
    background-color: white;
    padding: 0 10px;
}
.reply {
    margin-top: 20px;
}
.put_good, .put_top {
    background: #80bd01;
    padding: 2px 4px;
    border-radius: 3px;
    color: #fff;
    font-size: 12px;
  
    height: 30px;
    vertical-align: middle;
    margin-right: 5px;
}

.topiclist-tab {
    background-color: #e5e5e5;
    color: #999;
    padding: 2px 4px;
    border-radius: 3px;
    font-size: 12px;
  
    height: 30px;
   vertical-align: middle;
    margin-right: 5px;
    
}
.title{
    font-size: 22px;
    font-weight: 700;
    margin: 8px 10px;
    display: inline-block;
    vertical-align: bottom;
    width: 75%;
    line-height: 30px;
    vertical-align: middle;
}
ul{
    list-style: none;
    border-bottom: 1px  #f0f0f0 solid;
}
ul>li{
    display: inline-block;
    font-size: 12px;
    color: #838383;
    margin-bottom: 10px;
    margin-left: 10px;
}

.replay-header{
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
    color: #444;
    font-size: 14px;
}
.replay-content{
    padding: 10px;
    border-bottom: 1px #f0f0f0 solid;
}
.replay-content  img{

    height: 30px;
    width: 30px;
    display:inline-block;
    vertical-align: middle;
   
}
.replay-content>.topic_content{
  margin: 10px 0;
}
.topic>.topic_content{
  padding: 10px ;
}

.replay-name{
        color: #666;
        font-size: 12px;
    font-weight: 700;
}
.replay-time{
    color: #08c;
    text-decoration: none;
     font-size: 11px;
}

@media (max-width: 999px){
    .userinfo{
      display: none;
    }
    .content{
    width: 100%
    }
}

</style>

