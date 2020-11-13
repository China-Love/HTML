<template>
    <div>
          <div class="page">
               <div class="page-header">
                 主页 /
               </div>
               <div class="page-content">
                    <router-link :to="{name:'userinfo',params:{loginname:requestdata.loginname}}"><img :src="requestdata.avatar_url" alt=""></router-link>
                    <span class="page-name">{{requestdata.loginname}}</span>
                    <p class="score">{{requestdata.score}} 积分</p>
                    <p class="time">注册时间 {{requestdata.create_at|formatDate}}</p>
               </div>
               
          </div> 
          <div class="creat-topic">
               <div class="creat-topic-header" v-show="(creatlisttopdata.length>0)">
                            最近创建的话题
               </div>
               <div class="creat-topic-content" v-for="(item,index) in creatlisttopdata">
                    <!-- <router-link :to="{name:'userinfo',params:{loginname:item.author.loginname}}"><img :src="item.author.avatar_url" alt=""></router-link> -->
                    <router-link :to="{name:'post_content',params:{id:item.id,loginname:item.author.loginname}}"><span class="title">{{item.title}}</span></router-link> 
                    <span class="time">{{item.last_reply_at|formatDate}}</span>
               </div>
               <div class="creat-topic-more"  v-show="creatlistShow"><span @click="moreclick('creat')">{{creatshowhidenmsg}}</span></div>
          </div>
          <div class="join-creat">
               <div class="join-topic-header" v-show="(joinlisttopdata.length>0)">
                     最近参与的话题
               </div>
               <div class="join-topic-content" v-for="(item,index) in joinlisttopdata">
                    <router-link :to="{name:'userinfo',params:{loginname:item.author.loginname}}"><img :src="item.author.avatar_url" alt=""></router-link>
                    <router-link :to="{name:'post_content',params:{id:item.id,loginname:item.author.loginname}}"><span class="title">{{item.title}}</span></router-link> 
                    <span class="time">{{item.last_reply_at|formatDate}}</span>
               </div>
                <div class="join-topic-more"  v-show="joinlistShow"><span @click="moreclick('join')">{{joinshowhidenmsg}}</span></div>
          </div>
    </div>
</template>


<script>
export default {
    data:function(){
        return {
            requestdata:{},
            creatlistShow:false,
            joinlistShow:false,
            creatlisttopdata:{},
            creatshowhidenmsg:'查看更多»',
            joinlisttopdata:{},
            joinshowhidenmsg:'查看更多»',
            
        }
    },
    methods:{
       
        getuserinfodata:function(){
            var self = this;
            console.log(`http://mock.hunger-valley.com/cnode/api/v1/user/${this.$route.params.loginname}`)
            this.$http.get(`http://mock.hunger-valley.com/cnode/api/v1/user/${this.$route.params.loginname}`)
            .then(function(res){
              console.log(res);
              self.requestdata=res.data.data;

              if(self.requestdata.recent_topics.length>5){
                self.creatlisttopdata=res.data.data.recent_topics.slice(0,5);
                self.creatlistShow=true;
                
              }else{
                self.creatlisttopdata=res.data.data.recent_topics;
              }

              if(self.requestdata.recent_replies.length>5){
                self.joinlisttopdata=res.data.data.recent_replies.slice(0,5);
                self.joinlistShow=true;
              }else{
                self.joinlisttopdata=res.data.data.recent_replies;
                console.log('00000000000',self.joinlisttopdata);
              }
              
            })
            .catch(function(err){

            })
        },
        moreclick:function(type){
          if(type==='creat'){

            if(this.creatshowhidenmsg==='查看更多»'){
                    this.creatlisttopdata=this.requestdata.recent_topics;
                    this.creatshowhidenmsg='收起^'
            }else{
                    this.creatlisttopdata=this.requestdata.recent_topics.slice(0,5);
                    this.creatshowhidenmsg='查看更多»'
            }

           }
           else{
            if(this.joinshowhidenmsg==='查看更多»'){
                this.creatlisttopdata=this.requestdata.recent_replies;
                this.creatshowhidenmsg='收起^'
            }else{
                    this.joinlisttopdata=this.requestdata.recent_replies.slice(0,5);
                    this.creatshowhidenmsg='查看更多»'
            }
           }

           
        }
       
    },
    beforeMount:function(){
        console.log('出现了*********************')
        this.getuserinfodata();
    },
    watch:{
          '$route'(to,from){
            this.getuserinfodata()
          }
    }

}
</script>


<style scoped>

.page-content{
    background: white;
    padding: 10px;
}
.page  img{
    height: 30px;
    width: 30px;
    display:inline-block;
    vertical-align: middle;
   
}
.page-name{
    color: #666;
    font-size: 12px;
    font-weight: 700;
}
.page-header{
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
    color: #80bd01;
    font-size: 14px;
}
.creat-topic-header,.join-topic-header{
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
    color: #444;
    font-size: 14px;
}
.score{
  font-size: 14px;
  margin-top: 10px;
}
.time{
    color: #ababab;
    font-size: 14px;
    margin-top: 10px;
}


.creat-topic-content img,.join-topic-content img{
    
    height: 30px;
    width: 30px;
    display:inline-block;
    vertical-align: middle;
   
}

.creat-topic-content .title,.join-topic-content .title{
    margin-left: 10px;
    font-size: 14px;
    line-height: 30px;
    color: #333;
    
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    vertical-align: middle;
    display: inline-block;
    max-width: 72%;
}
.creat-topic-content .time,.join-topic-content .time{
   color:#778087;
   font-size: 10px;
   float: right;
   line-height: 30px;
}
.creat-topic-content,.join-topic-content{
    background: white;
    height: 30px;
    width: calc(100% - 20px);
    padding: 10px;
    border-bottom: 1px  #f0f0f0 solid;
}
.creat-topic-more>span{
    cursor: pointer;
}
.creat-topic-more{
    background: white;
    padding: 10px;
    color: #666;
    font-size: 14px;
}

.creat-topic,.join-creat{
    margin-top: 20px;
}

a{
    text-decoration: none;
}

@media (max-width: 319px){
    .creat-topic-content .title,.join-topic-content .title{
    max-width: 60%;
    }
}
</style>


