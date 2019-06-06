<template>
<div class="pagination">
  <button @click="changeBtn">首页</button>
  <button @click="changeBtn">«</button>
  <button v-if="jduge" class="pagebtn">...</button>
  <button v-for="btn in pagebtns"
          @click="changeBtn(btn)"
  :class="[{currentPage:btn == currentPage},'pagebtn']">
    {{btn}}
  </button>
  <button @click="changeBtn">»</button>
</div>
</template>

<script>
  import $ from 'jquery'

    export default {
        name: "Pagination",
      data(){
          return {
            pagebtns:[1,2,3,4,5,'...'],
            currentPage:1,
            jduge:false,
            ispc:true,
          }
      },
      methods:{
        changeBtn(page){
          //点击上一页，下一页,首页
          if(typeof page != 'number'){
            switch(page.target.innerText){
              case '«':
                $('button.currentPage').prev().click();
                break;
              case '»':
                $('button.currentPage').next().click();
                break;
              case '首页':
              if(this.ispc){
                this.pagebtns = [1,2,3,4,5,'...'];
              }else{
                this.pagebtns = [1,2,3,'...'];
              }
                
                this.changeBtn(1);
                break;
              default:
                break;
            }
            return;
          }
          this.currentPage = page;
          if(page>this.pagebtns.length-2){
            this.jduge = true;
          }else{
            this.jduge = false;
          }
          if(page == this.pagebtns[this.pagebtns.length-2] ){
            this.pagebtns.shift();//移除第一个元素
            this.pagebtns.splice(this.pagebtns.length-1,0,this.pagebtns[this.pagebtns.length-2]+1);//添加最后一个
          }else if(page == this.pagebtns[0] && page !=1){
            //先在第一个位置加一个
            this.pagebtns.unshift(this.pagebtns[0]-1);
              //移除最后一个数字
            this.pagebtns.splice(this.pagebtns.length-1,1);
          }
          // debugger
          this.$emit('CurrentPage',this.currentPage);
        },
        getispcormobile:function(){
          var sUserAgent = navigator.userAgent.toLowerCase();
          var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
          var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
          var bIsMidp = sUserAgent.match(/midp/i) == "midp";
          var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
          var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
          var bIsAndroid = sUserAgent.match(/android/i) == "android";
          var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
          var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";

          if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
             this.ispc=false;
             this.pagebtns = [1,2,3,'...'];
          } else {
            this.ispc=true;
            this.pagebtns = [1,2,3,4,5,'...'];
          }
        }
        
      },
      beforeMount:function(){
        this.getispcormobile();
      }
    }

</script>

<style scoped>
  .pagination {
    margin-top: 5px;
    margin-bottom: 20px;
    background-color: white;
    padding: 6px 10px;
    border-radius: 5px;
  }

  button {
    background-color: #fff;
    border: 1px solid #ddd;
    color: #778087;
    border-radius: 3px;
    outline: none;
    height: 21px;
    cursor: pointer;
    padding: 0 2px;
    width: 40px;
    height: 25px;
    font-size: 12px;
  }

  .pagebtn {
    position: relative;
    bottom: 1px;
    width: 30px;
    margin: 0 1px;
  }

  .currentPage {
    /* color: white; */
    color: #80bd01;

  }

  @media (max-width: 502px){
    button {
    width: 30px;
    height: 25px;
    font-size: 10px;
  }
  }
  @media (max-width: 371px){
    button {
    width: 25px;
    height: 25px;
    font-size: 10px;
    margin: 2px;
  }
  }
</style>
