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
             
              <input type="text" 
                      name="keyword"
                      placeholder="Enter the secret word"
                      {...register("keyword")} class="input"></input>
                {" "}
                {/*className="form-poap"*/}
                <div className="form-poap2">
                  <div className="form-input-palabra">

                
                   {/*  <Input
                      type="text"
                      name="keyword"
                      placeholder="Enter the secret word"
                      {...register("keyword")}
                      variant="outlined"
                      fullWidth
                    /> */}
                  </div>

                {/*   <Button
                    type="submit"
                    variant="contained"
                    className="boton-reclamar"
                    disabled={isSubmitting && "true"}
                  >
                    CLAIM
                  </Button> */}

                  <button class="button">
 {/*  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z" fill="white"></path>
  </svg> */}
  <p type="submit"
                    variant="contained"
                    className="text"
                    disabled={isSubmitting && "true"}>CLAIM</p>
</button>
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
