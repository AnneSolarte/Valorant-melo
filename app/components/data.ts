export async function traer_api() {
	try {
			const val = await fetch('https://valorant-api.com/v1/agents/').then((res) => {
				return res.json();
			});
			return val;
	} catch (error) {
		console.log(error);
	}
}
