<template>
	<view class="actor-container">
		<image @click="$gotoView(item.photo)" class="actor-pic" :src="item.photo" mode=""></image>
		<view class="actor-name txt-hidden">
			{{item.name}}
		</view>
		<view class="actor-actname txt-hidden">
			{{item.role===1?item.actName:`饰演:${item.actName}`}}
		</view>
	</view>
</template>

<script>
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
		}
	}
</script>

<style lang="scss">
	.actor-container{
		width: 120upx;
		height: 240upx;
		margin:0 30upx;
	}
	.actor-pic {
		width: 120upx;
		height: 160upx;
	}

	.actor-name {
		font-size: 24upx;
	}

	.actor-actname {
		font-size: 20upx;
		color: #d1d1d1;
	}
</style>
