// pages/homepage/homepage.js

//var Api = require("../../utils/api.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden: false,
    xinwen_list: [{ id: "1", images: "/pages/image/cuSwiper1.png", title:'课程表', more:"查看完整课表"},
      { id: "2", images: "/pages/image/cuSwiper2.png", title: '论坛', more:"    进入论坛" },
      { id: "3", images: "/pages/image/cuSwiper3.png", title: '直播1', more: "    进入直播间" },
      { id: "4", images: "/pages/image/cuSwiper3.png", title: '直播2', more: "    进入直播间"  },
      { id: "5", images: "/pages/image/cuSwiper3.png", title: '直播3', more: "    进入直播间"  },
      ],
    

    indicatorDots: false,
    autoplay: false,
    interval: 2000,
    duration: 500,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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
     
    },



  onPostTap: function (event) {
    var postId = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: "test" + postId
    })
  },
  //回退
  navBack: function () {
  },

})



