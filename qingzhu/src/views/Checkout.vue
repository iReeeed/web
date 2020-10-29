<template>
  <div class="checkout">
    <el-container>
      <el-header>
        <!-- header部分开始 -->
        <div class="header">
          <div class="header_c inner_c">
            <h1 class="logo">青竹商城</h1>
            <dl class="allType">
              <dt>
                <a href="#">查看所有类型</a>
              </dt>
              <dd>
                <div class="dd_inn">
                  <ul class="dd_cont">
                    <li>
                      <a href="#">不锈钢</a>
                    </li>
                    <li>
                      <a href="#">原料水泥</a>
                    </li>
                    <li>
                      <a href="#">塑料</a>
                    </li>
                    <li>
                      <a href="#">木质</a>
                    </li>
                    <li>
                      <a href="#">陶瓷</a>
                    </li>
                  </ul>
                  <ul class="pro">
                    <li>
                      <a href="#">
                        <div class="pic">
                          <img src="@/assets/Home/images/img25.png" alt />
                        </div>
                        <div class="content">
                          <h3>简约木质餐盘</h3>
                          <span>￥200</span>
                        </div>
                      </a>
                      <div class="mask">
                        <a href="#" class="btn">查看详情</a>
                      </div>
                    </li>
                    <li>
                      <a href="#">
                        <div class="pic">
                          <img src="@/assets/Home/images/img26.png" alt />
                        </div>
                        <div class="content">
                          <h3>简约木质餐盘</h3>
                          <span>￥200</span>
                        </div>
                      </a>
                      <div class="mask">
                        <a href="#" class="btn">查看详情</a>
                      </div>
                    </li>
                    <li>
                      <a href="#">
                        <div class="pic">
                          <img src="@/assets/Home/images/img27.png" alt />
                        </div>
                        <div class="content">
                          <h3>简约木质餐盘</h3>
                          <span>￥200</span>
                        </div>
                      </a>
                      <div class="mask">
                        <a href="#" class="btn">查看详情</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </dd>
            </dl>
            <ul class="nav">
              <li class="link" @click="toIndex">
                <span>首页</span>
              </li>
              <li class="link" @click="toProducts">
                <span>所有产品</span>
              </li>
              <li class="link" @click="toBlog">
                <span>博客</span>
              </li>
              <li class="link" @click="toArticle">
                <span>文章列表</span>
              </li>
              <li class="link" @click="toPersonal">
                <span>个人中心</span>
              </li>
            </ul>
            <a href="#" class="search"></a>
            <div class="reg">
              <div class="ico">
                <span class="ico_c link" @click="toCart"></span>
                <div class="settle">
                  <p class="con">
                    0件商品 共计：
                    <span>￥0</span>
                  </p>
                  <a href="#" class="btn">结算</a>
                </div>
                <span class="con">0</span>
              </div>
              <div class="reg_c">
                <span class="link" id @click="toLogin">登陆</span>
                <span>&nbsp;|&nbsp;</span>
                <span class="link" @click="toRegister">注册</span>
              </div>
            </div>
          </div>
        </div>
      </el-header>

      <div class="check-addr">
        <p>选择收货地址</p>
        <el-row :gutter="10" style="margin-top:15px">
          <el-col :span="6">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>张三</span>
                <el-button style="float: right; padding: 3px 0" type="text">编辑</el-button>
              </div>
              <div class="address">
                浙江省 杭州市 江干区
                <br />浙江理工大学
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>李四</span>
                <el-button style="float: right; padding: 3px 0" type="text">编辑</el-button>
              </div>
              <div class="address">
                浙江省 杭州市 江干区
                <br />浙江理工大学
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-button class="add-addr-btn" type="primary">+新增收货地址</el-button>
      </div>
      <div class="check-goods-infor" style="margin-top:15px">
        <p>确认商品信息</p>
        <hr />
        <el-table :data="goodsData" style="width: 100%">
          <el-table-column prop="baseinfor" label="商品信息" min-width="300px"></el-table-column>
          <el-table-column prop="weight" label="重量(kg)" min-width="100px"></el-table-column>
          <el-table-column prop="worth" label="单价(元)" min-width="100px"></el-table-column>
          <el-table-column prop="count" label="数量(个)" min-width="100px"></el-table-column>
          <el-table-column prop="tatol" label="金额(元)" min-width="100px"></el-table-column>
        </el-table>
        <el-row :gutter="20" style="margin:15px 0 0 5px">
          <el-col :span="4">
            <span>给商家留言：</span>
          </el-col>
          <el-col :span="18">
            <el-input v-model="liuyan" placeholder></el-input>
          </el-col>
        </el-row>
        <div class="discount div1">
          <el-row :gutter="10">
            <el-col :offset="1" :span="7">
              <span>商品券：</span>
              <el-select v-model="model" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-col>
            <el-col :span="7">
              <span>运费券：</span>
              <el-select v-model="model" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-col>
            <el-col :span="7">
              <span>税费券：</span>
              <el-select v-model="model" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-col>
          </el-row>
        </div>

        <div class="discount final-check">
          <el-row :gutter="10">
            <el-col
              :span="16"
              style="text-align:left;font-size:13px;margin-top:15px;margin-left:15px"
            >
              发票信息：订单中所有商品均不支持开具发票
              <br />发票须知：
              <br />1. 保税仓发货商品与海外仓发货商品属跨境海外商品，无法开具国内增值税发票
              <br />2. 自2017年7月1日起，发票抬头选择公司（企业、有税号的非企业性单位和个体工商户）需提供纳税人识别号
              <br />3. 自营国内仓商品支持开具电子普通发票，电子普通发票在确认收货后48小时内开具
              <br />4. 杭州1号仓和杭州4号仓的商品，若下单开具纸质普通发票，发票随包裹一起寄出，补开则单独寄出
              <br />5. 其他自营国内仓商品，若开具纸质普通发票，发票在确认收货后3个工作日内单独寄出
              <br />6. 第三方商家若无法开具电子发票，则自动开纸质发票，商家发票以实际收到为准
              <br />7. 如需增值税专用发票，请在下单时填写增值税专用发票信息，核对无误后提交，发票在确认收货后3个工作日内单独寄出
              <br />8. 礼品卡支付金额不支持开发票
            </el-col>
            <el-col :span="6" style="margin-top:15px;text-align:right" class="cal">
              <el-row :gutter="10">
                <el-col :offset="6" :span="8">实际应付：</el-col>
                <el-col :span="6">￥299.0</el-col>
              </el-row>
              <el-row :gutter="10">
                <el-col :offset="6" :span="8">运费：</el-col>
                <el-col :span="6">￥0.0</el-col>
              </el-row>
              <el-row :gutter="10">
                <el-col :offset="6" :span="8">税费：</el-col>
                <el-col :span="6">￥0.0</el-col>
              </el-row>
              <el-row :gutter="10">
                <el-col :offset="6" :span="8">合计：</el-col>
                <el-col :span="6" style="color:red;font-size:20px">￥299.0</el-col>
              </el-row>
              <el-row :gutter="10">
                <el-col :offset="13" :span="6" style="text-align:right">
                  <el-button type="primary" class="checkout-btn">提交订单</el-button>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </div>
      </div>
      <el-footer>
        <el-row :gutter="10">
          <el-col :span="6">
            <div>正</div>
            <span>正品承诺</span>
          </el-col>
          <el-col :span="6">
            <div>低</div>
            <span>低价保障</span>
          </el-col>
          <el-col :span="6">
            <div>退</div>
            <span>30天无忧退货</span>
          </el-col>
          <el-col :span="6">
            <div>邮</div>
            <span>满88包邮</span>
          </el-col>
        </el-row>
        <hr style="margin-top:30px" />
        <div class="something">
          <el-row :gutter="10">
            <el-col :span="6">
              <img src="@/assets/images/logo.png" alt />
              <br />
              <span style="font-size:8px;margin-top:5px">
                青竹良品原创生活类电商品牌，
                秉承一贯的严谨态度，我们深入世界各地，
                从源头全程严格把控商品生产环节，力求帮消费者甄选到最优质的商品，
                全线采用天然原材料，控制甲醛低量无害，采用进口工艺，
                国际生产线不断优化，食材保证核心原产地新鲜直供，让你享受品质生活
              </span>
            </el-col>
            <el-col :span="4">
              <ul>
                <li>关于我们</li>
                <li>我的品牌</li>
                <li>公司动态</li>
                <li>经济发展</li>
                <li>商品推广</li>
              </ul>
            </el-col>
            <el-col :span="4">
              <ul>
                <li>支付方式</li>
                <li>微信支付</li>
                <li>支付宝</li>
                <li>百度钱包</li>
                <li>货到付款</li>
              </ul>
            </el-col>
            <el-col :span="4">
              <ul>
                <li>相关服务</li>
                <li>退货政策</li>
                <li>购物流程</li>
                <li>客服服务</li>
                <li>商务合作</li>
              </ul>
            </el-col>
            <el-col :span="4">
              <img src="@/assets/images/微信二维码.png" alt />
            </el-col>
          </el-row>
        </div>
      </el-footer>
    </el-container>
    <div style="height:100px;width:100%"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      liuyan: "",
      activeIndex: "1",
      activeIndex2: "1",
      goodsData: [
        {
          baseinfor: "阿迪达斯经典贝壳头 尺码36",
          weight: 0.8,
          worth: 299.0,
          count: 1,
          tatol: 299.0,
        },
        {
          baseinfor: "阿迪达斯经典贝壳头  尺码36",
          weight: 0.8,
          worth: 299.0,
          count: 1,
          tatol: 299.0,
        },
      ],
      model: "",
      options: [{ value: "case1", label: "case1" }],
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    toLogin() {
      this.$router.push({
        path: "/login",
      });
    },
    toRegister() {
      this.$router.push({
        path: "/register",
      });
    },
    toBlog() {
      this.$router.push({
        path: "/blog",
      });
    },
    toProducts() {
      this.$router.push({
        path: "/allproducts",
      });
    },
    toIndex() {
      this.$router.push({
        path: "/",
      });
    },
    toArticle() {
      this.$router.push({
        path: "/article",
      });
    },
    toPersonal() {
      this.$router.push({
        path: "/personal",
      });
    },
    toCart() {
      this.$router.push({
        path: "/cart",
      });
    },
  },
};
</script>

