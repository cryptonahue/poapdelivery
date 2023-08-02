import axios from "axios";

const getData = async (url) => {
	try {
		let response = await axios.get(url);
		if (response.data) {
			return response.data;
		}

		return [];
	} catch (error) {
		console.log({error})
		return error
	}
};

export default getData;
