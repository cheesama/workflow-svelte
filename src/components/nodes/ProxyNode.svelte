<script>
	import { Icon } from '@smui/button';

	export const type = 'proxy';
	export const input_num = 1;
	export const output_num = 1;
	
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
