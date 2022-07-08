<script>
    import { Icon } from '@smui/button';
    import Textfield from '@smui/textfield';
    import Svelvet from "svelvet";

    export let collection_name = 'untitle'

    const initialNodes = [
	  {
	    id: 1,
	    position: { x: 50, y: 50 },
	    data: { label: "Input Node" },
	    width: 175,
	    height: 40,
	    bgColor: "white",
        type: "test"
	  },
	  {
	    id: 2,
	    position: { x: 100, y: 150 },
	    data: { label: "Default Node" },
	    width: 175,
	    height: 40,
	    bgColor: "white"
	  },
	  {
	    id: 3,
	    position: { x: 150, y: 250 },
	    data: { label: "Output Node" },
	    width: 175,
	    height: 40,
	    bgColor: "white"
	  }
	];

	const initialEdges = [
	  { id: "e1-2", source: 1, target: 2, label: "edge label" },
	  { id: "e2-3", source: 2, target: 3 }
	];
</script>



<div class="flow-space">
    <div>
        <Icon class="material-icons">save</Icon>
        <Textfield bind:value={collection_name}></Textfield>
    </div>
    <Svelvet nodes={initialNodes} edges={initialEdges} background />
</div>

<style>
    .flow-space {
        padding-left: 160px;
        font-size: 25px;
        display: block;
    }

</style>
