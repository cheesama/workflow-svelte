<script>
	// @ts-nocheck

	import { onMount } from 'svelte';

	import { node_type } from '../../stores/nodes';
	import { currentNodes, editNodeId } from '../../stores/nodes';

	import ProxyNode from '../../components/nodes/ProxyNode.svelte';
	import ProxyNodeEditModal from '../../components/nodes/ProxyNodeEditModal.svelte';
	import RouteNode from '../../components/nodes/RouteNode.svelte';
	import RouteNodeEditModal from '../../components/nodes/RouteNodeEditModal.svelte';
	import ScriptNode from '../../components/nodes/ScriptNode.svelte';
	import ScriptNodeEditModal from '../../components/nodes/ScriptNodeEditModal.svelte';
	import SwitchNode from '../../components/nodes/SwitchNode.svelte';
	import SwitchNodeEditModal from '../../components/nodes/ScriptNodeEditModal.svelte';

	import Drawflow from 'drawflow';
	import Icon from '@iconify/svelte';

	let mobile_item_selec = '';
	let mobile_last_move = null;
	let editor;

	let openProxyNodeEditModal = false;
	let openRouteNodeEditModal = false;
	let openScriptNodeEditModal = false;
	let openSwitchNodeEditModal = false;

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
		if (ev.type === 'touchend') {
			var parentdrawflow = document
				.elementFromPoint(mobile_last_move.touches[0].clientX, mobile_last_move.touches[0].clientY)
				.closest('#drawflow');
			if (parentdrawflow != null) {
				addNodeToDrawFlow(
					mobile_item_selec,
					mobile_last_move.touches[0].clientX,
					mobile_last_move.touches[0].clientY,
					ev
				);
			}
			mobile_item_selec = '';
		} else {
			ev.preventDefault();
			var nodeType = ev.dataTransfer.getData('node');
			addNodeToDrawFlow(nodeType, ev.clientX, ev.clientY, ev);
		}
	}

	function addNodeToDrawFlow(name, pos_x, pos_y, ev) {
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

		const newNodeId = editor.addNode(
			node_info.type,
			node_info.input_num,
			node_info.output_num,
			pos_x,
			pos_y,
			node_info.type,
			node_info.data,
			node_info.innerHTML
		);

		let targetNode = ev.target.querySelector('#node-' + newNodeId);
		targetNode = targetNode.querySelector('.title-box');
		targetNode.id = newNodeId;

		targetNode.addEventListener('dblclick', handleNodeDoubleClick);

		updateCurrentNodes();
	}

	function positionMobile(ev) {
		mobile_last_move = ev;
	}

	function handleNodeDoubleClick(ev) {
		const node_type = ev.target.textContent.trim();

		editNodeId.set(ev.target.id);
		console.log($currentNodes);

		switch (node_type) {
			case 'Proxy':
				openProxyNodeEditModal = !openProxyNodeEditModal;
				break;
			case 'Route':
				openRouteNodeEditModal = !openRouteNodeEditModal;
				break;
			case 'Script':
				openScriptNodeEditModal = !openScriptNodeEditModal;
				break;
			case 'Switch':
				openSwitchNodeEditModal = !openSwitchNodeEditModal;
				break;
		}
	}

	function updateCurrentNodes() {
		let nodesInfo = editor.export();
		nodesInfo = { collections: nodesInfo['drawflow'] };

		//backup pre-defined node information
		if (
			'collections' in $currentNodes &&
			'Home' in $currentNodes['collections'] &&
			'data' in $currentNodes['collections']['Home']
		) {
			for (const [nodeId, nodeData] of Object.entries(
				$currentNodes['collections']['Home']['data']
			)) {
				if (nodeId in nodesInfo['collections']['Home']['data']) {
					nodesInfo['collections']['Home']['data'][nodeId]['data'] = nodeData['data'];
					delete nodesInfo['collections']['Home']['data'][nodeId]['html'];
					delete nodesInfo['collections']['Home']['data'][nodeId]['typenode'];
				}
			}
		}

		currentNodes.set(nodesInfo);
	}

	onMount(() => {
		let id = document.getElementById('drawflow');
		editor = new Drawflow(id);
		editor.useuuid = true;
		editor.start();

		let elements = document.getElementsByClassName('drag-drawflow');
		for (var i = 0; i < elements.length; i++) {
			elements[i].addEventListener('touchend', drop, false);
			elements[i].addEventListener('touchmove', positionMobile, false);
			elements[i].addEventListener('touchstart', drag, false);
		}

		document.getElementById('drawflow').addEventListener('keydown', updateCurrentNodes);
		document.getElementById('drawflow').addEventListener('mouseup', updateCurrentNodes);
	});
</script>

<div>
	<div class="wrapper">
		<div class="col">
			<div class="drag-drawflow" draggable="true" on:dragstart={drag} data-node="proxy">
				<ProxyNode />
				<ProxyNodeEditModal
					isModalOpen={openProxyNodeEditModal}
					on:dblclick={() => (openProxyNodeEditModal = !openProxyNodeEditModal)}
				/>
			</div>
			<div class="drag-drawflow" draggable="true" on:dragstart={drag} data-node="route">
				<RouteNode />
				<RouteNodeEditModal
					isModalOpen={openRouteNodeEditModal}
					on:dblclick={() => (openRouteNodeEditModal = !openRouteNodeEditModal)}
				/>
			</div>
			<div class="drag-drawflow" draggable="true" on:dragstart={drag} data-node="script">
				<ScriptNode />
				<ScriptNodeEditModal
					isModalOpen={openScriptNodeEditModal}
					on:dblclick={() => (openScriptNodeEditModal = !openScriptNodeEditModal)}
				/>
			</div>
			<div class="drag-drawflow" draggable="true" on:dragstart={drag} data-node="switch">
				<SwitchNode />
				<SwitchNodeEditModal
					isModalOpen={openSwitchNodeEditModal}
					on:dblclick={() => (openScriptNodeEditModal = !openScriptNodeEditModal)}
				/>
			</div>
		</div>
		<div class="col-right">
			<div class="menu">
				<slot />
			</div>
			<div id="drawflow" on:drop={drop} on:dragover={allowDrop}>
				<div
					class="btn-export"
					on:click={Swal.fire({
						title: 'Export',
						html: '<pre><code>' + JSON.stringify($currentNodes, null, 4) + '</code></pre>'
					})}
				>
					Export
				</div>
				<div class="btn-clear" on:click={editor.clearModuleSelected()}>Clear</div>
				<div class="bar-zoom">
					<Icon icon="akar-icons:zoom-out" on:click={editor.zoom_out()} />
					<Icon icon="bytesize:zoom-reset" on:click={editor.zoom_reset()} />
					<Icon icon="akar-icons:zoom-in" on:click={editor.zoom_in()} />
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	#drawflow {
		background-color: #eee;
		width: 1400px;
		height: 860px;
	}
</style>
