export { default as example } from './example.mjs';

function print_hello() {
	console.log('hello world');
}

window.addEventListener('load', function () {
	print_hello();
});