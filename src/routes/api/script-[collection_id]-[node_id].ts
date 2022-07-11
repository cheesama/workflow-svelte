/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post() {
	return {
		status: 200,
		headers: {
			'access-control-allow-origin': '*'
		},
		body: {
			number: Math.random()
		}
	};
}
