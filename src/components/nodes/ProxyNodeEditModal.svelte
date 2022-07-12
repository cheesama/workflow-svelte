<script>
    export let isModalOpen = false;
    export /**
* @type {any}
*/
     let id;
</script>

{#if isModalOpen}
    <div class='backdrop'>
        <div class='edit-modal'>
            <p>Edting Proxy Node : {id}</p>
            <input type="name" placeholder="name" />
            <input type="url" placeholder="URL" />
            <input type="number" placeholder="port" />
        </div>
    </div>
{/if}

<style>  
    .backdrop {    
        width: 100%;    
        height: 100%;    
        position: fixed;    
        top: 0;    
        left: 0;    
        background: rgba(0, 0, 0, 0.8);
        z-index: 999;  
    }   
    
    .edit-modal {    
        padding: 10px;    
        border-radius: 10px;    
        max-width: 400px;    
        margin: 10% auto;    
        text-align: center;    
        background: white;  
        z-index: 1000;  
    }

</style>