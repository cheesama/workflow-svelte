<script>
    import ProxyNode from "../../components/nodes/ProxyNode.svelte"
    import RouteNode from "../../components/nodes/RouteNode.svelte"
    import ScriptNode from "../../components/nodes/ScriptNode.svelte"
</script>

<div>
    <div class="node-sidebar">
        <ProxyNode></ProxyNode>
        <RouteNode></RouteNode>
        <ScriptNode></ScriptNode>
    </div>
    <slot></slot>
    <div class="information-sidebard">
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

    /* The navigation menu links */
    .node-sidebar a {
        padding: 6px 8px 6px 16px;
        text-decoration: none;
        font-size: 25px;
        color: #818181;
        display: block;
    }

    /* When you mouse over the navigation links, change their color */
    

</style>