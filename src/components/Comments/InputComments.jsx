import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Input from "@/components/Input";
import { createComment } from "../../services/comments";

const InputComments = ({ id, user, currentComments, setCurrentComments }) => {
	const [inputs, setInputs] = useState({
		uid: id.toString(),
		date: new Date(),
		body: "",
	});

	const onChange = (event) => {
		const value = event.target.value;

		setInputs({
			...inputs,
			[event.target.name]: value,
		});
	};

	const onSubmit = (e) => {
		createComment(inputs, currentComments, setCurrentComments);
		setInputs({
			...inputs,
			body: "",
		});
		e.preventDefault();
	};

	useEffect(() => {
		setInputs({
			...inputs,
			author: user && user.displayName,
			email: user && user.email,
		});
	}, [user]);

	return (
		<div>
			<Typography variant="h4">Comentarios</Typography>

			<br />
			<form onSubmit={onSubmit}>
				<div className="input-coment">
				<input
					name="body"
					variant="outlined"
					onChange={onChange}
					value={inputs.body}
					// className="Comments__input"
					fullWidth
					placeholder="Realiza un comentario"
				/>
				</div>
				<br />
				<div className="boton-compartir1">
				<button type="submit" variant="contained" color="secondary">
					Comentar
				</button>
				</div>
			</form>
		</div>
	);
};

export default InputComments;
