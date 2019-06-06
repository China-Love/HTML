//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    lastindex:0,
    list:[{
      "index": 0,
      "chs": "英文",
      "lang": "en"
    },
    {
      "index": 1,
      "chs": "中文",
      "lang": "zh"
    },
    {
      "index": 2,
      "chs": "日语",
      "lang": "jp"
    },
    {
      "index": 3,
      "chs": "韩语",
      "lang": "kor"
    },
    {
      "index": 4,
      "chs": "法语",
      "lang": "fra"
    },
    {
      "index": 5,
      "chs": "文言文",
      "lang": "wyw"
    },
    {
      "index": 6,
      "chs": "俄语",
      "lang": "ru"
    },
    {
      "index": 7,
      "chs": "泰语",
      "lang": "th"
    },
    {
      "index": 8,
      "chs": "西班牙",
      "lang": "spa"
    },
    {
      "index": 9,
      "chs": "粤语",
      "lang": "yue"
    },
    ]
  } 

})


