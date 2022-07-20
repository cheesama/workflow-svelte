<script>
	import Icon from '@iconify/svelte';

	export const type = 'script';
	export const input_num = 1;
	export const output_num = 1;
</script>

<div class="script-node-style">
	<Icon icon="fluent:document-javascript-24-regular" />
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
