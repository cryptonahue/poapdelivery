import Typography from "@mui/material/Typography";
import MarkDown from "@/components/MarkDown";
import Avatar from "@mui/material/Avatar";
// import { Shared, Shared2 } from "@/components/Shared";
import Image from "@/components/Image";
import Page from "@/components/Page";
import Head from "next/head";
import validateDate from "@/utils/validateDate";
// import evalueMInutes from "@/utils/evalueMInutes";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { API_URL } from "../../constants/env";
import defaultApp from "../../constants/default";
import validateHora from "@/utils/validateHora";
import validateMinu from "@/utils/validateMinutes";
import { Shared, Shared2 } from "@/components/Shared";

const Event = ({ item, ...props }) => {
  const {
    shared,
    nombre,
    lugar,
    descripcion,
    imagen,
    fecha,
    author,
    organizador,
    published_at,
    date_published,
    users_permissions_user,
    presencial,
    iniciaevento,
    mapa,
    contenido,
    live_url,
    urlinscripcion,
    poap,
  } = item
  return (
    <Page title={nombre && `${nombre} - Post`}>
      <Head>
        <title>{nombre}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={nombre} />
        <meta property="og:site_name" content="DeFi LATAM" />
        <meta property="og:description" content={descripcion} />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content={"https://backend.defilatam.com" + imagen.url}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="480" />

        <meta name="telegram:card" content="summary_large_image" />
        <meta name="telegram:title" content={nombre} />
        <meta name="telegram:description" content={descripcion} />
        <meta
          name="telegram:image"
          content={"https://backend.defilatam.com" + imagen.url}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={nombre} />
        <meta name="twitter:description" content={descripcion} />
        <meta
          name="twitter:image"
          content={"https://backend.defilatam.com" + imagen.url}
        />
      </Head>
      <div className="evento-conteiner-p">
        <div className="evento-c-1" id="evento-c-1">
          {
            <Image
              className="slide_img_responsive"
              width={55}
              height={30.9}
              layout="responsive"
              src={`${API_URL}${imagen.url}`}
            />
          }
        </div>
        <div className="evento-c-2" id="evento-c-2">
          <div className="evento-c-33" id="evento-c-33">
            <div className="evento-c-p1" id="evento-c-p1">
              <h1>{nombre ? nombre : "Sin título"}</h1>
            </div>
            <div className="evento-c-p2" id="evento-c-p2">
              {descripcion && <MarkDown>{descripcion}</MarkDown>}
            </div>
            <div className="evento-c-p3" id="evento-c-p3">
              <div className="ItemProyect__user-image">
                {users_permissions_user && users_permissions_user.avatar && (
                  <Avatar
                    sx={{ width: 40, height: 40 }}
                    alt={author ? author.firstname : defaultApp.name}
                    src={`${users_permissions_user.photoURL}`}
                  />
                )}
                <div className="Post__user-info_username_space">
                  <b className="Post__user-info_username">
                    {users_permissions_user && users_permissions_user.username}
                  </b>
                  <small className="Post__user-info_date">
                    {validateDate(fecha)}
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="evento-c-3" id="evento-c-3">
          <div className="e-i-1">
            <div>
              <p>Compartir</p>
            </div>
            <div>
              {<Shared title={nombre} imagen={imagen} content={descripcion} />}
            </div>
          </div>
          <div className="e-i-2">
            <div className="e-i-22">
              <div className="Markdown_container1 AlturaMinima500">
              <MarkDown>{contenido}</MarkDown>
              </div>
            </div>
          </div>
        </div>
        <div className="evento-c-4" id="evento-c-4">
          <div className="Itemevent__fecha" id="e-1-1">
          <img src="/icons/clock.svg" width="20px" height="20px" />
            <span className="gtm">{validateHora(fecha)}:{validateMinu(fecha)}</span>
          </div>
          <div className="Itemevent__hora" id="e-2-2">
          <img src="/icons/calendar.svg" width="20px" height="20px" />
            
            <span>{validateDate(fecha)}</span>
            <span className="gtm">GTM+3</span>
          </div>
          <div className="pre">
            <div className="ite" id="e-3-3">
              <span>{presencial ? "Presencial" : "Online"}</span>
            </div>
          </div>
          {live_url ? (
            <div className="cont-e-e">
              <a
                target="_blank"
                href={
                  live_url.includes("https") == true
                    ? live_url
                    : "https://" + live_url
                }
              >
                <div id="e-4-4" className="Itemevent__fecha">
                  <img src="/icons/twitter3.svg" width="20px" height="20px" />
                  <span className="gtm">{live_url ? "Twitter" : ""}</span>
                </div>
              </a>
            </div>
          ) : (
            ""
          )}

          <div className="Itemevent__poap" id="e-5-5">
            <img src="/icons/check.svg" width="20px" height="20px" />
            <span className="gtm">{poap ? "POAP" : ""}</span>
          </div>
          <div className="Itemevent__poap" id="e-6-6">
            <img src="/icons/ubicacion.svg" width="20px" height="20px" />
            <span>{lugar ? lugar : "sin designar"}</span>
          </div>
          {urlinscripcion?<div className="Itemevent__poap" id="e-7-7">
            <img src="/icons/calendar.svg" width="20px" height="20px" />
            <span><a href={urlinscripcion} target="_blank">Registrarte al evento</a></span>
          </div>:""}
          {mapa?<div className="Itemevent__poap" id="e-8-8">
          {mapa}
          </div>:""}
        </div>
      </div>
    </Page>
  );
};

export default Event;
