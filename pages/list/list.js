// pages/list/list.js
var start=0;
Page({
  /**
   * 页面的初始数据
   */

  data: {
    isShow:false,
    key:'',
    list: [],
    title:'',
    scrollTop: 0,
    scrollHeight: 0,
    count:18,
    num:0
  },

  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    that.setData({
      key: options.key,
    })
    var that = this;
     wx.getSystemInfo({
      success: function(res) {
        that.setData({  
          scrollHeight: res.windowHeight
        });
      }
    });
    wx.showLoading({
      title: '玩命加载中',
    });
    wx.request({
      url: "https://douban.uieee.com/v2/movie/" + that.data.key,
      data: {
        count: that.data.count,
        start: that.data.num
      },
      header: {
        'content-type': 'application/xml' // 默认值
      },
      success: function (res) {
        if (res.data.subjects.length < 18 ){
          that.setData({
            isShow: true
          })
          wx.stopPullDownRefresh();  
        }
        var list=that.data.list;
        for(var i=0;i<res.data.subjects.length;i++){
          list.push(res.data.subjects[i])
        }
        that.setData({
          list: that.data.list,
          title: res.data.title
        })  
        wx.hideLoading();
      }
    });

  },
  onReachBottom: function () {
    var that=this;
    wx.showLoading({
      title: '玩命加载中',
    });
    start = (++that.data.num)*18
    wx.request({
      url: "https://douban.uieee.com/v2/movie/" + that.data.key,
      data: {
        count: that.data.count,
        start: start
      },
      header: {
        'content-type': 'application/xml' // 默认值
      },
      success: function (res) {
        if (res.data.subjects.length == 0 || res.data.subjects.length < 18){
          that.setData({
            isShow: true
          })
          wx.stopPullDownRefresh();  
        }
        var list = that.data.list;
        for (var i = 0; i < res.data.subjects.length; i++) {
          list.push(res.data.subjects[i])
        }
        that.setData({
          list: that.data.list
        })
        wx.hideLoading();
      }
    });
  }
})