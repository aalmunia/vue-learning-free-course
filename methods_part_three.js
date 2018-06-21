'use strict';
var vm = new Vue({
	el: 'main',
	data: {
		nombres: ['Alejandro', 'Nacho', 'Javi', 'Antonio', 'César'],
		count: 0
	},
	methods: {
		siguiente: function() {
			++this.count;
			this.count = (this.count === this.nombres.length) ? 0 : this.count;
		}
	}
});