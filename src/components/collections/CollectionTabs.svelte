<script>
	import { currentNodes } from '../../stores/nodes';

	import Icon from '@iconify/svelte';

	if ('collections' in $currentNodes) {
	} else {
		// @ts-ignore
		$currentNodes['collections'] = { Home: {} };
	}

	// @ts-ignore
	$: collection_list = Object.keys($currentNodes['collections']);

	// @ts-ignore
	console.log(Object.keys($currentNodes['collections']));

	/**
	 * @param {any} ev
	 */
	function renameCollectionName(ev) {
		ev.target.disabled = false;
	}

	/**
	 * @param {any} ev
	 */
	function focusCollection(ev) {
		console.log('focusCollection event');
	}

	/**
	 * @param {any} ev
	 */
	function confirmCollectionName(ev) {
		if (ev.keyCode === 13)
			//enter
			ev.target.disabled = true;
	}

	function addCollection() {
		// @ts-ignore
		$currentNodes['collections']['untitled' + collection_list.length] = {};

		console.log($currentNodes);
	}
</script>

<ul>
	{#each Object.keys(// @ts-ignore
		$currentNodes['collections']) as collection}
		<li on:dblclick={renameCollectionName}>
			<input
				on:keydown={confirmCollectionName}
				on:click={focusCollection}
				type="text"
				bind:value={collection}
				disabled
			/>
		</li>
	{/each}
	<li on:click={addCollection}>
		<Icon icon="akar-icons:plus" />
	</li>
</ul>
