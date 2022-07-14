<script>
	import { fade } from 'svelte/transition';

	import { currentNodes } from "../../stores/nodes";

	export let isModalOpen = false;

	export /**
	 * @type {any}
	 */
	let id;
	export /**
	 * @type {any}
	 */
	let port;

	export let name = '';
	export let url = '';
</script>

{#if isModalOpen}
	<div class="backdrop" transition:fade on:dblclick>
		<div class="edit-modal">
			<p>Edting Proxy Node - id : {id}</p>
			name:<input type="name" bind:value={name} /><br />
			URL: <input type="url" bind:value={url} /><br />
			port: <input type="number" bind:value={port} /><br />
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
		max-width: 400px;
		margin: 10% auto;
		text-align: center;
		background: white;
		z-index: 1000;
	}
</style>
