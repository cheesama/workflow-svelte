<script>
	export let isModalOpen = false;

	export /**
	 * @type {any}
	 */
	let id;

	export let name = '';
	export let endpoint = '';
</script>

{#if isModalOpen}
	<div class="backdrop" on:dblclick>
		<div class="edit-modal">
			<p>Edting Route Node - id : {id}</p>
			name:<input type="name" bind:value={name} /><br />
			endpoint: <input type="endpoint" bind:value={endpoint} /><br />
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
