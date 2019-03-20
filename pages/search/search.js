const app = getApp();
Page({
  data: {
    msg: "this is search",
    userInfo:{},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  call:function(){
    wx.makePhoneCall({
      phoneNumber: '15035468458' // 仅为示例，并非真实的电话号码
    })
  },
  scanCode:function(){
    wx.scanCode({
      success(res) {
        console.log(res)
      }
    })
  },
  getSystemInfo:function(){
    wx.getSystemInfo({
      success:function(res){
        console.log(res.brand)  
        console.log(res.model)  
        console.log(res.pixelRatio)  
        console.log(res.screenWidth)  
        console.log(res.screenHeight)  
        console.log(res.windowWidth)  
        console.log(res.windowHeight)  
        console.log(res.statusBarHeight)  
        console.log(res.language)  
        console.log(res.version)  
        console.log(res.system)  
        console.log(res.platform)  
        console.log(res.fontSizeSetting)  
        console.log(res.SDKVersion)  
        console.log(res.benchmarkLevel)  
      }
    })
  },
  onGotUserInfo(e) {
   const that=this;
   that.setData({
     userInfo: e.detail.userInfo
   })
    console.log(that.data.userInfo)
    console.log(e.detail.rawData)
  },
  search:function(){
    wx:wx.request({
      url: 'https://douban.uieee.com/v2/movie/search',
      data: '{q:阿丽塔}}',
      header: {
        'content-type': 'application/xml' // 默认值
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log(res)
      },
    })
  }
})