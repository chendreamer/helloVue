<template>
	<div id="app">
		<el-header class="container" style="width:100%;height:60px;">
			<headerPart></headerPart>
		</el-header>
		<fzf v-if="invalidRoute" style="position:absolute;top:60px;bottom:0;left:0;right:0;">404</fzf>
		<el-container style="position:absolute;top:60px;bottom:0;left:0;right:0;" v-else>
			<el-aside>
				<el-menu :default-active="currentIndex" class="el-menu-vertical-demo"
				 background-color="#393D49" text-color="#fff" style="height:100%;" active-text-color="#ffd04b"
				 @select="handleSelect">
					<navMenu :navMenus="menuArray"></navMenu>
				</el-menu>
			</el-aside>
			<el-main>
				<router-view />
			</el-main>
		</el-container>
	</div>
</template>

<script>
	import navMenu from '@/components/navMenu'
	import headerPart from '@/components/header'
	import fzf from '@/components/fzf'
	import router from './router'

	export default {
		name: 'App',
		components: {
			navMenu,
			headerPart,
			fzf
		},
		data() {
			return {
				router: true,
				isCollapse: true,
				currentIndex: '1-1',
				display:'none',
				menuArray: [{
						entity: {
							id: 1,
							parentMenuId: 0,
							name: "systemManage",
							index: "1",
							icon: "el-icon-message\r\n",
							alias: "系统管理",
							state: "ENABLE",
							sort: 0,
							value: null,
							type: "NONE",
							discription: "用于系统管理的菜单",
							createUserId: 1
						},
						children: [{
							entity: {
								id: 3,
								parentMenuId: 1,
								name: "authManage",
								index: "1-1",
								icon: "el-icon-loading",
								alias: "权限管理",
								state: "ENABLE",
								sort: 0,
								value: "/",
								type: "LINK",
								discription: "用于权限管理的菜单",
								createUserId: 1
							},
							children: null
						}]
					},
					{
						entity: {
							id: 6,
							parentMenuId: 0,
							name: "userManage",
							index: "2",
							icon: "el-icon-news",
							alias: "用户管理",
							state: "ENABLE",
							sort: 1,
							value: null,
							type: "NONE",
							discription: "用于用户管理的菜单",
							createUserId: 1
						},
						children: [{
								entity: {
									id: 7,
									parentMenuId: 6,
									name: "accountManage",
									index: "2-1",
									icon: "el-icon-phone-outline\r\n",
									alias: "帐号管理",
									state: "ENABLE",
									sort: 0,
									value: "",
									type: "NONE",
									discription: "用于帐号管理的菜单",
									createUserId: 1
								},
								children: [{
									entity: {
										id: 14,
										parentMenuId: 7,
										name: "emailManage",
										index: "2-1-1",
										icon: "el-icon-sold-out\r\n",
										alias: "邮箱管理",
										state: "ENABLE",
										sort: 0,
										value: "/goods",
										type: "LINK",
										discription: "用于邮箱管理的菜单",
										createUserId: 1
									},
									children: null
								}]
							},
							{
								entity: {
									id: 8,
									parentMenuId: 6,
									name: "integralManage",
									index: "2-2",
									icon: "el-icon-picture",
									alias: "积分管理",
									state: "ENABLE",
									sort: 1,
									value: "/foods",
									type: "LINK",
									discription: "用于积分管理的菜单",
									createUserId: 1
								},
								children: null
							}
						]
					},
					{
						entity: {
							id: 9,
							parentMenuId: 0,
							name: "contentManage",
							index: "3",
							icon: "el-icon-rank",
							alias: "内容管理",
							state: "ENABLE",
							sort: 2,
							value: null,
							type: "NONE",
							discription: "用于内容管理的菜单",
							createUserId: 1
						},
						children: [{
							entity: {
								id: 10,
								parentMenuId: 9,
								name: "classifyManage",
								index: "3-1",
								icon: "el-icon-printer",
								alias: "分类管理",
								state: "ENABLE",
								sort: 0,
								value: "/train",
								type: "LINK",
								discription: "用于分类管理的菜单",
								createUserId: 1
							},
							children: null
						}]
					}
				]
			}
		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			},
			getIndex(array) {
				for (var i = 0; i < array.length; i++) {
					if (array[i]['entity']['type'] !== 'LINK') {
						if (array[i]['children']) {
							this.getIndex(array[i]['children']);
						}
					} else {
						if (array[i]['entity']['value'].toLowerCase() == this.$route.path) {
							this.currentIndex = array[i]['entity']['index'];
							return;
						}
					}
				}
			}
		},
		computed: {
			invalidRoute() {
				if (this.$route.matched && this.$route.matched.length !== 0) {
					this.getIndex(this.menuArray);
				}
				return !this.$route.matched || this.$route.matched.length === 0;
			}
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		height: 100%;
	}
</style>
