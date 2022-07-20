import { writable, readable } from 'svelte/store';

export const currentNodes = writable({}, () => {
	console.log('there are some tracking nodes!'); //there is/are subscription target more than 0
	return () => {
		console.log('there are no tracking nodes ...'); //there is no subscription target
	};
});

export const editNodeId = writable('');

export const node_type = readable({
	proxy: {
		type: 'proxy',
		input_num: 1,
		output_num: 1,
		data: {
			name: '',
			url: '',
			method: 'GET',
			port: 0
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
			name: '',
			endpoint: '',
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
			name: '',
			script: ''
		},
		innerHTML: `
		<div>
			<div class="title-box">
				<span class="iconify" data-icon="fluent:document-javascript-24-regular"></span>
				Script
			</div>
		</div>
		`
	},
	switch: {
		type: 'switch',
		input_num: 1,
		output_num: 1,
		data: {
			name: '',
			conditions: []
		},
		innerHTML: `
		<div>
			<div class="title-box">
				<span class="iconify" data-icon="icon-park:branch-one"></span>
				Switch
			</div>
		</div>
		`
	}
});
