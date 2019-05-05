<template>
	<div>
		<p>{{msg}}</p>
	    <p>{{yu}}</p>	
	</div>
</template>

<script>
	export default{
		name:'componentone',
		props:['yu'],
		data(){
			return{
				msg:'qwertyu'
			}
		}
	}
</script>

<style>
</style>
