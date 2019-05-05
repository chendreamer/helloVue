<template>
	<div style="height:100%">
		<el-container style="width: 100%;height:100%">
			<el-row style="width: 100%;height:100%;line-height: 60px;">
				<el-col :xs="16" :sm="17" :md="18" :lg="19" :xl="20" style="height:100%">
					<router-link :to="home"><div class="grid-content bg-purple" style="height:100%"><i class="el-icon-goods"></i>智能管家</div></router-link>
				</el-col>
				<el-col :xs="8" :sm="7" :md="6" :lg="5" :xl="4" style="height:100%">
					<div class="grid-content bg-purple-light" style="height:100%;text-align: center;">
						<el-popover placement="bottom" width="200" trigger="click">
							<el-row>
								<el-col :span="24" style="text-align: center;">
									<img src="../assets/logo.png" />
									<el-button type="primary" style="margin: 0 auto;" @click="quitConfirm">LogOut</el-button>
								</el-col>
							</el-row>
							<el-button slot="reference" type="text">马未都</el-button>
						</el-popover>
					</div>
				</el-col>
			</el-row>
		</el-container>
	</div>
</template>

<script>
	export default {
		name: 'headerPart',
		data() {
			return {
              home:'/'
			}
		},
		methods: {
			quitConfirm() {
				this.$confirm('此操作将退出系统?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$message({
						type: 'success',
						message: '退出成功!'
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消'
					});
				});
			},
		}

	}
</script>

<style>
	.bg-purple {
		background: #d3dce6;
	}

	.bg-purple-light {
		background: #e5e9f2;
	}
</style>
