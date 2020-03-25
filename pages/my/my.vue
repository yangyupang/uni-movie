<template>
	<view class="">
		<view class="my-bg flex a-center">
			<view class="my-login flex a-center" @click="gotoLogin" v-if="!isShow">
				<image class="my-pic" src="../../static/images/head-portrait.jpg" mode="" />
				<view class="">
					注册/登录
				</view>
			</view>
			<view class="flex" v-else>
				<view class="is-login flex a-center">
					<image class="my-pic" :src="user.faceImage" mode="" />
					<view class="">
						{{user.nickname}}
					</view>
				</view>
				<view class="my-set">
					<uni-icons type="gear-filled" size="26" @click="goToUser"></uni-icons>
				</view>
			</view>

		</view>

	</view>
</template>

<script>
	import uniIcons from '../../components/uni-ui/uni-icons/uni-icons.vue'
	export default {
		name: "",
		components: {
			uniIcons
		},
		props: {},
		data() {
			return {
				user: null,
				isShow:false
			}
		},
		methods: {
			gotoLogin() {
				uni.navigateTo({
					url: "/pages/login/login"
				})
			},
			goToUser(){
				uni.navigateTo({
					url: "/pages/user/user"
				})
			}
		},
		mounted() {

		},
		onLoad() {

		},
		onShow() {
			if (uni.getStorageSync('user') && uni.getStorageSync('user') !== null) {
				this.isShow = true
				this.user = JSON.parse(uni.getStorageSync('user'))
				// console.log(this.user);
			}else {
				this.isShow = false
			}
		},
		filters: {

		},
		computed: {

		},
		watch: {

		},
		directives: {

		}
	}
</script>

<style scoped lang="scss">
	.my-bg {
		position: relative;
		width: 100%;
		height: 300upx;
		background: url(../../static/images/login.jpg);
	}

	.my-pic {
		width: 100upx;
		height: 100upx;
		border-radius: 50%;
		margin-right: 30upx;
	}

	.my-login {
		position: absolute;
		left: 50upx;
		font-size: 40upx;
		font-weight: 600;
	}

	.is-login {
		position: relative;
		left: 50upx;
		font-size: 40upx;
		font-weight: 600;
	}

	.my-set {
		position: absolute;
		right: 40upx;
		top: 40upx;
	}
</style>
