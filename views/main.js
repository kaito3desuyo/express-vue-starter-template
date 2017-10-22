//var Vue = require('vue');
//var app = require('./app.vue');

//window.addEventListener('load', function(){
//	new Vue({
//		el: '#app',
//		render: function(createElement) {
//			return createElement(app);
//		}
//	})
//})

import Vue from 'vue'
import App from './app'
new Vue({
    el: '#app',
    components: { App }
});