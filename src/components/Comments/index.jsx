import { useEffect, useContext } from "react";

import Typography from "@mui/material/Typography";
import Container from "./Container";
import InputComments from "./InputComments";

const Comments = ({ comments, id }) => {
	const {
		state: { user },
		currentComments,
		setCurrentComments,
	} = useContext();

	useEffect(() => {
		setCurrentComments(comments);
	}, []);

	return (
		<div className="Comments_container">
			{user ? (
				<>
					<InputComments
						id={id}
						user={user}
						currentComments={currentComments}
						setCurrentComments={setCurrentComments}

					/>
					<Typography variant="body1">
						Comentarios ({comments.length})
					</Typography>
					<br />
					<Container comments={currentComments} />
					<br />

	
				</>
			) : (
				<center>
					<Typography variant="body1">
						Inicia sesión para poder comentar este artículo!
					</Typography>
				</center>
			)}
		</div>
	);
};

export default Comments;
