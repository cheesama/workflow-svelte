<script>
	import { Icon } from '@smui/button';
	import Textfield from '@smui/textfield';

	import { currentNodes } from '../../stores/nodes';

	export let collection_name = 'untitle';
</script>

<div class="flow-space">
	<div>
		<Icon class="material-icons">save</Icon>
		<Textfield bind:value={collection_name} />
	</div>
</div>

<style>
	.flow-space {
		font-size: 25px;
		display: block;
	}
</style>
