// pages/coupon-list/index.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    parameter: {
      'navbar': '1',
      'return': '1',
      'title': '领取优惠券',
      'color': false
    },
    couponsList:[],
    loading:false,
  },

  /**
   * 授权回调
  */
  onLoadFun:function(){
    this.getUseCoupons();
  },
  getCoupon:function(e){
    var that = this;
    var id = e.currentTarget.dataset.id;
    var index = e.currentTarget.dataset.index;
    var list = that.data.couponsList;
    //领取优惠券
    app.basePost(app.U({ c: 'coupons_api', a: 'user_get_coupon' }), { couponId: id }, function (res) {
      list[index].is_use = true;
      that.setData({
        couponsList: list
      });
      app.Tips({ title: '领取成功' });
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 获取领取优惠券列表
  */
  getUseCoupons:function(){
    var that=this
    app.baseGet(app.U({ c: 'coupons_api', a:'get_issue_coupon_list'}),function(res){
      that.setData({ loading: true, couponsList:res.data});
    });
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },


})