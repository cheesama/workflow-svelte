import { writable } from 'svelte/store';

export let currentNodes = writable({}, () => {
	console.log('there are some tracking nodes!');
	return () => {
		console.log('there are no tracking nodes ...');
	};
});
