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
		<view class="ulike-control a-center flex">
			<view class="">
				<view class="">
					<uni-icons color="#f6ac2d" type="hand-thumbsup" size="20"></uni-icons>
				</view>
				<view class="">
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
		}
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

	.ulike-control {
		text-align: center;
		color: #f6ac2d;
	}
</style>
