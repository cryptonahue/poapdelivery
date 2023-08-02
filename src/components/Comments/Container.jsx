import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import validateDate from "@/utils/validateDate";

const Container = ({ comments }) => {
	if (comments.length === 0) {
		return <Typography>No hay comentarios...</Typography>;
	}

	return (
		<div className="Comment_container">
			<div className="Comment_container-box">
				{comments.length > 0 &&
					comments.map((item, index) => (
						<div key={index}>
							<div className="Comment_container-avatar">
								<Avatar
                    sx={{ width: 40, height: 40 }}
									alt={item.author}
									src={item.author}
									style={{ backgroundColor: "#b89f57" }}
								/>
								<Typography variant="body2" noWrap>
									<b>{item.author}</b>
								</Typography>
							</div>
							<div className="body-coments">
							<Typography variant="body2">
								<p>{item.body}</p>
							</Typography>
							</div>
							<div className="div-hr-coments">
							<hr style={{ border: "1px solid #0E111D" }} />
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default Container;
