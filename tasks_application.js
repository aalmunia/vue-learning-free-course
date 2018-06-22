'use strict';

var vm = new Vue({
	el: '#misTareas',
	data: {
		nuevaTarea: '',
		tareas: []
	},
	methods: {
		agregarTarea: function() {
			console.log(arguments);
			if(this.nuevaTarea !== '') {
				this.tareas.push({ text: this.nuevaTarea, completada: false });
			}
			this.nuevaTarea = '';
		},
		limpiarTareas: function() {			
			this.tareas = [];
		},
		completarTarea: function(index) {
			this.tareas[index].completada = !this.tareas[index].completada;
		}
	}
});