import { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useModal } from "@/context/modalContext";
import { useAuth } from "@/context/authContext";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import LinearProgress from "@mui/material/LinearProgress";

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { isSubmitting, isSubmitError },
		reset,
	} = useForm();

	const { authFunc } = useAuth();

	const { handleModal } = useModal();

	const [statusError, setStatusError] = useState(false);

	const onSubmit = async (data) => {
		let result = await authFunc(data);

		if (result.code == "auth/wrong-password") {
			setStatusError(true);
		}
		if (result.code == "auth/user-not-found") {
			setStatusError(true);
		}

		if (result && result.user) {
			handleModal("signin", false);
			reset();
		}
	};

	return (
		<div className="Modal__container">
			<div className="logo_img_modal">
				<center>
					<img
						alt="Logo DeFi LATAM"
						width="176px"
						src="/img/logo.svg"
					/>
				</center>
			</div>
			<div>
				<p className="register_account">
					<a
						className="links_modal_registro"
						color="inherit"
						onClick={() => {
							handleModal("signup", true);
						}}
						fullWidth
					>
						Crear nueva cuenta
					</a>
				</p>
			</div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="email-input">
					<input
						type="email"
						name="email"
						{...register("email", { required: true })}
						placeholder="E-mail"
						className="input"
					/>
				</div>
				<div className="pass-input">
					<input
						type="password"
						name="password"
						{...register("password", { required: true })}
						placeholder="Contraseña"
						className="input"
					/>
				</div>
				<div>
					<Button
						// className="boton-Entrar"
						type="submit"
						variant="contained"
						color="secondary"
						fullWidth
						className="boton_home"
					>
						Entrar
					</Button>
				</div>
				<div>
					<Button
						className="boton-google"
						type="button"
						variant="contained"
						onClick={() => authFunc(null, handleModal)}
						startIcon={
							<img
								width="20px"
								height="auto"
								src="/icons/google.svg"
							/>
						}
						color="secondary"
						fullWidth
					>
						Inicia sesión con Google
					</Button>
				</div>
				<br />
				{isSubmitting && (
					<>
						<LinearProgress color="secondary" />
						<br />
					</>
				)}

				{isSubmitError ||
					(statusError && (
						<>
							<Alert severity="error">
								Ha ocurrido un error!
							</Alert>
						</>
					))}

				<div>
					<p className="nb-4">
						<a
							className="links_modal"
							onClick={() => handleModal("forgot", true)}
							color="inherit"
							fullWidth
						>
							¿Olvidaste tu contraseña?
						</a>
					</p>
				</div>
				<br />
			</form>
		</div>
	);
};

export default Login;
