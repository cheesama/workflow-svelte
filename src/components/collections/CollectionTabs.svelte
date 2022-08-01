<script>
	import { currentCollectionName, currentNodes } from '../../stores/nodes';

	import Icon from '@iconify/svelte';

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	let prevCollectionName = '';
	let collectionIndex = 1;

	const collectionFocusStyle = 'bg-yellow-300';

	if ('collections' in $currentNodes) {
	} else {
		// @ts-ignore
		$currentNodes['collections'] = { Home: {} }; //default collection name as 'Home'
		currentCollectionName.set('Home');
	}

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
	function focusOrRemoveCollection(ev) {
		if (ev.target.tagName === 'INPUT') {
			const collectionName = ev.target.value;

			dispatch('changeCollection', {
				collectionName: collectionName
			});

			currentCollectionName.set(collectionName);
		} else if (ev.target.tagName === 'svg') {
			dispatch('removeCollection', {
				collectionName: ev.target.previousElementSibling.value //input tag value
			});

			// @ts-ignore
			//set focused collection as first collection
			currentCollectionName.set(Object.keys($currentNodes['collections'])[0]);
		}
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
		while ('untitled' + collectionIndex in Object.keys($currentNodes['collections'])) {
			collectionIndex += 1;
		}

		// @ts-ignore
		$currentNodes['collections']['untitled' + collectionIndex] = {};

		dispatch('addCollectionToDataFlow', {
			collectionName: 'untitled' + collectionIndex
		});

		currentCollectionName.set('untitled' + collectionIndex);

		collectionIndex += 1;
	}
</script>

<ul>
	{#each Object.keys(// @ts-ignore
		$currentNodes['collections']) as collection}
		<li
			on:dblclick={renameCollectionName}
			on:click={focusOrRemoveCollection}
			class={$currentCollectionName === collection ? collectionFocusStyle : ''}
		>
			<input on:keydown={confirmCollectionName} type="text" bind:value={collection} disabled />
			{#if 'collections' in $currentNodes && Object.keys(// @ts-ignore
					$currentNodes['collections']).length > 1}
				<Icon icon="bi:trash" class="display: inline" />
			{/if}
		</li>
	{/each}
	<li on:click={addCollection}>
		<Icon icon="akar-icons:plus" />
	</li>
</ul>
