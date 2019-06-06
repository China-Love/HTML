// pages/menu/menu.js

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: app.globalData.list
,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onShow: function () {
    console.log(wx.getStorageSync('tapindex') || app.globalData.lastindex);
    this.setData({
      tapindex: wx.getStorageSync('tapindex') || app.globalData.lastindex,
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },
  clicklanglist:function(e){
    console.log(e);
    console.log(e.currentTarget.dataset.index);
    app.globalData.lastindex = e.currentTarget.dataset.index;
    var pages = getCurrentPages();
    var Page = pages[pages.length - 1];//当前页
    var prevPage = pages[pages.length - 2];  //上一个页面
    var info = prevPage.data //取上页data里的数据也可以修改
    prevPage.setData({ 'language': app.globalData.list            
    [app.globalData.lastindex].chs })//设置数据
    wx.navigateBack({
      delta: 2
    })
    wx.setStorage({
      key: "tapindex",
      data: e.currentTarget.dataset.index
    })


    
  }

  


})