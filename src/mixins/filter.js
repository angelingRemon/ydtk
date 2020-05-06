/**
 * 自定义过滤器
 */

export default {
  /* 组织信息 */
  orgType(val) {
    let a = 2
    switch (val) {
      case 1:
        return '集团'
      case 2:
        return '集团子牧场'
      case 3:
        return '社会牧场'
      case 4:
        return '供应商'
      case 5:
        return '个人'
    }
  },
  /* 订单状态 */
  orderStatus(val) {
    switch (val) {
      case 1:
        return '待付款'
      case 2:
        return '待发货'
      case 3:
        return '待收货'
      case 4:
        return '已收货'
      case 5:
        return '已取消'
      case 6:
        return '已完成'
      case 7:
        return '账期待审核'
      case 8:
        return '已进入账期'
      case 9:
        return '账期已完成'
      case 10:
        return '已逾期'
    }
  },
  /* 凭证类型 */
  voucherType(val) {
    switch (val) {
      case '1':
        return '发票'
      case '2':
        return '入库单'
      case '3':
        return ''
      case '4':
        return '物流凭证'
      case '5':
        return '销货清单'
      case '6':
        return '对账单'
      case '7':
        return ''
      case '8':
        return ''
      case '9':
        return '其它'
    }
  },
  /* 支付类型 */
  payModel(val) {
    // return val == '0'? '全额支付':'账期支付'

    switch (val) {
      case 0:
        return '全额支付'
      case 1:
        return '账期支付'
      case 3:
        return '奶款代扣'
      case 4:
        return '线下支付'
      case 5:
        return '融资支付'
      case 6:
        return '逾期转代扣'
    }
  },
  /* 支付状态 */
  payStatus(val) {
    switch (val) {
      case 1:
        return '等待付款'    //(货到付款)
      case 2:
        return '等待付款'
      case 3:
        return '已付款'
      case 4:
        return '正在退款'
      case 5:
        return '已退款'
      case 6:
        return '待付余款'
      case 7:
        return '已付余款'
    }
  },
  /* 支付方式 */
  payType(val) {
    switch (val) {
      case 1:
        return '支付宝'
      case 2:
        return '微信支付'
      case 3:
        return '中国银联'
      case 4:
        return '中国农业银行'
      case 6:
        return '蒙牛代扣款'
      case 7:
        return '中信银行支付'
    }
  },
  /* 合同审核状态 */
  contractStatus(val) {
    switch (val) {
      case 1:
        return '未审核'
      case 2:
        return '已通过'
      case 3:
        return '已拒绝'
      default:
        return '无'
    }
  },
  /* 售后状态 */
  afterSaleStatus(val) {
    switch (val) {
      case 1:
        return '-'
      case 2:
        return '申请换货'
      case 3:
        return '申请退货'
      case 4:
        return '未通过换货审核'
      case 5:
        return '未通过退货审核'
      case 6:
        return '已通过换货审核'
      case 7:
        return '已通过退货审核'
      case 8:
        return '退货已发货'
      case 9:
        return '退货已收货'
      case 10:
        return '已换货'
      case 11:
        return '已退货'
    }
  },
  afterSaleContent(val) {
    switch (val) {
      case 1:
        return '-'
      case 2:
        return '申请换货'
      case 3:
        return '等待商家处理'
      case 4:
        return '未通过换货审核'
      case 5:
        return '商家已拒绝'
      case 6:
        return '已通过换货审核'
      case 7:
        return '退货退款中'
      case 8:
        return '退货已发货'
      case 9:
        return '退货已收货'
      case 10:
        return '已换货'
      case 11:
        return '退货完成'
    }
  },
  afterSaleWarm(val) {
    switch (val) {
      case 1:
        return '-'
      case 2:
        return '申请换货'
      case 3:
        return '退款申请成功，请耐心等待商家处理'
      case 4:
        return '未通过换货审核'
      case 5:
        return '商家已拒绝退款，请重新申请或联系平台客服处理'
      case 6:
        return '已通过换货审核'
      case 7:
        return '商家已同意退货，请将货物寄回如下地址'
      case 8:
        return '退货已发货'
      case 9:
        return '退货已收货'
      case 10:
        return '已换货'
      case 11:
        return '退货已成功'
    }
  },
  afterSaleVoucherType(val) {
    switch (val) {
      case 1:
        return '货品图片'
      case 2:
        return '发货凭证'
      case 3:
        return '收货凭证'

    }
  },

  // 配送方式
  priceKindSel(val) {
    switch (val) {
      case 1:
        return '自提'
      case 2:
        return '配送'
    }
  },

  // 消息类型
  newsType(val) {
    switch (val) {
      case '01':
        return '订单修改'
    }
  },

  // 代扣分期还款类型
  repayTypeFormat(value) {
    switch (value) {
      case 1:
        return '等额本息'
      case 2:
        return '等额本金'
      case 3:
        return '先息后本'
    }
  },

  // 代扣分期总金额是否全部还清
  workStateFormat(value) {
    switch (value) {
      case 0:
        return '未还清'
      case 1:
        return '已还清'
    }
  },

  // 代扣分期首付款的支付方式
  payModelFormat(value) {
    switch (value) {
      case 0:
        return '全额线上支付'
      case 1:
        return '帐期支付'
      case 3:
        return '蒙牛代扣'
      case 4:
        return '全额线下支付'
      case 5:
        return '融资支付'
      case 6:
        return '账期逾期转代扣支付'
    }
  }
}
