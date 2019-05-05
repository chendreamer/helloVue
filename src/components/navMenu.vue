<template>
	<div>
		<label v-for="(navMenu,index) in navMenus" :key="index">
			<router-link v-if="navMenu.children==null&&navMenu.entity&&navMenu.entity.state==='ENABLE'" :key="navMenu.entity.id"
			 :data="navMenu" :route="navMenu.entity.value" :to="navMenu.entity.value">
				<el-menu-item :index="navMenu.entity.index" :title="navMenu.entity.discription">
					<i :class="navMenu.entity.icon"></i>
					<span slot="title">{{navMenu.entity.alias}}</span>
				</el-menu-item>
			</router-link>

			<el-submenu v-if="navMenu.children&&navMenu.entity&&navMenu.entity.state==='ENABLE'" :key="navMenu.entity.id" :data="navMenu"
			 :index="navMenu.entity.index" :title="navMenu.entity.discription">
				<template slot="title">
					<i :class="navMenu.entity.icon"></i>
					<span> {{navMenu.entity.alias}}</span>
				</template>
				<navMenu :navMenus="navMenu.children"></navMenu>
			</el-submenu>
		</label>
	</div>
</template>

<script>
	export default {
		name: 'navMenu',
		props: ['navMenus'],
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	a {
		text-decoration: none;
	}
	
</style>
