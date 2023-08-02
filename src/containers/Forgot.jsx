import { useState } from "react";
import { useForm } from "react-hook-form";
import { useModal } from "@/context/modalContext";
import Typography from "@mui/material/Typography";
import Input from "@/components/Input";
import Button from "@mui/material/Button";
import StatusForm from "@/components/StatusForm";
import LinearProgress from "@mui/material/LinearProgress";
import { recoverFirebase } from "../services/accounts";

const Forgot = () => {
	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
		reset,
	} = useForm();

	const { handleModal } = useModal();

	const [status, setStatus] = useState({
		type: "default",
		message: "",
	});

	const onSubmit = async (data) => {
		let response = await recoverFirebase(data.email);
		if (response && response.code == "auth/user-not-found") {
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
		reset();
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="Modal__container">
				<div className="logo_img_modal">
					<center>
						<img
							alt="Defi LATAM"
							width="176px"
							height="auto"
							src="/img/logo.svg"
						/>
					</center>
				</div>
				<Typography variant="h5">Recupera tu cuenta</Typography>
				<br />
				<div className="Register__input">
					<input
						type="email"
						name="email"
						size="small"
						color="secondary"
						{...register("email")}
						placeholder="Escribe tu email"
						fullWidth
						className="input"
					/>
				</div>
				<div>
					<Button
						type="submit"
						disabled={status.type == "loading" && "true"}
						variant="contained"
						color="secondary"
						fullWidth
						className="boton_home"
					>
						Enviar email
					</Button>
				</div>
				<br />
				{isSubmitting && (
					<>
						<br />
						<LinearProgress color="secondary" />
						<br />
					</>
				)}
				<StatusForm type={status.type} statusMessage={status.message} />

				<a
					className="links_modal"
					onClick={() => handleModal("signin", true)}
				>
					¿Ya tienes una cuenta?
				</a>
			</div>
		</form>
	);
};

export default Forgot;
