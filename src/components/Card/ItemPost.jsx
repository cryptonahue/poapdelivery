import Link from "next/link";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Image from "@/components/Image";
import { API_URL } from "../../constants/env";
import minimalBody from "@/utils/minimalBody";
import validateDate from "@/utils/validateDate";
import defaultApp from "@/constants/default";
import { useNearScreen } from "@/hooks/useNearScreen";
import ArrowIcon from "@mui/icons-material/ArrowRightAlt";

const ItemCard2 = ({ item, to }) => {
	const {
		title,
		description,
		category,
		content,
		author,
		slug,
		Date_published,
		users_permissions_user,
		published_at,
		image,
	} = item;
	const slugContext = `/${to}/${slug}`;
	const [isNear, fromRef] = useNearScreen();
	return (
		<div ref={fromRef}>
			{isNear && (
				<Link href={slugContext}>
					<div className="ItemPost__container">
						<div className="ItemPost__image">
							{image && (
								<Image
									width="100%"
									height={60}
									src={`${API_URL}${image.url}`}
								/>
							)}
						</div>
						<div className="ItemPost__info">
							{/*If exist category*/}
							<div className="ItemPost__subtitle">
								<span>
									{category ? category.name : "Sin categoría"}
								</span>
							</div>
							<br />
							<div className="subtitle1">
								{title ? title : "Sin título"}
							</div>
							<br />
							<div className="descripcion">
								{description ? (
									minimalBody(description, 100)
								) : (
									<>No hay contenido para mostrar.</>
								)}
							</div>
							<div className="ItemPost__user">
								<div className="ItemPost__user-cont">
									<div className="ItemPost__user-image">
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
									<div className="ItemPost__user-info">
										<div>
											<b>
												{
													users_permissions_user.username
												}
											</b>
										</div>
										<span>
											<small>
												{Date_published &&
													validateDate(
														Date_published
													)}
											</small>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Link>
			)}
		</div>
	);
};

export default ItemCard2;
