<script>
	import { currentNodes, editNodeId } from '../../stores/nodes';
	
	import { fade } from 'svelte/transition';

	export let isModalOpen = false;

</script>

{#if isModalOpen && $editNodeId}
	<div class="backdrop" transition:fade on:dblclick>
		<div class="edit-modal">
			<p>Edting Proxy Node - id : {$editNodeId}</p>
			name:<input type="name" bind:value={
// @ts-ignore
			$currentNodes['collections']['Home']['data'][$editNodeId]['data']['name']} /><br />
			URL: <input type="url" bind:value={
// @ts-ignore
			$currentNodes['collections']['Home']['data'][$editNodeId]['data']['url']} /><br />
			port: <input type="number" bind:value={
// @ts-ignore
			$currentNodes['collections']['Home']['data'][$editNodeId]['data']['port']} /><br />
		</div>
	</div>
{/if}

<style>
	.backdrop {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.8);
		z-index: 999;
	}

	.edit-modal {
		padding: 10px;
		border-radius: 10px;
		max-width: 600px;
		margin: 10% auto;
		text-align: center;
		background: white;
		z-index: 1000;
	}
</style>
