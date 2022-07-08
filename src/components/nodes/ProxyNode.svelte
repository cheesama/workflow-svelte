<script>
    import { Icon } from '@smui/button';

    export const type = 'proxy'
</script>

<div class="proxy-node-style">
    <Icon class="material-icons">route</Icon>
    {type}
</div>

<style>
    .proxy-node-style {
        padding: 6px 8px 6px 16px;
        text-decoration: none;
        font-size: 25px;
        color: #8a7c7c;
        display: block;
    }

    .proxy-node-style:hover {
        background-color: #dfcdcd;
    }
</style>