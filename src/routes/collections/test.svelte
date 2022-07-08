<script>
    import { onMount } from 'svelte';
    import Drawflow from 'drawflow'
    import styleDrawflow from 'drawflow/dist/drawflow.min.css'

    /**
* @type {HTMLElement}
*/
    let canvas;

    onMount(() => {
        let editor = new Drawflow(canvas);
        let html = document.createElement("div");
        html.innerHTML =  "Hello Drawflow!!";
        // @ts-ignore
        editor.registerNode('test', html);

        editor.start();
    });

</script>

<div id="drawflow" bind:this={canvas}></div>