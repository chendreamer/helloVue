<template>
	<div>
		<h1>{{msg}}</h1>
		<el-carousel height="150px" arrow="always">
			<el-carousel-item style="text-align: center;">
				<img src="../assets/10008.png" />
			</el-carousel-item>
			<el-carousel-item  style="text-align: center;">
				<img src="../assets/10009.png" />
			</el-carousel-item>
			<el-carousel-item  style="text-align: center;">
				<img src="../assets/disconnect.jpg" />
			</el-carousel-item>
			<el-carousel-item  style="text-align: center;">
				<img src="../assets/logo.png" />
			</el-carousel-item>
		</el-carousel>
	</div>

</template>

<script>
	export default {
		name: 'Train',
		data() {
			return {
				msg: 'hello！Here is Train page!!!!!!!!!!！！！！！',
				value4: true,
				value5: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				visible2: false,
				tabPosition: 'top',
				percentage:0
			}
		},
		methods: {
			open() {
				this.$message('这是一条消息提示');
			},
			openMessageBox() {
				this.$alert('这是一段内容', '标题名称', {
					confirmButtonText: '确定',
					callback: action => {
						if (action == 'confirm') {
							this.$message({
								type: 'info',
								message: `ok!!!!!!`
							});
						} else {
							this.$message({
								type: 'warning',
								message: `oh no!!!!!!!`
							});
						}

					}
				});
			},
			showValue4() {
				console.log(this.value4);
			},
			showValue5() {
				console.log(this.value5[0]);
			},

			onSubmit() {
				console.log('submit!');
			}
		},
		mounted(){
			var  interval= setInterval(()=>{
			    if(this.percentage >= 100){
					clearInterval(interval);
					return;
				}
				this.percentage++;
			},100);
		}
	}
</script>

<style>
	
</style>
