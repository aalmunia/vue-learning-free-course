'use strict';

var vm = new Vue({
	el: 'main',
	data: {
		mensaje: 'Cambia este mensaje...'
	},
	methods: {
		cambiarMensaje: function() {
			this.mensaje = 'Esto ha cambiado asín....';
		}
	}
});