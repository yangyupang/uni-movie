<template>
	<view class="ulike-container flex jc-around">
		<image class="ulike-pic" :src="item.cover" mode=""></image>
		<view class="ulike-info">
			<view class="ulike-name txt-hidden">{{item.name}}</view>
			<view class="ulike-star">
				<uni-rate size='10' :value="parseInt(item.score/2)" />
			</view>
			<view class="ulike-des">{{item.basicInfo}}</view>
			<view class="ulike-des">{{item.releaseDate}}</view>
		</view>
		<view class="vertical-bar"></view>
		<view class="ulike-control a-center flex">
			<view class="" @click="giveALike">
				<view class="">
					<uni-icons color="#f6ac2d" type="hand-thumbsup" size="20"></uni-icons>
				</view>
				<view class="ulike-praise">
					赞一下
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcons from "../../uni-ui/uni-icons/uni-icons.vue"
	import uniRate from '../../uni-ui/uni-rate/uni-rate.vue'
	export default {
		props: {
			item: {
				type: Object,
				default: () => {}
			}
		},
		data() {
			return {

			};
		},
		components: {
			uniRate,
			uniIcons
		},
		methods: {
		giveALike(){
			// console.log("点赞");
			uni.showToast({
			    title: '赞',
			    duration: 2000,
				image:'/static/images/giveALike.png'
			});
		}
		},
	}
</script>

<style lang="scss">
	.ulike-container {
		margin: 32upx 0;
	}

	.ulike-pic {
		height: 240upx;
		width: 180upx;
	}

	.ulike-name {
		font-size: 32upx;
		height: 40upx;
	}

	.ulike-star {
		height: 30upx;
		margin-top: 20upx;
	}

	.ulike-info {
		width: 320upx;
	}

	.ulike-des {
		color: gray;
		font-size: 24upx;
	}
.vertical-bar{
	height: 240upx;
	border-left: 6upx dashed #DBDBDA;
}
	.ulike-control {
		text-align: center;
		color: #f6ac2d;
	}
	.ulike-praise{
		font-size: 30upx;
	}
</style>
