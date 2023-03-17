export async function traer_api() {
	try {
			const pokemon = await fetch('https://valorant-api.com/v1/agents/').then((res) => {
				return res.json();
			});
			return pokemon;
	} catch (error) {
		console.log(error);
	}
}
traer_api();
