<script>
	// @ts-nocheck

	import { onMount } from 'svelte';

	import { node_type } from '../../stores/nodes';
	import ProxyNode from '../../components/nodes/ProxyNode.svelte';
	import ProxyNodeEditModal from '../../components/nodes/ProxyNodeEditModal.svelte';
	import RouteNode from '../../components/nodes/RouteNode.svelte';
	import ScriptNode from '../../components/nodes/ScriptNode.svelte';

	import Drawflow from 'drawflow';
	
	import Icon from '@iconify/svelte';

	let mobile_item_selec = '';
	let mobile_last_move = null;
	let editor;

	let openProxyNodeEditModal = false;

	function drag(ev) {
		if (ev.type === 'touchstart') {
			mobile_item_selec = ev.target.closest('.drag-drawflow').getAttribute('data-node');
		} else {
			ev.dataTransfer.setData('node', ev.target.getAttribute('data-node'));
		}
	}

	function allowDrop(ev) {
		ev.preventDefault();
	}

	function drop(ev) {
		console.log('drawflow palette drop');

		if (ev.type === 'touchend') {
			var parentdrawflow = document
				.elementFromPoint(mobile_last_move.touches[0].clientX, mobile_last_move.touches[0].clientY)
				.closest('#drawflow');
			if (parentdrawflow != null) {
				addNodeToDrawFlow(
					mobile_item_selec,
					mobile_last_move.touches[0].clientX,
					mobile_last_move.touches[0].clientY
				);
			}
			mobile_item_selec = '';
		} else {
			ev.preventDefault();
			var data = ev.dataTransfer.getData('node');
			addNodeToDrawFlow(data, ev.clientX, ev.clientY);
		}
	}

	function addNodeToDrawFlow(name, pos_x, pos_y) {
		if (editor.editor_mode === 'fixed') {
			return false;
		}
		pos_x =
			pos_x * (editor.precanvas.clientWidth / (editor.precanvas.clientWidth * editor.zoom)) -
			editor.precanvas.getBoundingClientRect().x *
				(editor.precanvas.clientWidth / (editor.precanvas.clientWidth * editor.zoom));
		pos_y =
			pos_y * (editor.precanvas.clientHeight / (editor.precanvas.clientHeight * editor.zoom)) -
			editor.precanvas.getBoundingClientRect().y *
				(editor.precanvas.clientHeight / (editor.precanvas.clientHeight * editor.zoom));

		const node_info = $node_type[name];
		
		editor.addNode(
			node_info.type,
			node_info.input_num,
			node_info.output_num,
			pos_x,
			pos_y,
			node_info.type,
			node_info.data,
			node_info.innerHTML
		);
	}

	function positionMobile(ev) {
		mobile_last_move = ev;
	}

	function handleNodeDoubleClick(ev) {
		if(ev.target.classList.contains('title-box')) {
			const node_type = ev.target.textContent.trim();
			console.log(node_type);

			switch(node_type) {
				case 'Proxy':
					openProxyNodeEditModal = !openProxyNodeEditModal;
					break
				case 'Route':
					break
				case 'Script':
					break
			}
		}
	}

	onMount(() => {
		let id = document.getElementById('drawflow');
		editor = new Drawflow(id);
		editor.start();

		// let html = document.createElement('div');
		// let data = { name: '' };
		// html.innerHTML = 'Hello Drawflow!!';
		// editor.registerNode('test', html);
		// editor.addNode('github', 0, 1, 150, 300, 'github', data, 'test', true);

		let elements = document.getElementsByClassName('drag-drawflow');
		for (var i = 0; i < elements.length; i++) {
			elements[i].addEventListener('touchend', drop, false);
			elements[i].addEventListener('touchmove', positionMobile, false);
			elements[i].addEventListener('touchstart', drag, false);
		}

		document.getElementById("drawflow").addEventListener('dblclick', handleNodeDoubleClick);
	});

	function test() {
		console.log('???');
	}

</script>

<div>
	<ProxyNodeEditModal isModalOpen={openProxyNodeEditModal} on:click={test}/>
	<div class="wrapper">
		<div class="col">
			<div class="drag-drawflow" draggable="true" on:dragstart={drag} data-node="proxy">
				<ProxyNode />
			</div>
			
			<div class="drag-drawflow" draggable="true" on:dragstart={drag} data-node="route">
				<RouteNode />
			</div>
			<div class="drag-drawflow" draggable="true" on:dragstart={drag} data-node="script">
				<ScriptNode />
			</div>
		</div>
		<div class="col-right">
			<div class="menu">
				<slot></slot>
			</div>
			<div id="drawflow" on:drop={drop} on:dragover={allowDrop}>
				<div class="btn-export" on:click={Swal.fire({ title: 'Export', html: '<pre><code>'+JSON.stringify(editor.export(), null,4)+'</code></pre>'})}>Export</div>
				<div class="btn-clear" on:click={editor.clearModuleSelected()}>Clear</div>
				<div class="bar-zoom">
					<Icon icon="akar-icons:zoom-out" on:click={editor.zoom_out()}></Icon>
					<Icon icon="bytesize:zoom-reset" on:click={editor.zoom_reset()}></Icon>
					<Icon icon="akar-icons:zoom-in" on:click={editor.zoom_in()}></Icon>
				</div>
			</div>
				
		</div>
	</div>
</div>

<style>
	#drawflow {
		background-color: #eee;
		width: 1800px;
		height: 860px;
	}
</style>
