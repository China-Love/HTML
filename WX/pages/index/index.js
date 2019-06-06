//index.js
//获取应用实例
var MD5 = require('./md5.js')
const app = getApp()  //获取app.js 数据


Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    language: app.globalData.list[wx.getStorageSync('tapindex')|| app.globalData.lastindex].chs,
    "textareavalue":'',
    "auto-height":true,
    deletedisplay: "none",
  },
  onShow:function(){
    this.HTTP();
    wx.getStorage({
      key: 'history',
      success(res) {
        console.log("lalalalal",res.data)
      }
    })
    // wx.removeStorage({
    //   key: 'history',
    //   success(res) {
    //     console.log(res.data)
    //   }
    // })
  },
  selectlanguage:function(){
    wx.navigateTo({
      url: "/pages/menu/menu",
    })  
  },
  deletevoid:function(){
    this.setData({
      textareavalue:'',
    })
    console.log('111111111')
  },
  textareabindblur:function(e){
    console.log(e);
    if (e.detail.value =="") {
      this.setData({
        deletedisplay: "none",
        textareavalue: e.detail.value,
      })
    }else{
      this.setData({
        deletedisplay: "inline-block",
        textareavalue: e.detail.value,
      })
    }
    
    this.HTTP();
   
  },
  HTTP:function(){
    var q = this.data.textareavalue;
    var fromstr = "auto";
    var to = app.globalData.list[wx.getStorageSync('tapindex') || app.globalData.lastindex].lang;
    var appid = '20181108000231755';
    var salt = new Date().getTime();
    var pas = 'uNZS1EOvRiALHWAIofc4';
    var sign = MD5.md5(appid + q + salt + pas);


    if (! /^$/.test(q)) {
      this.ajax(q, fromstr, to, appid, salt, sign);
    }
  },
  ajax : function (q, fromstr, to, appid, salt, sign) {
    var THIS =this;
    wx.request({
      url: 'https://fanyi-api.baidu.com/api/trans/vip/translate', //仅为示例，并非真实的接口地址
      data: {
        "q": q,
        "from": fromstr,
        "to": to,
        "appid": appid,
        "salt": salt,
        "sign": sign
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(httpres) {
        var data = {
          "from": httpres.data.trans_result[0].src,
          "to": httpres.data.trans_result[0].dst
        }
        console.log(httpres.data)
        if (!httpres.data.error_msg){
          THIS.setData({
            translation: httpres.data.trans_result[0].dst,
          })
          wx.getStorage({
            key: 'history',
            success(res) {
            
              if (res.data.length===5){
                res.data=res.data.splice(1, 4);
                console.log("10个");
              }
              if (res.data[res.data.length - 1].to != data.to) {
                wx.setStorage({
                  key: "history",
                  data: res.data.concat(data)
                })
              }
              
            },
            fail(res){
              console.log("hehehehe2", res.data)
               wx.setStorage({
                key: "history",
                data: [data]
              })
            }
          })

          
        }else{
          THIS.setData({
            translation: res.data.error_msg,
          })
        }
        
      }
    })
  },
  copyText: function (e) {
    　　　　　　　　　　　
    wx.setClipboardData({
      data: this.data.translation,
      success(res) {
        wx.getClipboardData({
          success(res) {
            wx.showToast({
              title: '复制成功'
            })
          }
        })
      }
    })
  },

})


