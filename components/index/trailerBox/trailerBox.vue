<template>
	<view class="flex flex-wrap jc-around">
		<video :id="item.id" class="player-container" v-for="item in trailerList" :key="item.id" @play="onPlayVideo(item.id)"
		 :poster="item.poster" :src="item.trailer" controls></video>
	</view>
</template>

<script>
	export default {
		name: "",
		components: {

		},
		props: {
			trailerList: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {
				videoContext: {}
			}
		},
		methods: {
			onPlayVideo(itemId) {
				this.trailerList.map(item =>{
					if(item.id !== itemId){
						uni.createVideoContext(item.id).pause()
					}
				})
				// 	for (let i = 0; i < this.trailerList.length; i++) {
				// 		let id = this.trailerList[i].id;
				// 		this.videoContext[id] = uni.createVideoContext(id);
				// 	}
				
				// for (let i = 0; i < this.trailerList.length; i++) {
				// 	let _id = this.trailerList[i].id;
				// 	if (_id != itemId) {
				// 		this.videoContext[_id].pause()
				// 	}
				// }
			}
		},
		mounted() {

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
	.player-container {
		width: 340upx;
		height: 300upx;
		background-color: black;
		margin-bottom: 20upx;
	}
</style>
