<script>
	export let collections = ['Home','test'];

    /**
* @param {any} ev
*/
    function renameCollectionName(ev) {
        console.log('renameCollectionName event');
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
        console.log('confirmCollectionName event');
    }
</script>


<ul>
{#each collections as collection}
    <li on:dblclick={renameCollectionName} on:click={focusCollection}>{collection}</li>
    <input on:keydown={confirmCollectionName} type="text" />
{/each}
</ul>

