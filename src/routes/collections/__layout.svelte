<!-- node list sidebar -->

<div>
    <div class="node-sidebar">
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
    </div>
    <slot></slot>

</div>

<style>
    /* The sidebar menu */
    .node-sidebar {
        height: 100%; /* Full-height: remove this if you want "auto" height */
        width: 160px; /* Set the width of the sidebar */
        position: fixed; /* Fixed Sidebar (stay in place on scroll) */
        z-index: 1; /* Stay on top */
        top: 0; /* Stay at the top */
        left: 0;
        background-color: rgb(223, 230, 229); /* Black */
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
    .node-sidebar a:hover {
        color: #131010;
    }

    .flow-caption {
        left: 160px;
    }

</style>