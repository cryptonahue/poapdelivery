import Link from "next/link";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Image from "@/components/Image";
import minimalBody from "@/utils/minimalBody";
import validateDate from "@/utils/validateDate";
import { API_URL } from "../../constants/env";
import defaultApp from "@/constants/default";
import Button from "@mui/material/Button";
import { useNearScreen } from "@/hooks/useNearScreen";
import ArrowIcon from "@mui/icons-material/ArrowRightAlt";
import LanguageIcon from "@mui/icons-material/Language";

import IconButton from "@mui/material/IconButton";
import TwitterIcon from "@mui/icons-material/Twitter";

const ItemCardProyect = ({ item, to }) => {
	const {
		title,
		description,
		category,
		author,
		slug,
		Date_published,
		users_permissions_user,
		published_at,
		image,
		twitter,
		date_published,
		website,
		discord,
		medium,
		telegramcanal,
		telegramgrupo,
		subtitle_rekts,
		blog,
	} = item;
	const slugContext = `/${to}/${slug}`;

	const [isNear, fromRef] = useNearScreen();

	return (
		<div ref={fromRef}>
			{isNear && (
				<Link href={slugContext}>
					<a href={slugContext}>
						<div>
							<div className="proyect-conteiner-div">
								<div className="proyect-conteiner-imgc">
									<Link href={slugContext}>
										<div className="proyect-imgc">
											<span>
												{image && (
													<Image
														width="50"
														height={50}
														src={`${API_URL}${image.url}`}
													/>
												)}
											</span>
										</div>
									</Link>
									<div className="display-datos">
										<div className="proyect-datos1">
											{title ? title : "Sin título"}
										</div>
										<div className="proyect-datos3">
											{subtitle_rekts}
										</div>
										<div className="proyect-datos2">
											{category
												? category.name
												: "Sin categoría"}
										</div>
									</div>
								</div>

								<div className="proyect-description">
									<p>{description}</p>
								</div>
								<div className="proyect-footer">
									<div className="proyect-footer-user">
										<div className="ItemProyect__user-image">
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
											<div className="Post__user-info_username_space">
												<b className="Post__user-info_username">
													{users_permissions_user &&
														users_permissions_user.username}
												</b>
												<small className="Post__user-info_date">
													{date_published &&
														validateDate(
															date_published
														)}
												</small>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</a>
				</Link>
			)}
		</div>
	);
};

export default ItemCardProyect;
