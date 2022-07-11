<script>
	import { onMount } from 'svelte';

	import Drawflow from 'drawflow';

	let editor;

	onMount(() => {
		let id = document.getElementById('drawflow');
		// @ts-ignore
		editor = new Drawflow(id);
		editor.reroute = true;

		let data = { name: '' };
		let html = document.createElement('div');
		html.innerHTML = 'Hello Drawflow!!';
		editor.start();
		// @ts-ignore
		editor.registerNode('test', html);
		// Use
		editor.addNode('github', 0, 1, 150, 300, 'github', data, 'test', true);
	});
</script>

<div id="drawflow" bind:this={editor} />
