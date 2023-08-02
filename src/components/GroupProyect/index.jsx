import Typography from "@mui/material/Typography";
import { ItemCardProyect } from "@/components/Card";
import Grid from "@mui/material/Grid";
import minPosts from "@/utils/minPosts";
import { Titles } from "@/components/Card";

const Group = ({ title, subtitle, list, to, max }) => {
	const listPosts = minPosts(list, max);

	return (
		<div className="grup_title">
			{Titles(title)}
			
				{subtitle && (
					<p>{subtitle}</p>
				)}

			{listPosts.length === 0 && <Typography>No hay artículos relacionados!</Typography>}
			
			<div className="Colum_Posts-vertical3">
					{listPosts.map((item, index) => (
						<Grid key={item.id} className="center-home3">
							<ItemCardProyect item={item} to={to} />
						</Grid>
					))}
			</div>
		</div>
	);
};

export default Group;
