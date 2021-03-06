Vue.component('libro', {
	props: ['titulo', 'autor', 'url'],
	template: `<div><h1>{{ titulo }}</h1><br/><h2>{{ autor }}</h2><br/><a :href="url" target="_blank">{{ titulo }}</a></div>`,
	mounted() {
		console.log(this.titulo);
	}
});

var vm = new Vue({
	el: 'main',
	data: {
		elTitulo: 'El señor de los anillos',
		elAutor: 'JRR Tolkien',
		laURL: 'https://es.wikipedia.org/wiki/El_Se%C3%B1or_de_los_Anillos'
	}
});