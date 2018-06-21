'use strict';

var vm = new Vue({
	el: 'main',
	data: {
		letra: 'A'
	},
	methods: {
		cambiarLetra: function(nuevaLetra) {
			this.letra = nuevaLetra;
		}
	}
});