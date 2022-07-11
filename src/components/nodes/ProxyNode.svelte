<script>
	import { setContext } from 'svelte';
	import { Icon } from '@smui/button';

	export const type = 'proxy';
	export const input_num = 1;
	export const output_num = 1;

	export let url = '';
	export let method = 'GET';

	export const innerHTML = `
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
	`;

	let node_info = {
		type: type,
		input_num: input_num,
		output_num: output_num,
		data: {
			url: url,
			method: method
		},
		innerHTML: innerHTML
	};

	setContext('proxy', node_info);
	console.log('proxy node info');
	console.log(node_info);

</script>

<div class="proxy-node-style">
	<Icon class="material-icons">route</Icon>
	{type}
</div>

<style>
	.proxy-node-style {
		padding: 6px 8px 6px 16px;
		text-decoration: none;
		font-size: 25px;
		color: #8a7c7c;
		cursor: move;
	}

	.proxy-node-style:hover {
		background-color: #dfcdcd;
	}
</style>
