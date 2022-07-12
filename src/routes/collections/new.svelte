<script>
	import { Icon } from '@smui/button';

	export let collection_name = 'untitle';
</script>

<ul>
	<li>collection name: </li>
	<input bind:value={collection_name}>
	<Icon class="material-icons">save</Icon>
</ul>
