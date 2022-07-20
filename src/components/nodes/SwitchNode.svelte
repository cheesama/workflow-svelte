<script>
	import Icon from '@iconify/svelte';

	export const type = 'switch';
	export const input_num = 1;
</script>

<div class="script-node-style">
	<Icon icon="icon-park:branch-one" />
	{type}
</div>

<style>
	.script-node-style {
		padding: 6px 8px 6px 16px;
		text-decoration: none;
		font-size: 25px;
		color: #355266;
		cursor: move;
	}

	.script-node-style:hover {
		background-color: #dfcdcd;
	}
</style>
