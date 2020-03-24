import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.prototype.$api =(url)=>{
	return `https://www.imovietrailer.com/superhero/${url}?qq=2684425594`
}
Vue.prototype.$gotoView = (url) => {
	uni.navigateTo({
		url: `/pages/view/view?url=${url}`
	})
}
App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
