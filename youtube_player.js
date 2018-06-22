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
	// THIS IS LIFECYCLE METHOD
	created() {
		let videosCache = JSON.parse(localStorage.getItem('vue_youtube_app_data'));
		this.videos = (videosCache !== undefined && videosCache !== null) ? videosCache : [];
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
				localStorage.setItem('vue_youtube_app_data', JSON.stringify(this.videos));
				this.laURL = this.elTitulo = '';
			}
		},
		playVideo: function(video) {
			let laURL = video.url;
			let nuevaURL = laURL.replace('watch?v=', 'embed/');
			this.videoActivo = nuevaURL + '?autoplay=1';
		},
		clearVideosCache: function() {
			localStorage.removeItem('vue_youtube_app_data');
			this.videos = [];
			this.videoActivo = '';
		}
	}
});