<style scoped>
@import "../assets/Home/css/reset.css";
@import "../assets/Home/css/index.css";
.checkout {
  width: 80%;
  margin-left: 10%;
}
.el-header {
  padding: 0;
}
.el-footer {
  color: #333;
  background: #faf8f8;
  text-align: center;
  height: 400px !important;
  margin-top: 50px;
  padding-top: 50px;
}

body > .el-container {
  margin-bottom: 40px;
}
.el-footer > .el-row > .el-col > div {
  height: 60px;
  width: 60px;
  float: left;
  border: 2px solid black;
  border-radius: 50%;
  font-size: 24px;
  line-height: 60px;
}
.el-footer > .el-row > .el-col > span {
  margin-left: -100px;
}
.something {
  margin-top: 30px;
}
.something > .el-row > .el-col {
  text-align: left;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 300px;
}
.address {
  font-size: 12px;
}
.add-addr-btn {
  margin-top: 15px;
  background: lightgray;
  border: lightgray;
}
.add-addr-btn:hover {
  background: rgb(175, 172, 172);
}
div > p {
  font-weight: 600;
}
.div1 {
  height: 100px;
  line-height: 100px;
}
.discount {
  width: 100%;
  text-align: center;
  margin-top: 30px;
  border: 1px solid gainsboro;
}
.final-check {
  height: 300px;
  background: rgb(223, 208, 208);
}
.cal > .el-row {
  padding: 10px 0;
}
.checkout-btn {
  background: red;
  border: red;
}
.checkout-btn:hover {
  background: rgba(221, 4, 4, 0.445);
}
.check-addr {
  margin-top: 30px;
}
.link {
  cursor: pointer;
}
</style>
