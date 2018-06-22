'use strict';

var vm = new Vue({
	el: '#main',
	data: {
		laURL: '',
		elTitulo: '',
		videoActivo: '',
		mostrar: false,
		videos: []
	},
	methods: {
		showTitulo: function() {
			if(this.laURL !== '') {
				this.mostrar = !this.mostrar;
				setTimeout(function() {
					document.getElementById("ttl").focus()
				}, 100);
			}
		},
		addDatos: function() {
			if(this.elTitulo !== '') {
				this.mostrar = !this.mostrar;
				this.videos.push({
					url: this.laURL,
					titulo: this.elTitulo,
					activo: false
				});
				this.laURL = this.elTitulo = '';
			}
		}				
	}
});