<script>
	import Icon from '@iconify/svelte';

	export const type = 'route';
	export const input_num = 0;
	export const output_num = 1;
</script>

<div class="route-node-style">
	<Icon icon="ic:baseline-route" />
	{type}
</div>

<style>
	.route-node-style {
		padding: 6px 8px 6px 16px;
		text-decoration: none;
		font-size: 25px;
		color: #498899;
		cursor: move;
	}

	.route-node-style:hover {
		background-color: #dfcdcd;
	}
</style>
