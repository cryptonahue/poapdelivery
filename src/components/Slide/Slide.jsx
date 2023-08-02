import Link from "next/link";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Image from "@/components/Image";
import { API_URL } from "../../constants/env";
import minimalBody from "@/utils/minimalBody";
import validateDate from "@/utils/validateDate";
import { deepOrange } from "@mui/material/colors";
import defaultApp from "@/constants/default";

const Slide = ({ item, shared }) => {
	const {
		title,
		description,
		author,
		published_at,
		image,
		date_published,
		users_permissions_user,
		slug,
		type,
		user,
	} = item;

	// console.log({ user, users_permissions_user })

	return (
		<Link href={`${type}/${slug}`}>
			<div className="Post__container-slide_slider">
				<div className="Post__image Post__image-roundle_slider">
					{image ? (
						<Image
							className="slide_img_responsive"
							width="640px"
							height="360px"
							src={`${API_URL}${image.url}`}
						/>
					) : (
						<Typography>
							No hay imagen para este artículo
						</Typography>
					)}
				</div>

				<div className="Post__info_slider Post__info-roundle_slider">
					<div>
						<div className="Post__categories">
							<div className="Post__infor-categories">
								{shared && (
									<Shared
										title={title}
										content={description}
									/>
								)}
							</div>
						</div>

						<h1 className="slider_title">
							{title ? title : "Sin título"}
						</h1>

						<p className="slider_body_text">
							{description ? (
								minimalBody(description, 200)
							) : (
								<p>No hay contenido para mostrar.</p>
							)}
						</p>
					</div>
					<div className="Post__user">
						<div className="Post__user-image">
						{users_permissions_user &&
								users_permissions_user.photoURL && (
									<Avatar
										sx={{ width: 40, height: 40 }}
										alt={
											author
												? author.firstname
												: defaultApp.name
										}
										src={`${users_permissions_user.photoURL}`}
									/>
								)}
						</div>
						<div className="Post__user-info">
							<b className="Post__user-info_username">
								{users_permissions_user &&
									users_permissions_user.username}
							</b>
							{/*{JSON.stringify(user, null, 2)}*/}

							<small className="Post__user-info_date">
								{date_published && validateDate(date_published)}
							</small>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default Slide;
