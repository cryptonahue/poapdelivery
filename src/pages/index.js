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
        const res = await axios.get("https://backend.defilatam.com/test.php");
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
              <Typography variant="h4">Claim POAP</Typography>
              
              {/*{ip}*/}
            </div>
            <Spacing space="10" />
            <Typography variant="body1" className="body2 poap-titulo">
            Insert secret key word
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
                      placeholder="Enter the secret word"
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
                    CLAIM
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
