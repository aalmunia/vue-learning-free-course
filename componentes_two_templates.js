Vue.component('segundo-componente', {
	template: '#mi-plantilla',
	data: function() {
		return {
			nuevoTexto: 'Esto es de la función data del segundoComponente'
		}
	}	
});

// Esto es lo que pone VUE a correr.
// No vale solo con describir el componente
var vm = new Vue({
	el: 'main'
});