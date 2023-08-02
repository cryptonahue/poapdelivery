import { API_URL } from "../../../constants/env";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "@/components/Image";
import MarkDown from "@/components/MarkDown";

const Guide = ({ data: { guias, slug, titulo }, moduleNumber }) => {
  const { nombre, imagen, descripcion } = guias[moduleNumber - 1];
  const max = guias.length;

  return (
    <>
      <div className="contenedor-cursos">
        <br />
        <Typography variant="h1">{titulo}</Typography>
        <Typography variant="h6">
          Modulo: {nombre} ({moduleNumber} / {guias.length})
        </Typography>
        <br />
        <div className="botones-sig">
          <Link href={`${slug}/${parseInt(moduleNumber) - 1}`}>
            <Button
              className="boton-comenzar-curso"
              variant="contained"
              disabled={moduleNumber < 2 && true}
            >
              Anterior
            </Button>
          </Link>
          &nbsp;&nbsp;
          <Link href={`${slug}/${parseInt(moduleNumber) + 1}`}>
            <Button
              className="boton-comenzar-curso"
              variant="contained"
              disabled={moduleNumber >= max}
            >
              Siguiente
            </Button>
          </Link>
        </div>
        <br />
        <div className="video-curso-intro">
          {imagen?<Image width="100%" height={60} src={`${API_URL}${imagen.url}`} />:""}
          
        </div>
        <br />
        <Typography variant="h4">{nombre}</Typography>
        <br />
        <div className="Markdown_container1 AlturaMinima500">
        <MarkDown>{descripcion}
        </MarkDown></div>
        <br />
        <div className="botones-sig">
          <Link href={`${slug}/${parseInt(moduleNumber) - 1}`}>
            <Button
              className="boton-comenzar-curso"
              variant="contained"
              disabled={moduleNumber < 2 && true}
            >
              Anterior
            </Button>
          </Link>
          &nbsp;&nbsp;
          <Link href={`${slug}/${parseInt(moduleNumber) + 1}`}>
            <Button
              className="boton-comenzar-curso"
              variant="contained"
              disabled={moduleNumber >= max}
            >
              Siguiente
            </Button>
          </Link>
        </div>
       
        <hr className="disclaimer_hr"/>
			<div className="disclaimer_container_guias_cursos">
				
        <small className="disclaimer_text_guias_cursos">Las opiniones, análisis, tutoriales, guías,  experiencias y todo el contenido volcado en Academia DeFi LATAM y su comunidad son subjetivas, con fines educativos.  En ningún momento constituyen recomendaciones de inversión.

La finalidad de nuestra Academia, Blog y comunidad es educativa. El mercado de criptomonedas es volátil y conlleva riesgos elevados. Es carga del usuario contrastar la información publicada con otros sitios y hacer su propia investigación.

Nuestro contenido es gratuito y creado desde la comunidad. Nadie del equipo de DeFi LATAM ni de la comunidad te contactará para inversiones o pagos. Evita caer en estafas.</small>


      </div>

      </div>
      <br />
    </>
  );
};

export default Guide;
