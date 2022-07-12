import { writable, readable } from 'svelte/store';

export const currentNodes = writable({}, () => {
	console.log('there are some tracking nodes!');
	return () => {
		console.log('there are no tracking nodes ...');
	};
});

export const node_type = readable({
	'proxy': {
		'type': 'proxy',
		'input_num': 1,
		'output_num': 1,
		'data': {
			'url': '',
			'method': 'GET'
		},
		'innerHTML': `
		<div>
			<div class="title-box">
				<Icon class="material-icons">route</Icon>
				Proxy
			</div>
			<div class="box">
				<input type="text" df-url placeholder="URL"><br>
				<p>select method</p>
				<select df-method>
					<option value="get">GET</option>
					<option value="post">POST</option>
					<option value="put">PUT</option>
					<option value="patch">PATCH</option>
					<option value="delete">DELETE</option>
				</select>
			</div>
		</div>
		`
	},
	'route': {
		'type': 'route',
		'input_num': 0,
		'output_num': 1,
		'data': {
			'url': '',
			'method': 'GET'
		},
		'innerHTML': `
		<div>
			<div class="title-box">
				<Icon class="material-icons">router</Icon>
				Route
			</div>
			<div class="box">
				<input type="text" df-url placeholder="URL"><br>
				<p>select method</p>
				<select df-method>
					<option value="get">GET</option>
					<option value="post">POST</option>
					<option value="put">PUT</option>
					<option value="patch">PATCH</option>
					<option value="delete">DELETE</option>
				</select>
			</div>
		</div>
		`
	},
	'script': {
		'type': 'script',
		'input_num': 1,
		'output_num': 1,
		'data': {
			'script': ''
		},
		'innerHTML': `
		<div>
			<div class="title-box">
				<Icon class="material-icons">description</Icon>
				Script
			</div>
			<div class="box">
				<textarea rows="5" cols="60" df-script placeholder="script"><br>
			</div>
		</div>
		`
	}
})