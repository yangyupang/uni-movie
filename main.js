import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.prototype.$api =(url)=>{
	return `https://www.imovietrailer.com/superhero/${url}?qq=2684425594`
}
App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
