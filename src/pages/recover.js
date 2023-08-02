import Head from "next/head";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import StatusForm from "@/components/StatusForm";

// import { test } from "../../config";
const test = () => {
	console.log("Test")
}
const ResetPassword = () => {
	const [inputs, setInputs] = useState({
		email: "",
	});

	const [status, setStatus] = useState({
		type: "default",
		message: "",
	});

	/*Send email*/
	const sendEmail = async (event) => {
		event.preventDefault();

		const { email } = inputs;

		if (email == "") {
			setStatus({
				type: "warning",
				message: "Escribe tu email",
			});

			return;
		}

		setStatus({
			type: "loading",
		});

		const result = await test(email);

		if (result && result.code == "auth/user-not-found") {
			setStatus({
				type: "warning",
				message: "Tu usuario no existe",
			});

			return;
		} else {
			setStatus({
				type: "success",
				message: "Revisa tu bandeja de correo electrónico!",
			});
		}
	};

	/*Handle Inputs*/
	const onChange = (event) => {
		const value = event.target.value;

		setInputs({
			...inputs,
			[event.target.name]: value,
		});
	};

	return (
		<div>
			<Head>
				<title>DeFi Latam - Recupera tu contraseña</title>
				<meta name="description" content="Blog, Blog LATAM" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Box
				style={{ height: "100vh" }}
				display="flex"
				flexDirection="column"
				alignItems="center"
				justifyContent="center"
			>
				<form onSubmit={sendEmail}>
					<p>Recupera tu cuenta</p>
					<br />
					<div>
						<TextField
							type="email"
							name="email"
							size="small"
							variant="outlined"
							color="secondary"
							onChange={onChange}
							placeholder="Escribe tu email"
							fullWidth
						/>
					</div>
					<br />
					<div>
						<Button
							type="submit"
							disabled={status.type == "loading" && true}
							variant="contained"
							color="primary"
							fullWidth
						>
							Enviar
						</Button>
					</div>
					<br />
					<StatusForm
						type={status.type}
						statusMessage={status.message}
					/>
				</form>
			</Box>
		</div>
	);
};

export default ResetPassword;
