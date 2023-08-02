import { API_URL } from "@/constants/env";
import Link from "next/link";
import Image from "@/components/Image";
import Typography from "@mui/material/Typography";
import minimalBody from "@/utils/minimalBody";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { useNearScreen } from "@/hooks/useNearScreen";
import ArrowIcon from "@mui/icons-material/ArrowRightAlt";
import validateDate from "@/utils/validateDate";
import validateHora from "@/utils/validateHora";

const Cursos = ({
	slug,
	imagen = null,
	category,
	image,
	author,
	nombre,
	titulo,
	fecha,
	lugar,
	Date_published,
	descripcion,
	users_permissions_user,
	published_at,
	presencial,
	iniciaevento,
	...props
}) => {
	const [isNear, fromRef] = useNearScreen();
	return (
		<div ref={fromRef}>
			{isNear && (
				<Link href={`cursos/${slug}`}>
					<div className="ItemEvent__container">
						<div className="ItemPost__image">
							<Image
								width="100%"
								height={60}
								src={`${API_URL}${imagen.url}`}
							/>
						</div>
						<div className="ItemPost__info">
							{/*If exist category*/}
							<div className="Event_subtitle">
								<div className="ItemEvent__subtitle">
									<div className="ite2">
										<span>{"Token"}</span>
									</div>
								</div>
							</div>

							<div className="Event_subtitle2">{titulo}</div>
							<div className="descripcion">
								{descripcion ? (
									minimalBody(descripcion, 100)
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
													sx={{
														width: 40,
														height: 40,
													}}
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
											<b className="ItemPost__user-info_username">
												{author.username}
											</b>
										</div>
										<span>
											<small className="Post__user-info_date">
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

export default Cursos;
