<template>
	<div>
		<p>{{msg}}</p>
		<input type="text" v-model="counter" />

		<button v-on:click="getData">click me</button>
		<d-player :options="options" @play="play" ref="player"> </d-player>
			adder1:<adder :base="2" :nu="qwe">
				<p slot="qiaqia">恰恰</p>
			</adder>
			adder2:<adder :base="13" :nu="ttt">
				<p slot="footer">恰恰恰恰恰</p>
			</adder>
		<componentone :yu="yu"></componentone>
	</div>
</template>

<script>
	import axios from 'axios'
	import VueDPlayer from '@/components/VueDPlayer'
	import adder from '@/components/adder'
	import componentone from '@/components/compone'

	export default {
		name: 'Goods',
		components: {
			VueDPlayer,
			adder,
			componentone
		},
		data() {
			return {
				yu:'6677',
				options: {
					video: {
						url: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
						pic: 'http://static.smartisanos.cn/pr/img/video/video_03_cc87ce5bdb.jpg'
					},
					 subtitle: [{
                        url: 'http://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/subtitles/fra/fileSequence0.webvtt',
						type: 'webvtt'
                    },{
                        url: 'http://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/subtitles/spa/fileSequence0.webvtt',
						type: 'webvtt'
                    }],
					autoplay: false,
					contextmenu: [{
						text: 'GitHub',
						link: 'https://github.com/MoePlayer/vue-dplayer'
					}]
				},
				player: null,
			    msg: 'hello！Here is goods page!!!!!!!!!!!!',
				counter: 0,
				qwe: 'qqq',
				ttt: 'wwww'
		}
	},
	methods: {
			getData: function() {
				this.counter++;

				console.log(this);
				// 				var ajax = new XMLHttpRequest();
				// 				ajax.open('GET', 'http://127.0.0.1:8080/lala');
				// 				ajax.send();
				// 				ajax.onreadystatechange = function(xml) {
				// 					if (ajax.readyState == 4 && ajax.status == 200) {
				// 						//步骤五 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的
				// 						console.log(xml.currentTarget.responseText); //输入相应的内容
				// 					}
				// 				}


				// 								axios.get('http://127.0.0.1:3000/lala',{withCredentials:true}).then(function(response) {
				// 										console.log(response);
				// 									})
				// 									.catch(function(error) {
				// 										console.log(error);
				// 									});


				axios.get('http://office.theonecraft.com:22280/navigation?module=video&lang=en')
					.then(function(response) {
						console.log(response.data);
					})
					.catch(function(error) {
						console.log(error);
					});
			},
			 play() {
			  console.log('play callback')
			}
		}
	}
</script>

<style>

</style>
//会把components的内容绑到$children上
