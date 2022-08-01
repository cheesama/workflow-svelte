import { writable, readable } from 'svelte/store';

export const currentNodes = writable({});
export const editNodeId = writable('');
export const currentCollectionName = writable('');

export const node_type = readable({
	proxy: {
		type: 'proxy',
		input_num: 1,
		output_num: 1,
		data: {
			name: '',
			url: '',
			method: 'get',
			port: 0
		},
		innerHTML: `
		<div>
			<div class="title-box">
				<span class="iconify inline-block" data-icon="carbon:server-proxy"></span>
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
			method: 'get'
		},
		innerHTML: `
		<div>
			<div class="title-box">
				<span class="iconify inline-block" data-icon="ic:baseline-route"></span>
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
				<span class="iconify inline-block" data-icon="mdi:script-text-outline"></span>
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
			script: ''
		},
		innerHTML: `
		<div>
			<div class="title-box">
				<span class="iconify inline-block" data-icon="icon-park:branch-one"></span>
				Switch
			</div>
		</div>
		`
	}
});
