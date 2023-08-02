import { API_URL } from "@/constants/env";
import { useEffect } from "react";
import Link from "next/link";
import Image from "@/components/Image";
import Typography from "@mui/material/Typography";
import minimalBody from "@/utils/minimalBody";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import Skeleton from "@mui/material/Skeleton";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import ArrowIcon from "@mui/icons-material/ArrowRightAlt";
import { useNearScreen } from "@/hooks/useNearScreen";
import validateDate from "@/utils/validateDate";
import validateHora from "@/utils/validateHora";

const Guias = ({
	Date_published,
	imagen = {},
	category,
	author,
	titulo,
	descripcion,
	published_at,
	Dificultad,
	users_permissions_user,
	to,
}) => {
	// Is useNearScreen retur Boolean
	const [isNear, fromRef] = useNearScreen();
	return (
		<div ref={fromRef}>
			{isNear && (
				<Link href={to}>
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
							<div className="tuto-card">
								<div className="ItemPost__categoria">
									{category ? category.name : "Sin categoría"}
								</div>
								{Dificultad ? (
									<div className="ItemPost__categoria2">
										{Dificultad}
									</div>
								) : (
									""
								)}
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
									{author &&
								author.photoURL && (
									<Avatar
										sx={{ width: 40, height: 40 }}
										alt={
											author
												? author.firstname
												: defaultApp.name
										}
										src={`${author.photoURL}`}
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

export default Guias;
