Vue.component('cuarto-componente', {
	template: '#mi-plantilla',
	data: function() {
		return {
			nuevoTexto: 'All work and no play makes Alex a dull boy'
		}
	}	
});

// Esto es lo que pone VUE a correr.
// No vale solo con describir el componente
var vm = new Vue({
	el: 'main'
});