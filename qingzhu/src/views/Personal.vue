<template>
  <div class="personal">
    <div class="content">
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

        <!-- header部分结束 -->
        <!--  <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1">
            <img src="@/assets/images/logo.png" alt />
          </el-menu-item>
          <el-menu-item index="2">首页</el-menu-item>
          <el-menu-item index="3">所有产品</el-menu-item>
          <el-menu-item index="4">关于我们</el-menu-item>
          <el-menu-item index="5">联系我们</el-menu-item>
        </el-menu>-->
        <el-container style="margin-top:15px">
          <el-aside width="200px">
            <h5>个人中心</h5>
            <el-menu
              default-active="1"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
            >
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>我的订单</span>
                </template>
                <el-menu-item-group>
                  <template slot="title">分组一</template>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">我的购物津贴</span>
              </el-menu-item>
              <el-menu-item index="3">
                <i class="el-icon-document"></i>
                <span slot="title">我的红包</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">我的收藏</span>
              </el-menu-item>
              <el-menu-item index="5">
                <i class="el-icon-setting"></i>
                <span slot="title">我的关注</span>
              </el-menu-item>
              <el-menu-item index="5">
                <i class="el-icon-setting"></i>
                <span slot="title">我的收货地址</span>
              </el-menu-item>
              <el-menu-item index="5">
                <i class="el-icon-setting"></i>
                <span slot="title">我的发票</span>
              </el-menu-item>
              <el-menu-item index="5">
                <i class="el-icon-setting"></i>
                <span slot="title">售后管理</span>
              </el-menu-item>
            </el-menu>
          </el-aside>
          <el-main>
            <el-menu
              :default-active="activeIndex"
              class="el-menu-demo orders"
              mode="horizontal"
              @select="handleSelect"
            >
              <el-menu-item index="1">所有订单</el-menu-item>
              <el-menu-item index="2">待付款</el-menu-item>
              <el-menu-item index="3">待发货</el-menu-item>
              <el-menu-item index="4">待收货</el-menu-item>
              <el-menu-item index="5">待评价</el-menu-item>
            </el-menu>
            <el-row :gutter="10" class="allorder">
              <el-col :span="6" style="text-align:left;padding:5px">
                <img src="@/assets/images/pic1.jpg" alt />
              </el-col>
              <el-col :span="6" style="text-align:left;">快件已到达杭州中转部</el-col>
              <el-col :span="6" :offset="6" style="text-align:left;">
                <el-button type="info">确认收货</el-button>
              </el-col>
            </el-row>
            <hr style="margin:0 0 10px 0" />
            <el-row :gutter="10" class="allorder">
              <el-col :span="6" style="text-align:left;padding:5px">
                <img src="@/assets/images/pic1.jpg" alt />
              </el-col>
              <el-col :span="6" style="text-align:left;">快件已到达杭州中转部</el-col>
              <el-col :span="6" :offset="6" style="text-align:left;">
                <el-button type="info">确认收货</el-button>
              </el-col>
            </el-row>
          </el-main>
        </el-container>
        <div style="height:100px;width:100%"></div>
      </el-container>
    </div>
    <el-footer>
      <div class="foot-content">
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
      </div>
    </el-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
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

.allorder > .el-col > img {
  height: 70px;
  padding: 15px 0 0 15px;
}
.orders > .el-menu-item {
  font-size: 24px;
  margin: 0 10px;
}
.personal {
  width: 100%;
  background: #f2f2f2;
}
.content {
  width: 76%;
  margin-left: 12%;
  background: white;
  padding: 10px;
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
.foot-content {
  width: 80%;
  margin-left: 10%;
}
.link {
  cursor: pointer;
}

.el-aside {
  color: #333;
}

.el-main {
  color: #333;
  line-height: 80px;
}

body > .el-container {
  margin-bottom: 40px;
}
.el-footer > .foot-content > .el-row > .el-col > div {
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
</style>
