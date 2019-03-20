
var app = app = getApp();

Page({
  data: {
    msg: "this is image",
    in_theaters:[],
    coming_soon:[],
    new_movies:[],
    top250:[],
    indicatorDots: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    circular: true,
    indicatorDots: true,
  },
  onLoad:function(){
    var that=this;
    wx.showLoading({ title: '拼命加载中...' });
      wx.request({
        url: 'https://douban.uieee.com/v2/movie/in_theaters?count=8', // 仅为示例，并非真实的接口地址
        header: {
          'content-type': 'application/xml' // 默认值
        },
        success(res) {
          that.setData({
            in_theaters: res.data.subjects
          })
          wx.hideLoading()
        }
      })
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/coming_soon?count=8', // 仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/xml' // 默认值
      },
      success(res) {
        that.setData({
          coming_soon: res.data.subjects
        })
        wx.hideLoading()
      }
    })
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/new_movies?count=8', // 仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/xml' // 默认值
      },
      success(res) {
        that.setData({
          new_movies: res.data.subjects
        })
        wx.hideLoading()
      }
    })
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/top250?count=8', // 仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/xml' // 默认值
      },
      success(res) {
        that.setData({
          top250: res.data.subjects
        })
        wx.hideLoading()
      }
    })
  }
})