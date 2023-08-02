import axios from "axios";
import { API_URL } from "../../constants/env";
import decrypt from "../../utils/decrypt";

export default async function get(
	data,
	ip,
	setAlert,
	reset,
	setCaptchaToken,
	recaptchaRef
) {
	const { captchaToken, keyword } = data;
	const mainKeyword = keyword.toLowerCase();

	const response = await axios.post(`${API_URL}/linkpoaps`, {
		token: captchaToken,
		keyword: mainKeyword,
		ip,
	});

	const { status, url = null } = response.data;

	if (status === 201) {
		setAlert(
			"Éxito!",
			"success",
			"Este es el link para reclamar tu POAP.",
			url
		);
	} else if (status === 205) {
		setAlert(
			"Ya estas registrado",
			"warning",
			"Recuerda que solo es un link por IP.",
			url
		);
	} else if (status === 207) {
		setAlert(
			"Lo sentimos",
			"question",
			"No quedan POAP disponibles.",
			null
		);
	} else if (status === 208 || status === 209) {
		setAlert("Completa el Captcha", "warning", "Completa captcha", null);
	} else if (status === 300) {
		setAlert("Oops...", "error", "Error al traer POAP.", null);
	}

	recaptchaRef.current.reset();
	setCaptchaToken(null);
}
