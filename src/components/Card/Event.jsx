import { API_URL } from "@/constants/env";
import Link from "next/link";
import Image from "@/components/Image";
import Typography from "@mui/material/Typography";
import minimalBody from "@/utils/minimalBody";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import ArrowIcon from "@mui/icons-material/ArrowRightAlt";
import validateDate from "@/utils/validateDate";
import validateHora from "@/utils/validateHora";
import validateMinu from "@/utils/validateMinutes";
import defaultApp from "@/constants/default";

const Event = ({
	to,
	imagen = null,
	category,
	image,
	nombre,
	fecha,
	slug,
	lugar,
	author,
	descripcion,
	users_permissions_user,
	published_at,
	presencial,
	date_published,
	APP,
	...props
}) => {
	console.log({ fecha });
	return (
		<Link href={`eventos/${slug}`}>
			<a href={`eventos/${slug}`}>
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
								<div className="ite">
									{" "}
									<span>
										{presencial ? "Presencial" : "Online"}
									</span>
								</div>
							</div>
							{presencial ? (
								<div className="ItemPost__subtitle3">
									<span>
										{presencial ? (
											<div className="ite">
												<img
													src="/icons/inscription.svg"
													width="20px"
													height="20px"
												/>
												<span>
													Inscripción requerida
												</span>
											</div>
										) : (
											""
										)}
									</span>
								</div>
							) : (
								<div className="ItemPost__subtitle4">
									<span>
										{APP == "TwitterSpace" ? (
											<div className="ite">
												<img
													src="/icons/twitter2.svg"
													width="20px"
													height="20px"
												/>
												<span>TwitterSpace</span>
											</div>
										) : APP == "Discord" ? (
											<div className="ite">
												<img
													src="/icons/discord2.svg"
													width="20px"
													height="20px"
												/>
												<span>Discord</span>
											</div>
										) : APP == "Telegram" ? (
											<div className="ite">
												<img
													src="/icons/telegram2.svg"
													width="20px"
													height="20px"
												/>
												<span>Telegram</span>
											</div>
										) : APP == "YoutubeLive" ? (
											<div className="ite">
												<img
													src="/icons/youtube.svg"
													width="20px"
													height="20px"
												/>
												<span>Youtube</span>
											</div>
										) : APP == "Twitch" ? (
											<div className="ite">
												<img
													src="/icons/twitch.svg"
													width="20px"
													height="20px"
												/>
												<span>Twitch</span>
											</div>
										) : (
											""
										)}
									</span>
								</div>
							)}
						</div>
						<br />

						<div className="Itemevent__info">
							<div className="Itemevent__fecha">
								<img
									src="/icons/calendar.svg"
									width="20px"
									height="20px"
								/>
								<span className="gtm">
									{validateDate(fecha)}
								</span>
							</div>
							<div className="Itemevent__hora">
								<img
									src="/icons/clock.svg"
									className="clock_evento"
									width="20px"
									height="20px"
								/>
								<span>{validateHora(fecha)}: {validateMinu(fecha)}</span>
								<span className="gtm">GTM+3</span>
							</div>
						</div>

						<div className="Event_subtitle1">{nombre}</div>
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
										<b className="Post__user-info_username">
											{users_permissions_user.username}
										</b>
									</div>
									<small className="Post__user-info_date">
										{date_published &&
											validateDate(date_published)}
									</small>
								</div>
							</div>
						</div>
					</div>
				</div>
			</a>
		</Link>
	);
};

export default Event;
