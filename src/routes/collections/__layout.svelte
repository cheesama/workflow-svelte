<script>
	// @ts-nocheck

	import { onMount, getContext } from 'svelte';

	import ProxyNode from '../../components/nodes/ProxyNode.svelte';
	import RouteNode from '../../components/nodes/RouteNode.svelte';
	import ScriptNode from '../../components/nodes/ScriptNode.svelte';

	import Drawflow from 'drawflow';
	import { Icon } from '@smui/button';

	let mobile_item_selec = '';
	let mobile_last_move = null;
	let editor;

	let node_infos = {};
	$: node_infos['proxy'] = getContext('proxy');

	function drag(ev) {
		if (ev.type === 'touchstart') {
			mobile_item_selec = ev.target.closest('.drag-drawflow').getAttribute('data-node');
		} else {
			ev.dataTransfer.setData('node', ev.target.getAttribute('data-node'));
		}

		console.log('drag event for ' + ev.dataTransfer.getData('node'));
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

		console.log(node_infos);
		const node_info = node_infos[name];

		switch (name) {
			case 'proxy':
				console.log(node_info);
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
				break;
			case 'route':
				break;
			case 'script':
				break;
		}
	}

	function positionMobile(ev) {
		mobile_last_move = ev;
	}

	onMount(() => {
		let id = document.getElementById('drawflow');
		editor = new Drawflow(id);
		let html = document.createElement('div');
		let data = { name: '' };
		html.innerHTML = 'Hello Drawflow!!';

		editor.start();
		editor.registerNode('test', html);
		editor.addNode('github', 0, 1, 150, 300, 'github', data, 'test', true);

		let elements = document.getElementsByClassName('drag-drawflow');
		for (var i = 0; i < elements.length; i++) {
			elements[i].addEventListener('touchend', drop, false);
			elements[i].addEventListener('touchmove', positionMobile, false);
			elements[i].addEventListener('touchstart', drag, false);
		}
	});
</script>

<div>
	<slot />
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
			<div id="drawflow" on:drop={drop} on:dragover={allowDrop} />
		</div>
	</div>
</div>

<style>
	#drawflow {
		background-color: #eee;
		width: 1600px;
		height: 860px;
	}
</style>
