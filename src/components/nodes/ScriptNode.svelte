<script>
	import Icon from '@iconify/svelte';

	export const type = 'script';
	export const input_num = 1;
	export const output_num = 1;

	export let name = '';
	export let code = '';
</script>

<div class="script-node-style">
	<Icon icon="mdi:script-text-outline" />
	{type}
</div>

<style>
	.script-node-style {
		padding: 6px 8px 6px 16px;
		text-decoration: none;
		font-size: 25px;
		color: #663e89;
		cursor: move;
	}

	.script-node-style:hover {
		background-color: #dfcdcd;
	}
</style>
