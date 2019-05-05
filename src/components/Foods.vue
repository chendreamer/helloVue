<template>
	<div>
		<h1>{{msg}}</h1>
		<el-button type="primary" :plain="true" @click="open">消息提示</el-button>
		<el-button type="primary" @click="openMessageBox">点击打开 Message Box</el-button>
		<el-switch style="display: block" v-model="value4" active-color="#13ce66" inactive-color="#ff4949" active-text="on"
		 inactive-text="off" @change="showValue4">
		</el-switch>
		<el-time-picker is-range v-model="value5" range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间"
		 placeholder="选择时间范围" @change="showValue5">
		</el-time-picker>


		<el-form ref="form" :model="form" label-width="80px">
			<el-form-item label="活动名称">
				<el-input v-model="form.name"></el-input>
			</el-form-item>
			<el-form-item label="活动区域">
				<el-select v-model="form.region" placeholder="请选择活动区域">
					<el-option label="区域一" value="shanghai"></el-option>
					<el-option label="区域二" value="beijing"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="活动时间">
				<el-col :span="11">
					<el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
				</el-col>
				<el-col class="line" :span="2">-</el-col>
				<el-col :span="11">
					<el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
				</el-col>
			</el-form-item>
			<el-form-item label="即时配送">
				<el-switch v-model="form.delivery"></el-switch>
			</el-form-item>
			<el-form-item label="活动性质">
				<el-checkbox-group v-model="form.type">
					<el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
					<el-checkbox label="地推活动" name="type"></el-checkbox>
					<el-checkbox label="线下主题活动" name="type"></el-checkbox>
					<el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
				</el-checkbox-group>
			</el-form-item>
			<el-form-item label="特殊资源">
				<el-radio-group v-model="form.resource">
					<el-radio label="线上品牌商赞助"></el-radio>
					<el-radio label="线下场地免费"></el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="活动形式">
				<el-input type="textarea" v-model="form.desc"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit">立即创建</el-button>
				<el-button>取消</el-button>
			</el-form-item>
		</el-form>


		<el-popover placement="top" width="160" v-model="visible2">
			<p>这是一段内容这是一段内容确定删除吗？</p>
			<div style="text-align: right; margin: 0">
				<el-button size="mini" type="text" @click="visible2 = false">取消</el-button>
				<el-button type="primary" size="mini" @click="visible2 = false">确定</el-button>
			</div>
			<el-button slot="reference">删除</el-button>
		</el-popover>


		<el-steps :active="4" align-center>
			<el-step title="步骤1" description="Book One IntroductionSpecial Introduction By Hon. John T. Morgan In the eleven years that separated the"></el-step>
			<el-step title="步骤2" description="Those liberties had been wrung from reluctant monarchs in many contests"></el-step>
			<el-step title="步骤3" description="his misgivings as to this power of self-preservation would"></el-step>
			<el-step title="步骤4" description="studying the methods of local"></el-step>
			<el-step title="步骤5" description="studying the methods of local okokok"></el-step>
		</el-steps>

		<el-tabs :tab-position="tabPosition" style="height: 200px;">
			<el-tab-pane label="用户管理">用户管理二二热</el-tab-pane>
			<el-tab-pane label="配置管理">配置管理545445</el-tab-pane>
			<el-tab-pane label="角色管理">
				<el-input></el-input>
			</el-tab-pane>
			<el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
		</el-tabs>


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
		
		<el-progress type="circle" :percentage="percentage" color="#8e71c7" :width="50"></el-progress>
	</div>

</template>

<script>
	export default {
		name: 'Foods',
		data() {
			return {
				msg: 'hello！Here is foods page!!!!!!!!!!！！！！！',
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
