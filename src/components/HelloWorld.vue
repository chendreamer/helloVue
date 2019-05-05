<template>
	 <el-container>
		 <p>{{msg}}</p>
		 <charts></charts>
	 </el-container>
</template>

<script>
	import charts from '@/components/charts'
	
	
export default {
  name: 'HelloWorld',
	components: {
		charts
	},
  data () {
    return {
      msg: 'HelloWorld page',
			isCollapse: true,
			he:'jjj',
			sdsd:{
				color: '#443543',
				fontSize: '88px',
				fontFamily: 'comic sans ms'
			}
    }
  },
	methods:{
		handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
		change:function(){
			this.he = this.he + 'k';
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
