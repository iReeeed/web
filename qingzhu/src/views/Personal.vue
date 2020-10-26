<template>
  <div class="personal">
    <el-container>
      <el-header>
        <el-menu
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
        </el-menu>
      </el-header>
      <el-container>
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
      <el-footer>
        <el-row :gutter="10">
          <el-col :span="6">
            <div>正</div><span>正品承诺</span>
          </el-col>
          <el-col :span="6">
            <div>低</div><span>低价保障</span>
          </el-col>
          <el-col :span="6">
            <div>退</div><span>30天无忧退货</span>
          </el-col>
          <el-col :span="6">
            <div>邮</div><span>满88包邮</span>
          </el-col>
        </el-row>
        <hr style="margin-top:30px" />
        <div class="something">
          <el-row :gutter="10">
            <el-col :span="6">
              <img src="@/assets/images/logo.png" alt />
              <br>
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
              <img src="@/assets/images/微信二维码.png" alt="">
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
  },
};
</script>

<style scoped>
.allorder > .el-col > img {
  height: 70px;
  padding: 15px 0 0 15px;
}
.orders > .el-menu-item {
  font-size: 24px;
  margin: 0 10px;
}
.personal {
  width: 80%;
  margin-left: 10%;
}
.el-header {
  padding: 0;
}
.el-footer {
  color: #333;
  background: #FAF8F8;
  text-align: center;
  height: 400px !important;
  margin-top: 50px;
  padding-top: 50px;
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
.el-footer>.el-row>.el-col>div{
  height: 60px;
  width:60px;
  float: left;
  border: 2px solid black;
  border-radius: 50%;
  font-size: 24px;
  line-height:60px
}
.el-footer>.el-row>.el-col>span{
  margin-left:-100px;
}
.something{
  margin-top: 30px;
}
.something>.el-row>.el-col{
  text-align: left;
}
ul,li{
  list-style: none;
}
li{
  font-size:13px;
  margin-top:8px;
}
ul>li:first-child{
  font-size:16px;

}
li:hover{
  color: pink;
}
</style>
