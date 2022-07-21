<script>
	import { currentNodes } from '../../stores/nodes';

	import Icon from '@iconify/svelte';

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	let prevCollectionName = '';

	if ('collections' in $currentNodes) {
	} else {
		// @ts-ignore
		$currentNodes['collections'] = { Home: {} };
	}

	// @ts-ignore
	$: collection_list = Object.keys($currentNodes['collections']);

	/**
	 * @param {any} ev
	 */
	function renameCollectionName(ev) {
		ev.target.disabled = false;
		prevCollectionName = ev.target.value;
	}

	/**
	 * @param {any} ev
	 */
	function focusCollection(ev) {
		const collectionName =
			ev.target.tagName === 'INPUT' ? ev.target.value : ev.target.querySelector('input').value;

		dispatch('changeCollection', {
			collectionName: collectionName
		});
	}

	/**
	 * @param {any} ev
	 */
	function confirmCollectionName(ev) {
		if (ev.keyCode === 13) {
			//enter
			ev.target.disabled = true;
			dispatch('renameCollection', {
				prevCollectionName: prevCollectionName,
				currentCollectionName: ev.target.value
			});
		} else if (ev.keyCode === 27) {
			//esc
			ev.target.disabled = true;
			ev.target.value = prevCollectionName;
		}
	}

	function addCollection() {
		// @ts-ignore
		$currentNodes['collections']['untitled' + collection_list.length] = {};

		dispatch('addCollectionToDataFlow', {
			collectionName: 'untitled' + collection_list.length
		});
	}
</script>

<ul>
	{#each Object.keys(// @ts-ignore
		$currentNodes['collections']) as collection}
		<li on:dblclick={renameCollectionName} on:click={focusCollection}>
			<input on:keydown={confirmCollectionName} type="text" bind:value={collection} disabled />
		</li>
	{/each}
	<li on:click={addCollection}>
		<Icon icon="akar-icons:plus" />
	</li>
</ul>
