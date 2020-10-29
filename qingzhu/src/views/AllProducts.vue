<template>
  <div>
      <!-- header部分开始 -->
	<div class="header">
		<div class="header_c inner_c">
			<h1 class="logo">
				青竹商城
			</h1>
			<dl class = "allType">
				<dt><a href="#">查看所有类型</a></dt>
				<dd>
					<div class = "dd_inn">
						<ul class = "dd_cont">
							<li><a href="#">不锈钢</a></li>
							<li><a href="#">原料水泥</a></li>
							<li><a href="#">塑料</a></li>
							<li><a href="#">木质</a></li>
							<li><a href="#">陶瓷</a></li>
						</ul>
						<ul class="pro">
							<li>
								<a href="#">
									<div class="pic">
										<img src="@/assets/Home/images/img25.png" alt="">
									</div>
									<div class="content">
										<h3>简约木质餐盘</h3>
										<span>￥200</span>
									</div>
								</a>
								<div class="mask">
									<a href="#" class = "btn">查看详情</a>
								</div>
							</li>
							<li>
								<a href="#">
									<div class="pic">
										<img src="@/assets/Home/images/img26.png" alt="">
									</div>
									<div class="content">
										<h3>简约木质餐盘</h3>
										<span>￥200</span>
									</div>
								</a>
								<div class="mask">
									<a href="#" class = "btn">查看详情</a>
								</div>
							</li>
							<li>
								<a href="#">
									<div class="pic">
										<img src="@/assets/Home/images/img27.png" alt="">
									</div>
									<div class="content">
										<h3>简约木质餐盘</h3>
										<span>￥200</span>
									</div>
								</a>
								<div class="mask">
									<a href="#" class = "btn">查看详情</a>
								</div>
							</li>
						</ul>
					</div>
				</dd>
			</dl>
			<ul class="nav">
				<li class="link" @click="toIndex"><span >首页</span></li>
				<li class="link" @click="toProducts"><span >所有产品</span></li>
				<li class="link" @click="toBlog"><span >博客</span></li>
				<li class="link" @click="toArticle"><span >文章列表</span></li>
				<li class="link" @click="toPersonal"><span >个人中心</span></li>

			</ul>
			<a href="#" class="search"></a>
			<div class="reg">
				<div class="ico">
					<span class = "ico_c"></span>
					<div class="settle">
						<p class="con">0件商品 共计：<span>￥0</span></p>
						<a href="#" class="btn">结算</a>
					</div>
					<span class = "con">
						0
					</span>
				</div>
				<div class = "reg_c">
					<span class="link" @click="toLogin"  id="">登陆</span>
					<span>&nbsp;|&nbsp;</span>
					<span class="link" @click="toRegister" >注册</span>
				</div>
			</div>
		</div>
	</div>
	<!-- header部分结束 -->
	<div class="s_content">
		<div class="s_content_c inner_c">
			<div class="s_info">
				<div class="s_title">
					<a href="#">
						首页
					</a>
					&gt;
					<span>
						所有商品
					</span>
				</div>
				<div class="screen">
					<table>
						<tr class = "t1">
							<th>品牌</th>
							<td>
								<a href="#">无印</a>
								<a href="#">博朗</a>
								<a href="#">花印</a>
							</td>
						</tr>
						<tr class = "t2">
							<th>类别</th>
							<td>
								<a href="#">不锈钢</a>
								<a href="#">原料水泥</a>
								<a href="#">塑料</a>
								<a href="#">木质</a>
							</td>
						</tr>
					</table>
				</div>
				<div class="fun">
					<div class="sort">
						<span>排序：</span>
						<a href="#" class="s1">
							<i></i>销量
						</a>
						<a href="#" class="s2">
							<i></i>价格
						</a>
						<a href="#" class="s3">
							<i></i>上架时间
						</a>
					</div>
					<div class="swi">
						<span>仅显示有货：</span>
						<a href="#">
							<i></i>
						</a>
					</div>
					<div class="total">
						共<span>20</span>个商品
					</div>
				</div>
				<div class="s_prod">
					<ul class = "pub_pro">
						<li>
							<img src="@/assets/Home/images/img47.png" alt="">
							<div class="cont">
								<h3>不锈钢汤勺</h3>
								<span>￥300</span>
							</div>
							<div class="mask">
								<a href="#" class="btn">查看详情</a>
							</div>
						</li>
						<li>
							<img src="@/assets/Home/images/img41.png" alt="">
							<div class="cont">
								<h3>不锈钢汤勺</h3>
								<span>￥300</span>
							</div>
							<div class="mask">
								<a href="#" class="btn">查看详情</a>
							</div>
						</li>
						<li>
							<img src="@/assets/Home/images/img42.png" alt="">
							<div class="cont">
								<h3>不锈钢汤勺</h3>
								<span>￥300</span>
							</div>
							<div class="mask">
								<a href="#" class="btn">查看详情</a>
							</div>
						</li>
						<li>
							<img src="@/assets/Home/images/img43.png" alt="">
							<div class="cont">
								<h3>不锈钢汤勺</h3>
								<span>￥300</span>
							</div>
							<div class="mask">
								<a href="#" class="btn">查看详情</a>
							</div>
						</li>
						<li>
							<img src="@/assets/Home/images/img44.png" alt="">
							<div class="cont">
								<h3>不锈钢汤勺</h3>
								<span>￥300</span>
							</div>
							<div class="mask">
								<a href="#" class="btn">查看详情</a>
							</div>
						</li>
						<li>
							<img src="@/assets/Home/images/img46.png" alt="">
							<div class="cont">
								<h3>不锈钢汤勺</h3>
								<span>￥300</span>
							</div>
							<div class="mask">
								<a href="#" class="btn">查看详情</a>
							</div>
						</li>
						<li>
							<img src="@/assets/Home/images/img48.png" alt="">
							<div class="cont">
								<h3>不锈钢汤勺</h3>
								<span>￥300</span>
							</div>
							<div class="mask">
								<a href="#" class="btn">查看详情</a>
							</div>
						</li>
						<li>
							<img src="@/assets/Home/images/img49.png" alt="">
							<div class="cont">
								<h3>不锈钢汤勺</h3>
								<span>￥300</span>
							</div>
							<div class="mask">
								<a href="#" class="btn">查看详情</a>
							</div>
						</li>
						<li>
							<img src="@/assets/Home/images/img49.png" alt="">
							<div class="cont">
								<h3>不锈钢汤勺</h3>
								<span>￥300</span>
							</div>
							<div class="mask">
								<a href="#" class="btn">查看详情</a>
							</div>
						</li>
						<li>
							<img src="@/assets/Home/images/img47.png" alt="">
							<div class="cont">
								<h3>不锈钢汤勺</h3>
								<span>￥300</span>
							</div>
							<div class="mask">
								<a href="#" class="btn">查看详情</a>
							</div>
						</li>
						<li>
							<img src="@/assets/Home/images/img47.png" alt="">
							<div class="cont">
								<h3>不锈钢汤勺</h3>
								<span>￥300</span>
							</div>
							<div class="mask">
								<a href="#" class="btn">查看详情</a>
							</div>
						</li>
						<li>
							<img src="@/assets/Home/images/img47.png" alt="">
							<div class="cont">
								<h3>不锈钢汤勺</h3>
								<span>￥300</span>
							</div>
							<div class="mask">
								<a href="#" class="btn">查看详情</a>
							</div>
						</li>
					</ul>
				</div>
				<div class="pages">
					<a href="#">&lt;</a>
					<a href="#" class = "tol cur">1</a>
					<a href="#" class = "tol ">2</a>
					<a href="#">&gt;</a>
				</div>
			</div>
		</div>
	</div>
	<!-- footer部分开始 -->
	<div class="footer">
		<div class="footer_c inner_c">
			<div class="footer_top">
				<div class="bir">
					<a href="#">
						<img src="@/assets/Home/images/logo.png" alt="">
					</a>
					<div class="info">
						青竹良品原创生活类电商品牌，秉承一贯的严谨态度，我们深入世界各地，从源头全程严格把控商品生产环节，力求帮消费者甄选到最优质的商品，全线采用天然原材料，控制甲醛低量无害，采用进口工艺，国际生产线不断优化，食材保证核心原产地新鲜直供，让你享受品质生活
					</div>
				</div>
				<div class="about">
					<dl>
						<dt>
							<a href="#">
								关于我们
							</a>
						</dt>
						<dd>
							<a href="#">
								我的品牌
							</a>
						</dd>
						<dd>
							<a href="#">
								公司动态
							</a>
						</dd>
						<dd>
							<a href="#">
								经历发展
							</a>
						</dd>
						<dd>
							<a href="#">
								商品推广
							</a>
						</dd>
					</dl>
					<dl>
						<dt>
							<a href="#">
								关于我们
							</a>
						</dt>
						<dd>
							<a href="#">
								我的品牌
							</a>
						</dd>
						<dd>
							<a href="#">
								公司动态
							</a>
						</dd>
						<dd>
							<a href="#">
								经历发展
							</a>
						</dd>
						<dd>
							<a href="#">
								商品推广
							</a>
						</dd>
					</dl>
					<dl>
						<dt>
							<a href="#">
								关于我们
							</a>
						</dt>
						<dd>
							<a href="#">
								我的品牌
							</a>
						</dd>
						<dd>
							<a href="#">
								公司动态
							</a>
						</dd>
						<dd>
							<a href="#">
								经历发展
							</a>
						</dd>
						<dd>
							<a href="#">
								商品推广
							</a>
						</dd>
					</dl>
				</div>
				<div class="ewm">
					<p class="wx">
						<img src="@/assets/Home/images/img71.png" alt="">
						<span>微信公众号</span>
					</p>
					<p class="wb">
						<img src="@/assets/Home/images/img72.png" alt="">
						<span>微博公众号</span>
					</p>
				</div>
			</div>
		</div>
		<div class="footer_bar">
			<div class="footer_bar_c inner_c">
				<div class = "pay">
					<p class = "copy">
						2019 © youhaosuda.com
					</p>
					<p class = "ico">
						<a href="#">
							<img src="@/assets/Home/images/img81.png" alt="">
						</a>
						<a href="#">
							<img src="@/assets/Home/images/img82.png" alt="">
						</a>
						<a href="#">
							<img src="@/assets/Home/images/img83.png" alt="">
						</a>
						<a href="#">
							<img src="@/assets/Home/images/img84.png" alt="">
						</a>
						<a href="#">
							<img src="@/assets/Home/images/img85.png" alt="">
						</a>
						<a href="#">
							<img src="@/assets/Home/images/img86.png" alt="">
						</a>
						<a href="#">
							<img src="@/assets/Home/images/img87.png" alt="">
						</a>
					</p>
				</div>
				<div class="super">
					<a href="#" class = "pic1">
						
					</a>
					<a href="#" class = "pic2">
						
					</a>
					<a href="#" class = "pic3">
						
					</a>
				</div>
			</div>
		</div>
	</div>
	<!-- 返回顶部 -->
	<div class="lingpin_top">
		<a href="#" class = "qq">QQ<br/>客服</a>
		<a href="#" class = "wx">微信<br/>客服</a>
		<a href="#" class = "top_c">↑</a>
	</div>
  </div>
</template>

<script>
export default {
    methods:{
        toLogin(){
            this.$router.push({
                path:'/login'
            });
        },
        toRegister(){
            this.$router.push({
                path:'/register'
            });
        },
        toBlog(){
            this.$router.push({
                path:'/blog'
            });
        },
         toProducts(){
            this.$router.push({
                path:'/allproducts'
            });
        },
        toIndex(){
            this.$router.push({
                path:'/'
            });
        },
        toArticle(){
            this.$router.push({
                path:'/article'
            });
        },
        toPersonal(){
            this.$router.push({
                path:'/personal'
            });
        }
    }

}
</script>

<style scoped>
    @import '../assets/Home/css/reset.css';
    @import '../assets/Home/css/common.css';
    @import '../assets/Home/css/allproducts.css';

.link:hover{
    cursor: pointer;
}
</style>