'use strict';

var vm = new Vue({ 
	el: 'main',
	data: {
		mensaje: true
	},
	methods: {
		cambiarEstado: function() {
			this.mensaje = !this.mensaje;
		}
	}
});