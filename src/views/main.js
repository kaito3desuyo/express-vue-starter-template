//main.js --- コンパイルエントリポイント
import Vue from 'vue';

import App from './app.vue';

window.onload = () => {
	var app = new Vue({
		el: '#app',
		render: h => h(App)
	});
}

