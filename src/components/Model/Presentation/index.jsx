import { API_URL } from "../../../constants/env";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MarkDown from "@/components/MarkDown";
import Avatar from "@mui/material/Avatar";
import { Shared, Shared2 } from "@/components/Shared";
import validateDate from "@/utils/validateDate";
import validateHora from "@/utils/validateHora";
import Head from "next/head";

const Model = ({
  data: {
    slug = null,
    titulo,
    author,
    imagen,
    descripcion,
    url_intro,
    Date_published,
    users_permissions_user,
    contenido_curso,
    requisitos,
    publico,
  },
  guide = false,
}) => {
  return (
    <>
      <Head>
        <title>Tutoriales y Cursos</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          data-rh="true"
          property="og:image"
          content="https://www.defilatam.com/_next/image?url=https%3A%2F%2Fbackend.defilatam.com%2Fuploads%2F854_480_b4de096ada.png&w=3840&q=75"
        />
        <meta property="og:title" content="Tutoriales y Cursos" />
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
        <meta name="telegram:title" content="Tutoriales y Cursos" />
        <meta name="telegram:description" content={descripcion} />
        <meta
          name="telegram:image"
          content={"https://backend.defilatam.com" + imagen.url}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tutoriales y Cursos" />
        <meta name="twitter:description" content={descripcion} />
        <meta
          name="twitter:image"
          content={"https://backend.defilatam.com" + imagen.url}
        />
      </Head>
      <div className="contenedor-cursos">
        <br />
        <div className="titulo-cursos">
          {titulo && <Typography variant="h1">{titulo}</Typography>}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <a href="#" target="_blank">
            <div className="Post__user">
              <div className="Post__user-image">
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
              <div className="Post__user-info">
                <b className="user_post">{author.username}</b>
                <br />
                <span>
                  <small className="Post__user-info_date">
                    {Date_published && validateDate(Date_published)}
                  </small>
                </span>
                <p />
              </div>
            </div>
          </a>
        </div>
        <br />
        {imagen && imagen.url && (
          <>
            <img
              width="100%"
              src={`${API_URL}${imagen.url}`}
              alt="Imagen del curso"
            />
            <br />
          </>
        )}
        <div className="video-curso-intro">
          {url_intro && (
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${url_intro}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )}
        </div>
        <br />
        <center>
          <Link href={`${slug}/1`}>
            <Button variant="contained" className="boton-comenzar-curso">
              {guide ? "Comenzar tutorial" : "Comenzar el curso"}
            </Button>
          </Link>
        </center>
        <br />
        <br />
        <Typography variant="h4">Descripción</Typography>
        <br />
        <div className="Markdown_container1 AlturaMinima500">
          {descripcion && <MarkDown>{descripcion}</MarkDown>}
        </div>
        <br />

        <br />
        <Typography variant="h4">
          {guide ? "Contenido del tutorial" : "Contenido del curso"}
        </Typography>
        <br />
        <div className="contenido-curso">
          {contenido_curso.map((row, index) => (
            <Typography key={index}>
              <ul>
                <li className="li_tutoriales">
                  <b>
                    <span>{row.titulo}</span>
                  </b>
                </li>
              </ul>
              {/* <b>{guide ? "0" : "Module"} {index + 1}:</b>  */}
              <div className="cont-curso">
                <p>{row.descripcion}</p>
              </div>
            </Typography>
          ))}
        </div>
        {requisitos != "" ? (
          <div>
            <br />
            <Typography variant="h4">Requisitos</Typography>
            <br />
            <ol id="lista3">
              {requisitos.map((row, index) => (
                <li>
                  <Typography key={index}>{row.descripcion}</Typography>
                </li>
              ))}
            </ol>
            <br />
          </div>
        ) : (
          ""
        )}
        {publico != "" ? (
          <div>
            <br />
            <Typography variant="h4">
              {guide
                ? "¿Para quién esta digirido esta guía?"
                : "¿Para quién esta digirido este curso?"}
            </Typography>
            <br />
          </div>
        ) : (
          ""
        )}

        <ol id="lista3">
          {publico.map((row, index) => (
            <li>
              <Typography key={index}>{row.title}</Typography>
            </li>
          ))}
        </ol>
        <hr className="disclaimer_hr" />
        <div className="disclaimer_container_guias_cursos">
          <small className="disclaimer_text_guias_cursos">
            Las opiniones, análisis, tutoriales, guías, experiencias y todo el
            contenido volcado en Academia DeFi LATAM y su comunidad son
            subjetivas, con fines educativos. En ningún momento constituyen
            recomendaciones de inversión. La finalidad de nuestra Academia, Blog
            y comunidad es educativa. El mercado de criptomonedas es volátil y
            conlleva riesgos elevados. Es carga del usuario contrastar la
            información publicada con otros sitios y hacer su propia
            investigación. Nuestro contenido es gratuito y creado desde la
            comunidad. Nadie del equipo de DeFi LATAM ni de la comunidad te
            contactará para inversiones o pagos. Evita caer en estafas.
          </small>
        </div>
      </div>
    </>
  );
};

export default Model;
