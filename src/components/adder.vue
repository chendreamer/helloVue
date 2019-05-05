<template>
	<div>
		<slot name="qiaqia"></slot>
		<input type="text" v-model="num" />
		<button @click="add">click me</button>
		<slot name="footer"></slot>
	</div>
</template>

<script>
	export default{
		name:'adder',
		props:{
			base:Number,
			nu:String
		},
		data(){
			return{
				num:this.base
			}
		},
		methods:{
			add(){
				console.log(this);
				this.num++;
			}
		}
	}
</script>

<style>
</style>

//会把外部传来的值绑定到this上，props声明了什么值，才能接收什么值。