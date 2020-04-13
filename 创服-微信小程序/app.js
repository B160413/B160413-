//app.js
App({
  aData: {
    show: false
  },

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
    //自定义导航栏
    wx.getSystemInfo({
      success: res => {
        //导航高度
        this.globalData.navHeight = res.statusBarHeight + 46;
      }, fail(err) {
        console.log(err);
      }
    })
  },
  globalData: {
    userInfo: null,
    /*questions: [
    {
      question: "/pages/image/video.png",
      option:
      {
        "A": "/pages/image/video.png ",
        "B": "/pages/image/video.png ",
        "C": "/pages/image/video.png ",
        "D": "/pages/image/video.png "
      },
      true1: "A",
      number: "4"
    },
    {
      question: "/pages/image/video.png",
      option:
      {
        "A": "/pages/image/video.png ",
        "B": "/pages/image/video.png ",
        "C": "/pages/image/video.png ",
        "D": "/pages/image/video.png "
      },
        true1: "A",
        number: "4"
    },
      {
        question: "/pages/image/video.png",
        option:
        {
          "A": "/pages/image/video.png ",
          "B": "/pages/image/video.png ",
          "C": "/pages/image/video.png ",
          "D": "/pages/image/video.png "
        },
        true1: "B",
        number: "4"
      }
  ]*/
  //【作业】功能数据需求
    questions: [//作业题目数组
      {
        type: "单选题",
        score: "1",
        question: "请吃红小豆的主角是谁77777777777777777777777777777777777777777777777777777777777777？",
        option:
        {
          "A": "红小豆",
          "B": "李建勋",
          "C": "芦荟",
          "D": "枸杞"
        },
        true1: "A",
        number: "4",
        //result:"0"
      },
      {
        type: "单选题",
        score: "1",
        question: "知否知否应是绿肥红瘦的主角是谁？",
        option:
        {
          "A": "华兰",
          "B": "墨兰",
          "C": "如兰",
          "D": "明兰"
        },
        true1: "D",
        number: "4",
        result: "0"
      },
      {
        type: "单选题",
        score: "1",
        question: "爱做饭的芋头sama成功做出蛋包饭了么？",
        option:
        {
          "A": "做出了",
          "B": "没做出",
          "C": "没做出达到她的的标准的蛋包饭",
          "D": "MDZZ,我怎么知道芋头sama是谁"
        },
        true1: "C",
        number: "4", 
        result: "0"
      },
      {
        type: "单选题",
        score: "1",
        question: "1知否知否应是绿肥红瘦的主角是谁？",
        option:
        {
          "A": "华兰",
          "B": "墨兰",
          "C": "如兰",
          "D": "明兰"
        },
        true1: "D",
        number: "4",
        result: "0"
      },
      {
        type: "单选题",
        score: "1",
        question: "2知否知否应是绿肥红瘦的主角是谁？",
        option:
        {
          "A": "华兰",
          "B": "墨兰",
          "C": "如兰",
          "D": "明兰"
        },
        true1: "D",
        number: "4",
        result: "0"
      },
      {
        type: "单选题",
        score: "1",
        question: "3知否知否应是绿肥红瘦的主角是谁？",
        option:
        {
          "A": "华兰",
          "B": "墨兰",
          "C": "如兰",
          "D": "明兰"
        },
        true1: "D",
        number: "4",
        result: "0"
      },
      {
        type: "单选题",
        score: "1",
        question: "4知否知否应是绿肥红瘦的主角是谁？",
        option:
        {
          "A": "华兰",
          "B": "墨兰",
          "C": "如兰",
          "D": "明兰"
        },
        true1: "D",
        number: "4",
        result: "0"
      },
      {
        type: "单选题",
        score: "1",
        question: "5知否知否应是绿肥红瘦的主角是谁？",
        option:
        {
          "A": "华兰",
          "B": "墨兰",
          "C": "如兰",
          "D": "明兰"
        },
        true1: "D",
        number: "4",
        result: "0"
      },
      {
        type: "单选题",
        score: "1",
        question: "6知否知否应是绿肥红瘦的主角是谁？",
        option:
        {
          "A": "华兰",
          "B": "墨兰",
          "C": "如兰",
          "D": "明兰"
        },
        true1: "D",
        number: "4",
        result: "0"
      },
      {
        type: "单选题",
        score: "1",
        question: "7知否知否应是绿肥红瘦的主角是谁？",
        option:
        {
          "A": "华兰",
          "B": "墨兰",
          "C": "如兰",
          "D": "明兰"
        },
        true1: "D",
        number: "4",
        result: "0"
      },
    ]
  }
})