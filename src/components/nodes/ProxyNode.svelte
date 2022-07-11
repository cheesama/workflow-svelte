<script>
    import { Icon } from '@smui/button';

    export const type = 'proxy'
    export const method = 'GET'

    /**
* @param {any} event
*/
    function nodeDragStart(event) {
        console.log('drag start');
    }

    /**
* @param {any} event
*/
    function nodeDragEnd(event) {
        console.log('drag end');
    }

</script>

<div class="proxy-node-style" draggable="true" on:dragstart={nodeDragStart} on:dragend={nodeDragEnd}>
    <Icon class="material-icons">route</Icon>
    {type}
</div>

<style>
    .proxy-node-style {
        padding: 6px 8px 6px 16px;
        text-decoration: none;
        font-size: 25px;
        color: #8a7c7c;
        cursor: move;
    }

    .proxy-node-style:hover {
        background-color: #dfcdcd;
    }
</style>