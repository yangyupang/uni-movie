<template>
	<view v-if="user" class="user-container">
		<view class="user-control">
			<view class="flex jc-between">
				<view class="">
					头像
				</view>
				<view class="flex a-center" @click="openPopup">
					<image class="user-pic" :src="user.faceImage" mode="" />
					<uni-icons type="forward" color="#ededed" size="30"></uni-icons>
				</view>
			</view>
			<view class="flex jc-between">
				<view class="">
					昵称
				</view>
				<view class="flex a-center" @click="gotoChange('changeNickname')">
					<view>{{user.nickname}}</view>
					<uni-icons type="forward" color="#ededed" size="30"></uni-icons>
				</view>
			</view>
			<view class="flex jc-between">
				<view class="">
					生日
				</view>
				<view class="flex a-center" @click="gotoChange('changeBirthday')">
					<view>{{user.birthday}}</view>
					<uni-icons type="forward" color="#ededed" size="30"></uni-icons>
				</view>
			</view>
			<view class="flex jc-between">
				<view class="">
					性别
				</view>
				<view class="flex a-center" @click="gotoChange('changeSex')">
					<view>{{user.sex===1?'男':user.sex===0?'女':'保密'}}</view>
					<uni-icons type="forward" color="#ededed" size="30"></uni-icons>
				</view>
			</view>
		</view>
		<uni-popup ref="popup" type="bottom">
			<view style="background-color: #FFFFFF;">
				<button type="default" @click="$gotoView(user.faceImage)">查看我的头像</button>
				<button type="default" @click="gotoChange('changePic')">从手机相册中选择</button>
				<button type="default" @click="closePopup">取消</button>
			</view>
		</uni-popup>
		<view class="user-button">
			<button type="default" @click="clear">清理缓存</button>
			<button type="default" @click="exit">退出登录</button>
		</view>
	</view>
</template>

<script>
	import uniIcons from '../../components/uni-ui/uni-icons/uni-icons.vue'
	import uniPopup from "../../components/uni-ui/uni-popup/uni-popup.vue"
	export default {
		name: "",
		components: {
			uniIcons,
			uniPopup
		},
		props: {},
		data() {
			return {
				user: null
			}
		},
		methods: {
			openPopup() {
				this.$refs.popup.open()
			},
			closePopup() {
				this.$refs.popup.close()
			},
			gotoChange(url) {
				this.closePopup()
				uni.navigateTo({
					url: `/pages/${url}/${url}`
				})
			},
			clear() {
				if (uni.getStorageSync('user')) {
					this.user = JSON.parse(uni.getStorageSync('user'))
					uni.showToast({
						title: "缓存清理成功",
						duration: 800
					})
				} else {
					this.user = null
					uni.showToast({
						title: "您的登陆状态失效",
						duration: 800
					})
					setTimeout(() => {
						uni.navigateTo({
							url: "/pages/login/login"
						})
					}, 800)
				}
			},
			exit() {
				uni.showModal({
					title: '提示',
					content: '您确定要退出吗？',
					icon: "none",
					success: res => {
						if (res.confirm) {
							uni.showLoading({
								title: "加载中..."
							})
							uni.request({
								url: this.$api("/user/logout"),
								data: {
									userId: this.user.id
								},
								header: {
									'Content-Type': 'application/x-www-form-urlencoded'
								},
								method: 'POST',
								success: (res) => {
									if (res.data.status === 200) {
										uni.showToast({
											title: res.data.msg,
											duration: 800
										})
										setTimeout(() => {
											uni.removeStorageSync('user')
											uni.switchTab({
												url: "../my/my"
											})
										}, 800)
									} else {
										uni.showToast({
											title: res.data.msg,
											duration: 800
										})
									}
								},
								fail() {},
								complete() {
									uni.hideLoading()
								}
							})
						} else if (res.cancel) {
							uni.showToast({
								title: "您取消了退出",
								duration: 800
							})
						}

					},

				})

			}
		},
		mounted() {

		},
		onLoad() {
			if (uni.getStorageSync('user')) {
				this.user = JSON.parse(uni.getStorageSync('user'))
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
	.user-container {
		.user-control {
			margin: 0 20upx;

			>view {
				height: 90upx;
				align-items: center;
			}
		}
	}

	.user-pic {
		height: 80upx;
		width: 80upx;
	}

	.user-button {
		position: absolute;
		bottom: 0;
		height: 184upx;
		width: 100%;
	}
</style>
