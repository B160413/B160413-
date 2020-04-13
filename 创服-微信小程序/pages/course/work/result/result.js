// pages/result/result.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indexs: 0,
    myoption: ["A", "B", "C", "D", "E", "F"],
    trueoption: [],
    type: "单选题",
    length: 0,
    questionCount: 0,
    realIndex: 0,
    wrong: 0,
    right: 0,
    wrongList: [],
    wrongLists: [],
    accuracy:0,
    grade:0,
    answerArrays1:[],
    answerArrays2:[],
    answerArrays3:[],
    //unSelected:0,
    //totalWrong:0
    result: [],
    questions: 0,
    selectedFlag: [],
    option:[],
    options: [],
    wrongoptions:[],
    questions: [
      {
        type: "单选题",
        score: "1",
        question: "请吃红小豆的主656546456456444444444777777777777777777777777777777777777角是谁？",
        option:
        {
          "A": "红小豆",
          "B": "李建勋",
          "C": "芦荟",
          "D": "枸杞"
        },
        true1: "A",
        number: "4",
        result: "0"
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
  },
  //判断正确选项乱序后的位置
  TrueOptionFunction: function () {
    var trueoptions = [];
    //console.log(this.data.wrongList[5].trueOption);
    for (var i = 0; i < this.data.wrongList.length; i++) 
    {
      /*if (app.globalData.questions[this.data.wrongList[i].order].number == '3') {
        for (var j = 0; j < 3; j++) {
          if (this.data.wrongList[i].trueOption == this.data.answerArrays1[j]) {
            trueoptions.push(j);
          }
        }
      }
      else if (app.globalData.questions[this.data.wrongList[i].order].number == '4') {*/
        for (var j = 0; j < 4; j++) 
        {
          if (this.data.wrongList[i].trueOption == this.data.answerArrays2[j]) 
          {
            trueoptions.push(j);
          }
        }
      /*}
      else {
        for (var j = 0; j < 6; j++) {
          if (this.data.wrongList[i].trueOption == this.data.answerArrays3[j]) {
            trueoptions.push(j);
          }
        }
      }*/
      this.setData({
        trueoption: trueoptions
      })
      //console.log(this.data.trueoption);
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     console.log(options.wrongList);
    // console.log(JSON.parse(options.wrongList));
    // console.log(typeof JSON.parse(options.wrongList));
    // console.log(options.answerArrays2);
    // console.log(options.answerArrays2.length);
    // console.log(typeof options.answerArrays2);
    //console.log(typeof options.wrong);
    //console.log(typeof options.unSelected);
    //设置标题
    wx.setNavigationBarTitle({
      title: "测试结果"
    })
    /*wx.navigateBack({
      delta: 2
    })*/
    this.setData({//更新此次作业的题目数量
      questionCount: app.globalData.questions.length,
    })
    this.setData({
      wrongList: JSON.parse(options.wrongList),
      //wrongList: options.wrongList,
      answerArrays1: JSON.parse(options.answerArrays1),
      answerArrays2: JSON.parse(options.answerArrays2),
      answerArrays3: JSON.parse(options.answerArrays3),
      result: JSON.parse(options.result)
    })
    console.log(this.data.result);
    console.log("题目数组的长度"+app.globalData.questions.length)
    for (var i = 0; i < this.data.questionCount; i++) 
    {
      var str2 = "selectedFlag[" + i + "]";
      this.setData({
        [str2]: false,
      }) //为questionIsSelected与selectedFlag赋值
    }
    console.log(this.data.selectedFlag);
    this.setData({
      wrong: parseInt( options.wrong ) ,
      right: parseInt(options.right),
      /*wrongList: options.wrongList,
      answerArrays1: options.answerArrays1,
      answerArrays2: options.answerArrays2,
      answerArrays3: options.answerArrays3,*/
      //unSelected: parseInt( options.unSelected )
    })
    console.log(this.data.wrongList);
    for (var i = 0; i < this.data.questionCount; i++) {
      var strOption = "option[" + i + "]";
      this.setData({
        [strOption]: app.globalData.questions[i].option,
      }) //为questionIsSelected与selectedFlag赋值
    }
    /*this.setData({
      option: app.globalData.questions[0].option,
    })*/
    console.log(this.data.option);
    this.setData({//更新此次作业的题目数量
      questionCount: app.globalData.questions.length,
    })
    this.setData({
      right: this.data.right,
    })
    console.log(this.data.right);
    this.setData({
      wrong: this.data.questionCount - this.data.right ,
    })
    this.setData({
      accuracy: (this.data.right/this.data.questionCount)*100,
    })
    /*this.setData({
      accuracy: this.data.questionCount.toFixed(2),
    })*/
    this.setData({
      grade: this.data.right*1,
    })
    this.setData({
      myoption: this.data.myoption,
    })
    this.setData({
      options: this.data.option[0],
    })
    this.setData({
      wrongLists: this.data.wrongList[0],
    })
    console.log(this.data.answerArrays2[0]);
    console.log(this.data.options[this.data.answerArrays2[0]] );
    console.log(this.data.options[this.data.answerArrays2[1]]);
    console.log(this.data.options[this.data.answerArrays2[2]]);
    console.log(this.data.options[this.data.answerArrays2[3]]);
    console.log(this.data.wrongLists);
    console.log(this.data.wrongLists['order']);
    console.log(this.data.wrongLists['trueOption']);
    console.log(this.data.wrongLists['wrongOption']);
    //console.log(options[answerArrays2[2]]);
    //console.log(options[answerArrays2[3]]);

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
  reset: function(){
    wx.navigateBack({
      delta:3
    })
  },
  wrongAnswer:function(){
    wx.navigateTo({
      url: '/pages/course/work/wrongAnswer/wrongAnswer?wrongList=' + this.data.wrongList + '&answerArrays1=' + this.data.answerArrays1 + '&answerArrays2=' + this.data.answerArrays2 + '&answerArrays3=' + this.data.answerArrays3 
    })
  },
  // 展开折叠选择  
  changeToggle: function (e) 
  {
    var index = e.currentTarget.dataset.index;    

    console.log(this.data.option);
    console.log(e.currentTarget.dataset.index);
    if (this.data.selectedFlag[index]) {
      this.data.selectedFlag[index] = false;
    } 
    else {
      this.data.selectedFlag[index] = true;
    }
    console.log(this.data.questions[0].option);
    this.setData({
      selectedFlag: this.data.selectedFlag,
      //wrongoptions: this.data.questions[this.data.wrongList[index].order].option,
    })
    this.TrueOptionFunction();
    this.setData({
      options: this.data.option[index],
    })
    console.log(this.data.options);
  },


  navBack:function(){
    wx.navigateBack({
      delta: 3
    })
  }

})