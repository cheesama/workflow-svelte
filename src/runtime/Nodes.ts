enum Method {
	GET = 'get',
	POST = 'post',
	PUT = 'put',
	PATCH = 'patch',
	DELETE = 'delete'
}

enum NodeType {
	ROUTE = 'route',
	PROXY = 'proxy',
	SCRIPT = 'script'
}

export interface INode {
	id: string;
	type: string;
	input_num: number;
	output_num: number;
	name?: string;
}

export interface IProxyNode extends INode {
	method: Method;
	port: number;
}

export interface IRouteNode extends INode {
	method: Method;
	endpoint: string;
}

export interface IScriptNode extends INode {
	script: string;
}
