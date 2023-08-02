import axios from "axios";
import { API_URL } from "../../constants/env";

function parseFile(file) {
	// Always return a Promise
	return new Promise((resolve, reject) => {
		let content = "";
		const reader = new FileReader();
		// Wait till complete
		reader.onloadend = function (e) {
			content = e.target.result;
			const result = content.split(/\r\n|\n/);
			resolve(result);
		};
		// Make sure to handle error states
		reader.onerror = function (e) {
			reject(e);
		};
		reader.readAsText(file);
	});
}

export default async function create(
	data,
	user,
	setStatusMessage,
	setCaptchaToken,
	recaptchaRef,
	reset
) {
	try {
		let { keyword, file, captchaToken } = data;

		let list = await parseFile(file[0]);
		let newList = list.filter((row) => row.length > 0);

		let listFormatted = [];

		let response = await axios.post(`${API_URL}/poaps`, {
			token: captchaToken,
			keyword: keyword.toLowerCase(),
			author: user.email,
			list: newList,
		});
		const status = response.data.status;
		if (status === 201) {
			setStatusMessage({
				open: true,
				type: "success",
				message: "POAP creado con éxito",
			});
		} else if (status === 208) {
			setStatusMessage({
				open: true,
				type: "warning",
				message: "Completa el Captcha",
			});
		} else if (status === 209) {
			setStatusMessage({
				open: true,
				type: "error",
				message: "Eres un Robot",
			});
		}
	} catch (error) {
		console.log({ error });
	}

	recaptchaRef.current.reset();
	setCaptchaToken(null);
	reset();
}
