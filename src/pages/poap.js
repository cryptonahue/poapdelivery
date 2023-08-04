import { API_URL } from "../constants/env";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import Head from "next/head";
import { yupResolver } from "@hookform/resolvers/yup";
import { config, defaultValues } from "../config/poap/get";
import Page from "@/components/Page";
import Spacing from "@/components/Spacing";
import Typography from "@mui/material/Typography";
import Input from "@/components/Input";
import LinearProgress from "@mui/material/LinearProgress";
import Button from "@mui/material/Button";
import Community from "@/containers/Community";
import getData from "../services/getData";
import { get as getPoap } from "../services/poap";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";

const Poap = ({ communities }) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(config),
    defaultValues,
  });

  const recaptchaRef = useRef(null);
  const [captchaToken, setCaptchaToken] = useState(null);
  const [ip, setIP] = useState(null);

  const setAlert = (title, type, subtitle, url) => {
    Swal.fire({
      title: `<div style='color:#FFF'>${title}</div>`,
      icon: type,
      html: url
        ? `
        <div className="container_input-poap">
          <p>${subtitle}</p>
          <div className="container_input-poap">
            <a href=${url} target="_blank" rel="noopener">${url}</a>
            <a href=${url} target="_blank" rel="noopener"><p className="btn_test">Ir</p></a>
          </div>
        `
        : `
        <div style='color:#FFF'>
          <p>${subtitle}</p>
        </div>
        `,
      background: "#0C0E1A",
      showConfirmButton: false,
      showCloseButton: true,
    });
  };

  

  useEffect(() => {
    const getIP = async () => {
      try {
        const res = await axios.get("https://morenabeltran.com/test.php");
        const verifyIp = res.data && res.data[0];
        setIP(verifyIp);
      } catch (error) {
        setIP(null);
      }
    };
    getIP();
  }, []);

  const onSubmit = async (data) => {
    await getPoap(
      { captchaToken, ...data },
      ip,
      setAlert,
      reset,
      setCaptchaToken,
      recaptchaRef
    );
  };

  const onChange = (value) => {
    setCaptchaToken(value);
  };

  return (
    <>
      <Head>
        <title>POAP - DeFi LATAM</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="POAP - DeFi LATAM" />
        <meta property="og:site_name" content="DeFi LATAM" />
        <meta property="og:description" content="Distribución de links POAP" />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://backend.defilatam.com/uploads/thumbnail_poap_dark_608b310e99.png"
        />
        <meta property="og:image:width" content="100" />
        <meta property="og:image:height" content="100" />

        <meta name="telegram:title" content="POAP - DeFi LATAM" />
        <meta
          name="telegram:description"
          content="Distribución de links POAP"
        />
        <meta
          name="telegram:image"
          content="https://backend.defilatam.com/uploads/thumbnail_poap_dark_608b310e99.png"
        />
        <meta property="telegram:image:height" content="100" />
        <meta property="telegram:image:width" content="100" />

        <meta name="twitter:title" content="POAP - DeFi LATAM" />
        <meta name="twitter:description" content="Distribución de links POAP" />
        <meta
          name="twitter:image"
          content="https://backend.defilatam.com/uploads/thumbnail_poap_dark_608b310e99.png"
        />
        <meta property="twitter:image:height" content="100" />
        <meta property="twitter:image:width" content="100" />
      </Head>
      <Page title="POAP - DeFi LATAM">
        <div className="Container-poap">
          {/*<center>
            <img
              alt="DeFi LATAM"
              height="auto"
              width="200px"
              src="/img/logo.svg"
            />
          </center>*/}
          <div className="poap">
            <Spacing space="10" />
            <div className="poap-titulo">
              <Typography variant="h4">Recibí tú</Typography>
              <img
                alt="DeFi LATAM POAP"
                height="auto"
                width="100px"
                src="/img/poap.svg"
              />
              {/*{ip}*/}
            </div>
            <Spacing space="10" />
            <Typography variant="body1" className="body2 poap-titulo">
              Completa el siguiente formulario para obtener el POAP del evento.
            </Typography>
            <br />
            <br />
            <center>
              <form onSubmit={handleSubmit(onSubmit)}>
                {" "}
                {/*className="form-poap"*/}
                <div className="form-poap2">
                  <div className="form-input-palabra">
                    <Input
                      type="text"
                      name="keyword"
                      placeholder="Escribe la palabra secreta"
                      {...register("keyword")}
                      variant="outlined"
                      fullWidth
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="contained"
                    className="boton-reclamar"
                    disabled={isSubmitting && "true"}
                  >
                    RECLAMAR
                  </Button>
                </div>
                <br />
                {isSubmitting && (
                  <>
                    <LinearProgress color="secondary" />
                    <br />
                  </>
                )}
                <div>
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6Lf5xGImAAAAAM5BPbd3aRsFzCUQDMFQ9QTcT_nE"
                    onChange={onChange}
                  />
                </div>
              </form>
            </center>
            <br />
            <br />
          </div>
          <div class="faq__logo__holder">
  {/* <div class="faq__logo">
    <img src="https://bobmatyas.github.io/fm-faq-accordion/images/illustration-woman-online-mobile.svg" alt="woman at a computer" class="faq__logo__image hidden-lg"></img>
    <img src="https://bobmatyas.github.io/fm-faq-accordion/images/illustration-box-desktop.svg" alt="" class="faq__logo__image visible-lg"></img>
  </div> */}
  </div>
  
  <div class="faq__holder">
  <h1 class="faq__heading">FAQ</h1>
 
  <details class="faq__detail">
      <summary  class="faq__summary"><span class="faq__question">¿Qué es un POAP?</span></summary>
      <p class="faq__text">Los POAP son NFTs coleccionables, minteados bajo el contrato inteligente Proof of Attendance Protocol. Cada POAP es un registro digital que poseen los coleccionistas como prueba digital de que asistieron o participaron en un evento físico o virtual.</p>
  </details>

  <details class="faq__detail">
    <summary  class="faq__summary"><span class="faq__question">¿Necesito una wallet para recibir un POAP?</span></summary>
    <p class="faq__text">No, los POAPs pueden ser reservados con una dirección de correo electrónico. Tenga en cuenta que reservar un POAP con una dirección de correo electrónico no mintea el POAP en la blockchain. El minteo solo puede realizarse con una wallet en la red de Ethereum.

Puede vincular su wallet a su dirección de correo electrónico en cualquier momento en el futuro para mintear sus POAP en la blockchain (y, posteriormente, almacenarlos en su wallet). </p>
  </details>  

  
  <details class="faq__detail">
    <summary  class="faq__summary"><span class="faq__question">¿Qué wallet utilizar para almacenar mis POAP?</span></summary>
    <p class="faq__text">Puedes utilizar MetaMask , Rainbow o Rabby como wallet de Ethereum. Estas son buenas opciones con amplia compatibilidad con muchas aplicaciones Web3. Ten mucho cuidado de no enviar tus POAPs a una cartera sobre la que no tengas control directo, o que no esté conectada con la Blockchain Gnosis (antes xDai), o perderás el acceso a ellos para siempre.</p>
  </details> 
  
  <details class="faq__detail">
    <summary  class="faq__summary"><span class="faq__question">¿Puedo mintear un POAP en la address de mi exchange?</span></summary>
    <p class="faq__text">No, los exchanges no te permiten la gestión de tus poap.</p>
  </details>   
  <h1 class="faq__heading_poaps">Nuestros POAPs</h1>
  <Community data={communities} />

</div>

          
        </div>
      </Page>
    </>
  );
};

export async function getServerSideProps({ req }) {
  let response = await getData(`${API_URL}/communities`);
  return {
    props: {
      communities: response,
    },
  };
}

export default Poap;
