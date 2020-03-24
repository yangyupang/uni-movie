<template>
	<view class="container-box">
		<view class="carousel-box">
			<swiper indicator-dots="true" indicator-color="black" indicator-active-color="white" autoplay="true" class="carousel-swiper">
				<swiper-item v-for="(item,index) in carouselList" :key="index" @click="chooseItem(item)">
					<image :src="item.image" class="carousel-img" will-change:transform></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="superhero-box">
			<view class="superhero flex a-center">
				<image class="hot-img" src="../../static/images/hot.png"></image>
				<view>热门超英</view>
			</view>
			<scroll-view scroll-x v-if="hotList" class="">
				<view class="flex flex-nowrap">
					<movieBox v-for="item in hotList" :key="item.id" :item="item"></movieBox>
				</view>
			</scroll-view>
		</view>
		<view class="trailer-box">
			<view class="trailer flex a-center">
				<image class="trailer-img" src="../../static/images/trailer.png"></image>
				<view>热门预告</view>
			</view>
			<view class="flex flex-wrap jc-around">
				<trailerBox v-for="item in trailerList" :key="item.id" :item="item"></trailerBox>
			</view>
		</view>
		<view class="ulike-box">
			<view class="ulike flex a-center">
				<image class="ulike-img" src="../../static/images/ulike.png"></image>
				<view>猜你喜欢</view>
			</view>
			<view class="">
				<uLikeBox v-for="item in uLikeList" :key="item.id" :item="item"></uLikeBox>
			</view>
		</view>
	</view>
</template>

<script>
	import movieBox from '../../components/index/movieBox/movieBox.vue'
	import trailerBox from '../../components/index/trailerBox/trailerBox.vue'
	import uLikeBox from '../../components/index/uLikeBox/uLikeBox.vue'
	export default {
		data() {
			return {
				carouselList: {},
				hotList: {},
				trailerList: {},
				uLikeList: {},
			}
		},
		components: {
			movieBox,
			trailerBox,
			uLikeBox
		},
		methods: {
			getCarousel() {
				uni.showLoading({
					title: "加载中..."
				})
				uni.request({
					url: this.$api("/index/carousel/list"),
					method: 'POST',
					success: (res) => {
						this.carouselList = res.data.data
					},
					fail() {

					},
					complete() {
						uni.hideLoading()
					}
				})
			},
			getHotList(type) {
				uni.showLoading({
					title: "加载中..."
				})
				uni.request({
					url: this.$api("index/movie/hot"),
					method: 'POST',
					header: {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					data: {
						type //trailer
					},
					success: (res) => {
						type === 'trailer' ? this.trailerList = res.data.data : this.hotList = res.data.data
					},
					fail() {

					},
					complete() {
						uni.hideLoading()
					}
				})
			},
			getULike() {
				uni.showLoading({
					title: "加载中..."
				})
				uni.request({
					url: this.$api("index/guessULike"),
					method: 'POST',
					success: (res) => {
						this.uLikeList = res.data.data
					},
					fail() {

					},
					complete() {
						uni.hideLoading()
					}
				})
			},
			chooseItem(item) {
				console.log(item);
			}
		},
		onLoad() {
			this.getCarousel();
			this.getHotList('trailer');
			this.getHotList('superhero');
			this.getULike();
		},
	}
</script>

<style scoped lang="scss">
	.container-box {
		// position: absolute;
		// width: 100%;
		height: 100%;
		background-color: #F7F7F7;
	}

	.carousel-box {
		margin-bottom: 20upx;
	}

	.carousel-swiper {
		height: 440upx;
	}

	.carousel-img {
		width: 100%;
	}

	.superhero-box,
	.trailer-box {
		background-color: #ffffff;
		margin-bottom: 10upx;
	}

	.ulike-box {
		background-color: #ffffff;
	}

	.superhero,
	.trailer,
	.ulike{
		font-size: 24upx;
		font-weight: 600;
		padding: 30upx 20upx 10upx;
	}

	.hot-img,
	.trailer-img,
	.ulike-img{
		width: 40upx;
		height: 40upx;
		margin-right: 10upx;
	}
</style>
