import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Goods from '@/components/Goods'
import Foods from '@/components/Foods'
import train from '@/components/train'

Vue.use(Router)



export default new Router({
	routes: [{
			path: '/',
			name: 'HelloWorld',
			component: HelloWorld
		},
		{
			path: '/goods',
			name: 'goods',
			component: Goods
		},
		{
			path: '/foods',
			name: 'foods',
			component: Foods
		},
		{
			path: '/train',
			name: 'train',
			component: train
		}
	]
})
