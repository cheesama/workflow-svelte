<script>
    import { Icon } from '@smui/button';

    export const type = 'route'
</script>

<div class="route-node-style">
    <Icon class="material-icons">router</Icon>
    {type}
</div>

<style>
    .route-node-style {
        padding: 6px 8px 6px 16px;
        text-decoration: none;
        font-size: 25px;
        color: #498899;
        display: block;
    }

    .route-node-style:hover {
        background-color: #dfcdcd;
    }
</style>