'use strict';

var vm = new Vue({
	el: 'main',
	data: {
		numero: 0
	},
	methods: {
		sumar: function() {
			++this.numero;
			// No pasa nada por usar jQuery + Vue, ¡¡ son compatibles !!
			$('button').css({
				'background-color': '#FF00FF',
				'color': '#00FF00'
			});
		}
	}
});
