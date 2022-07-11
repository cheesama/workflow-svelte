<script>
// @ts-nocheck

    import { onMount } from "svelte";

    import ProxyNode from "../../components/nodes/ProxyNode.svelte"
    import RouteNode from "../../components/nodes/RouteNode.svelte"
    import ScriptNode from "../../components/nodes/ScriptNode.svelte"

    import Drawflow from '$lib/drawflow'

    onMount(() => {
        let id = document.getElementById("drawflow");
        const editor = new Drawflow(id);
        let html = document.createElement("div");
        let data = { "name": '' };
        html.innerHTML =  "Hello Drawflow!!";
        editor.registerNode('test', html);
        // Use
        editor.start();
        editor.addNode('github', 0, 1, 150, 300, 'github', data, 'test', true);
        
    });
</script>

<div>
    <div id="drawflow"></div>
    <div class="node-sidebar">
        <ProxyNode></ProxyNode>
        <RouteNode></RouteNode>
        <ScriptNode></ScriptNode>
    </div>
    <slot></slot>
    <div class="information-sidebar">
    </div>
</div>

<style>
    /* The sidebar menu */
    .node-sidebar {
        height: 100%; /* Full-height: remove this if you want "auto" height */
        width: 160px; /* Set the width of the sidebar */
        position: fixed; /* Fixed Sidebar (stay in place on scroll) */
        z-index: 1; /* Stay on top */
        top: 10; /* Stay at the top */
        left: 0;
        background-color: rgb(223, 230, 229);
        overflow-x: hidden; /* Disable horizontal scroll */
        padding-top: 20px;
    }

    /* When you mouse over the navigation links, change their color */
    

</style>