// pages/course/webcourse.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    word_list: [
      [
        { name: "第一章，我还是不知道说啥，我依然是凑字数", id: "0" },
        { name: "第二章", id: "1" },
        { name: "第三章", id: "2" }
      ],
      [

        { name: "函数的极限", id: "3" },
        { name: "区间的定义", id: "4" },
        { name: "导数", id: "5" }
      ]
    ],
    timelist: [
      { timeinfo: "2019-01-01" },
      { timeinfo: "2019-01-25" },
    ],
    ppt_list0: [
      { name: "第一章，我不知道说啥，我就是凑字数", id: "0" },
      { name: "第二章", id: "1" },
      { name: "第三章", id: "2" }
    ],
    ppt_list1: [
      { name: "函数的极限", id: "3" },
      { name: "区间的定义", id: "4" },
      { name: "导数", id: "5" }
    ],
    /*word_list: [
      { name: "第一章", id: "0" },
      { name: "第二章", id: "1" },
      { name: "第三章", id: "2" }
    ],*/
    video_list: [
      { name: "第一章", id: "0" },
      { name: "第二章", id: "1" },
      { name: "第三章", id: "2" }
    ],
    ppt_list_num: [
      { id: "0", timeinfo: "2019-01-01" },
      { id: "1", timeinfo: "2019-01-01" },
      { id: "2", timeinfo: "2019-01-01" }
    ],
    WORDcollection: [false, false, false, false, false, false, false, false, false, false, false, false],
    WORDdownload: [false, false, false, false, false, false, false, false, false, false, false, false]
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (opt) {

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


  /*原用于swiper-item,现已不使用
  swiperTab: function (e) {
    var that = this;
    that.setData({
      //setData 函数用于将数据从逻辑层发送到视图层（异步),同时改变对应的 this.data 的值（同步）
      currentTab: e.detail.current
    });
  },
  //点击切换
  clickTab: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current)//点击当前已选中栏
    {
      return false;
    } else //点击其他栏
    {
      that.setData({
        currentTab: e.target.dataset.current//栏切换
      })
    }
  },*/
  WORDcollection: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  WORDdownload: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  
  // 展开折叠选择WORD  
  WORDchangeToggleCol: function (e) {
    var index = e.currentTarget.dataset.index;
    if (this.data.WORDcollection[index]) {
      this.data.WORDcollection[index] = false;
    } else {
      this.data.WORDcollection[index] = true;
    }
    this.setData({
      WORDcollection: this.data.WORDcollection
    })
  },

  WORDchangeToggleDl: function (e) {
    var index = e.currentTarget.dataset.index;
    if (this.data.WORDdownload[index]) {
      this.data.WORDdownload[index] = false;
    } else {
      this.data.WORDdownload[index] = true;
    }
    this.setData({
      WORDdownload: this.data.WORDdownload
    })
  },
  //下载函数
  download: function (event) {
    var fileindex = event.currentTarget.dataset.index;
    var url = "http://d.lanrentuku.com/down/tupian/1706/292208075_lanrentuku.com.zip";
    /*url += fileindex;*/
    wx.downloadFile({
      url: url,
      success: function (res) {
        var filePath = res.tempFilePath;
        console.log(filePath);
        wx.openDocument({
          filePath: filePath,
          success: function (res) {
            console.log("打开文档成功")
          },
          fail: function (res) {
            console.log(res);
          },
          complete: function (res) {
            console.log(res);
          }
        })
      },
      fail: function () {
        console.log("下载失败");
      }
    })
  },
  navBack: function () {
    wx.navigateBack({
      delta: 1
    })
  }
  
})