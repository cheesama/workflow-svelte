import { writable, readable } from 'svelte/store';

export const currentNodes = writable({}, () => {
	console.log('there are some tracking nodes!'); //there is/are subscription target more than 0
	return () => {
		console.log('there are no tracking nodes ...'); //there is no subscription target
	};
});

export const currentNode = writable({});

export const node_type = readable({
	proxy: {
		type: 'proxy',
		input_num: 1,
		output_num: 1,
		data: {
			url: '',
			method: 'GET'
		},
		innerHTML: `
		<div>
			<div class="title-box">
				<span class="iconify" data-icon="carbon:server-proxy"></span>
				Proxy
			</div>
		</div>
		`
	},
	route: {
		type: 'route',
		input_num: 0,
		output_num: 1,
		data: {
			url: '',
			method: 'GET'
		},
		innerHTML: `
		<div>
			<div class="title-box">
				<span class="iconify" data-icon="ic:baseline-route"></span>
				Route
			</div>
		</div>
		`
	},
	script: {
		type: 'script',
		input_num: 1,
		output_num: 1,
		data: {
			script: ''
		},
		innerHTML: `
		<div>
			<div class="title-box">
				<span class="iconify" data-icon="mdi:script-text-outline"></span>
				Script
			</div>
		</div>
		`
	}
});
