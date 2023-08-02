import Typography from "@mui/material/Typography";
import { ItemCardProyect } from "@/components/Card";
import Grid from "@mui/material/Grid";
import minPosts from "@/utils/minPosts";
import {Titles} from "@/components/Card";

const Group = ({ title, subtitle, list, to, max }) => {
	const listPosts = minPosts(list, max);

	return (
		<div className="grup_title">
		{Titles(title)}
				<Typography variant="h4" color="inherit">
					{title && title}
				</Typography>
				{subtitle && (
					<Typography variant="body1">{subtitle}</Typography>
				)}

			{listPosts.length === 0 && <Typography>No hay artículos relacionados!</Typography>}
			<div className="Colum_Posts-vertical">
			{listPosts && listPosts.length > 0 && (	
				<Grid container spacing={0} className="center-home">
					{listPosts.map((item, index) => (
							<ItemCardProyect item={item} to={to} />
					))}
				</Grid>
			)}
			</div>
		</div>
	);
};

export default Group;
