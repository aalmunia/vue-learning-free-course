'use strict';

var vm = new Vue({
	el: '#misTareas',
	data: {
		nuevaTarea: '',
		tareas: []
	},
	methods: {
		agregarTarea: function() {
			if(this.nuevaTarea !== '') {
				this.tareas.push({ text: this.nuevaTarea, completada: false });
			}
			this.nuevaTarea = '';
		},
		limpiarTareas: function() {			
			this.tareas = [];
		},
		completarTarea: function(index) {
			this.tareas[index].completada = true;
		},
		descompletarTarea: function(index) {
			this.tareas[index].completada = false;
		}
	}
});