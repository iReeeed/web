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
          <el-menu-item index="4">所有产品</el-menu-item>
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
          </el-menu>
        </el-aside>
        <el-container>
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
                    <img src="@/assets/images/pic1.jpg" alt="">
                </el-col>
                <el-col :span="6" style="text-align:left;">
                    快件已到达杭州中转部
                </el-col>
                 <el-col :span="6" :offset="6" style="text-align:left;">
                    <el-button type="info">确认收货</el-button>
                </el-col>
            </el-row>
            <hr style="margin:0 0 10px 0">
            <el-row :gutter="10" class="allorder">
                <el-col :span="6" style="text-align:left;padding:5px">
                    <img src="@/assets/images/pic1.jpg" alt="">
                </el-col>
                <el-col :span="6" style="text-align:left;">
                    快件已到达杭州中转部
                </el-col>
                 <el-col :span="6" :offset="6" style="text-align:left;">
                    <el-button type="info">确认收货</el-button>
                </el-col>
            </el-row>


          </el-main>
          <el-footer>
              <el-row :gutter="10">
                  <el-col :span="6">
                      <div style="height:60px;width:60px;float:left;border:2px solid black;border-radius:50%;font-size:24px" >正</div>
                      正品承诺</el-col>
                  <el-col :span="6">
                      <div style="height:60px;width:60px;float:left;border:2px solid black;border-radius:50%;font-size:24px" >低</div>
                      低价保障</el-col>
                  <el-col :span="6">
                      <div style="height:60px;width:60px;float:left;border:2px solid black;border-radius:50%;font-size:24px" >退</div>
                      30天无忧退货</el-col>
                  <el-col :span="6">
                      <div style="height:60px;width:60px;float:left;border:2px solid black;border-radius:50%;font-size:24px" >邮</div>
                      满88包邮</el-col>
              </el-row>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
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
.allorder>.el-col>img{
    height: 70px;
}
.orders>.el-menu-item {
    font-size: 24px;
    margin:0 10px;
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
  text-align: center;
  line-height: 60px;
  padding-top:150px
}

.el-aside {
  color: #333;
}

.el-main {
  color: #333;
  line-height:80px
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
