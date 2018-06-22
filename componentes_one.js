'use strict';

Vue.component('miComponente', {
	template: `
	<div>
		<h1>Sintaxis de backtick</h1>
		<p>Nos permite usar múltiples líneas</p>
		<p>Pero, al igual que ReactJS, tiene que estar encapsulado en un nodo DOM.</p>
		<p>Que envuelva todo el código del template (Root DOM node)</p>
		<p>¿A que si?</p>
		<p>Poz claro</p>
		<p><b>{{ nuevoTexto }}</b></p>
	</div>`,
	data: function() {
		return {
			nuevoTexto: 'Esto está dentro de data (data como fn)'
		}
	}
});

var vm = new Vue({
	el: 'main'
});