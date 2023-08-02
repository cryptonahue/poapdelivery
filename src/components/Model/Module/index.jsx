import Link from "next/link";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { API_URL } from "../../../constants/env";
import axios from "axios";
import Head from "next/head";
const Module = ({ data: { modulos, slug, titulo, author }, moduleNumber }) => {
  const { nombre, video,image, descripcion, recursos } = modulos[moduleNumber - 1];

  const max = modulos.length;

  const autosave = (url) => {
    axios({
      url,
      method: "GET",
      responseType: "blob",
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.download = "Test File";
      link.setAttribute("download", "file.pdf");
      document.body.appendChild(link);
      link.click();
    });
  };

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
        {image? `<meta
                property="og:image"
                content={"https://backend.defilatam.com" + image.url}
              />
              <meta property="og:image:width" content="1200" />
              <meta property="og:image:height" content="480" />`: ""}


        <meta name="telegram:card" content="summary_large_image" />
        <meta name="telegram:title" content="Tutoriales y Cursos" />
        <meta name="telegram:description" content={descripcion} />

        {image? `<meta
          name="telegram:image"
          content={"https://backend.defilatam.com" + image.url}
        />
              <meta property="og:image:width" content="1200" />
              <meta property="og:image:height" content="480" />`: ""}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tutoriales y Cursos" />
        <meta name="twitter:description" content={descripcion} />

        {image? `        <meta
          name="twitter:image"
          content={"https://backend.defilatam.com" + image.url}
        />
              <meta property="og:image:width" content="1200" />
              <meta property="og:image:height" content="480" />`: ""}
      </Head>
      <div className="contenedor-cursos">
        <br />
        {titulo && <Typography variant="h1">{titulo}</Typography>}
        <br />
        {video && (
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${video}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        )}
        <br />
        <Typography variant="h4">
          Modulo: {nombre} ({moduleNumber} / {modulos.length})
        </Typography>
        <br />

        <Typography variant="body1">{descripcion}</Typography>
        <br />
        <Typography variant="h4">Archivos adjuntos</Typography>
        <br />
        <div>
          <br />
          {recursos.map((row, index) => (
            <a
              style={{ cursor: "pointer" }}
              key={index}
              className="download-cursos"
              onClick={() => autosave(`${API_URL}${row.archivo.url}`)}
            >
              <img src="/icons/download.svg" width="20px" height="20px" />
              <span className="gtm">Descargar archivos del curso</span>
              <br />
            </a>
          ))}

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
        </div>
        <br />
        <div
          className="contenedor-profesor-cursos"
          id="contenedor-profesor-cursos"
        >
          <div className="contenedor-profesor" id="contenedor-profesor">
            <div
              className="contenedor-profesor-imagen"
              id="contenedor-profesor-imagen"
            >
              <div className="cont-prof-nombre" id="cont-prof-nombre">
                <span>Profesor</span>
              </div>

              <div className="cont-prof-img" id="cont-prof-img">
                {author.avatar && author.avatar.url && (
                  <img
                    src={`${API_URL}${author.avatar.url}`}
                    width="100%"
                    height="100%"
                  />
                )}
              </div>
              <div className="cont-prof-inf" id="cont-prof-inf">
                <div className="nombre-prof" id="nombre-prof">
                  Matias
                </div>
                <div className="rol-prof" id="rol-prof">
                  Dev
                </div>
                <div className="tel-prof" id="tel-prof">
                  @matiascrypto
                </div>
                <div className="redes-prof" id="redes-prof">
                  asdasd
                </div>
              </div>

              <div className="cont-prof-descripcion" id="cont-prof-descripcion">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                amet quisque et ridiculus commodo tempor. Sit fermentum urna sit
                pharetra lectus mauris, quam scelerisque nulla.{" "}
              </div>
            </div>
            <div
              className="contenedor-profesor-datos"
              id="contenedor-profesor-datos"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Module;
