//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list: [],
  },
  onShow:function(){
    var that = this;
    wx.getStorage({
      key: 'history',
      success(res) {
        console.log(res.data)
        that.setData({
          list: res.data.reverse(),
        })
        
      }
    })
  },
  copyfromtext:function(e){
    var index = e.currentTarget.dataset.index;
    console.log(e.currentTarget.dataset.index);
        wx.setClipboardData({
          data: this.data.list[index].from,
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
  copytotext: function (e) {
    var index = e.currentTarget.dataset.index;
    console.log(e.currentTarget.dataset.index);

        wx.setClipboardData({
          data: this.data.list[index].to,
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
  }
})
