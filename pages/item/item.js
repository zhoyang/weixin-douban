// pages/item/item.js
var app = app = getApp();
Page({
  data: {
    id:'',
    item:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that=this;
    wx.showLoading({ title: '拼命加载中...' });
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/subject/' + this.data.id, // 仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/xml' // 默认值
      },
      success(res) {
       
        that.setData({
          item:res.data
        })
        wx.hideLoading()
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})