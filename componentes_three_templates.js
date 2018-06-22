Vue.component('tercer-componente', {
	template: '#mi-plantilla',
	data: function() {
		return {
			nuevoTexto: 'A la tercera....'
		}
	}	
});

// Esto es lo que pone VUE a correr.
// No vale solo con describir el componente
var vm = new Vue({
	el: 'main'
});