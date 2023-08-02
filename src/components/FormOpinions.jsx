import { API_URL } from "../constants/env";
import axios from "axios";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Autocomplete from "@mui/material/Autocomplete";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";
import { useForm, Controller } from "react-hook-form";
import { useAuth } from "@/context/authContext";
import styles from "@/styles/pages/opinions.module.css";

const FormOpinions = ({ platforms, data: list, setData }) => {
	const {
		initialState: { ip },
	} = useAuth();
	const {
		register,
		control,
		watch,
		reset,
		formState: { isSubmitting },
		handleSubmit,
	} = useForm();

	const values = watch();
	const [percent, setPercent] = useState(0);
	const [platform, setValue] = useState(null);
	const [status, setStatus] = useState({
		open: false,
		type: "",
		message: "",
	});

	const onSubmit = async (data) => {
		try {
			const {
				data: { status, ...rest },
			} = await axios.post(`${API_URL}/opinions`, {
				...data,
				platform,
				percent,
				ip,
			});

			if (status === 201) {
				const newItem = { ...rest };
				console.log({ newItem });
				setData([...list, newItem]);

				setStatus({
					open: true,
					type: "success",
					message: "Creado con éxito!",
				});

				clear();

			}else if(status === 500){
				setStatus({
					open: true,
					type: "error",
					message: "Una opinión por plataforma!",
				});
			}

		} catch (error) {
			setStatus({
				open: true,
				type: "error",
				message: "Ha ocurrido un error!",
			});
		}
	};

	const listPlatforms = platforms.map((row) => {
		return {
			label: row.title,
		};
	});

	const clear = () => {
		reset();
		setValue(null);
		setPercent(0);
	};

	return (
		<div className={styles.modal}>
			<h2 className="espacio-top">Deja tu opinión</h2>
			<p>Selecciona una plataforma</p>
			<form  onSubmit={handleSubmit(onSubmit)} >
				<Autocomplete
					value={platform}
					options={platforms}
					getOptionLabel={(option) => option.title}
					onChange={(e, platforms) => setValue(platforms)}
					renderInput={(params) => (
						<TextField
							{...params}
							style={{
								backgroundColor: "#0C0E1A",
								color: "#FFF",
							}}
							required
						//	error={Boolean(errors?.autocomplete)}
					   // helperText={errors?.autocomplete?.message}
						/>
					)}
				/>
				<p>Selecciona la cantidad de estrellas</p>
				<div className={styles.rating}>
					<Rating
						onChange={(event, newValue) => {
							setPercent(newValue);
						}}
						// name="no-value"
						value={percent}
					/>
				</div>
				{/*{percent}*/}

				<textarea
					{...register("description", { required: true })}
					placeholder="En base a tu experiencia en el uso de esta plaforma, que opinas? "
					className="input"
					style={{ width: "100%" }}
					rows="5"
				></textarea>

				{isSubmitting && (
					<>
						<br />
						<br />
						<LinearProgress color="secondary" />
						<br />
						<p />
					</>
				)}

				{status.open && (
					<>
						<p />
						<br />
						<Alert severity={status.type}>{status.message}</Alert>
						<br />
					</>
				)}

				<Button type="submit" variant="contained" className="boton-comenzar-curso espacio-arriba">
					Enviar mi opinión
				</Button>
			</form>
			{/*<pre>
				{JSON.stringify({ ...values, platform, percent }, null, 2)}
			</pre>*/}
		</div>
	);
};

export default FormOpinions;
