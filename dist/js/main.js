/*! project-name v0.0.1 | (c) 2021 Siphosenkosi Ndhlovu | MIT License | https://github.com/siphosenkosindhlovu/gulp-boilerplate.git */
document.addEventListener('click', (function (event) {
	if (!event.target.matches('#click-me')) return;
	alert('You clicked me!');
}), false);