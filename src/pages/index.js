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
        <title>Get Your POAP Link | Proof of Attendance Certificates</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="POAP Delivery" />
        <meta property="og:site_name" content="POAP Delivery" />
        <meta property="og:description" content="Claim your POAP link and get your unique proof of attendance certificate. Easily distribute POAP links for your events or activities. Join now and commemorate your participation!"/>

        <meta property="og:type" content="article" />
        <meta property="og:image" content="/img/thumbnail.png" />
        <meta property="og:image:width" content="100" />
        <meta property="og:image:height" content="100" />

        <meta name="telegram:title" content="POAP Delivery" />
        <meta
          name="telegram:description"
          content="Administer & Claim POAP NFTs | Proof of Attendance"
        />
        <meta name="telegram:image" content="/img/thumbnail.png" />
        <meta property="telegram:image:height" content="100" />
        <meta property="telegram:image:width" content="100" />

        <meta name="twitter:title" content="POAP Delivery" />
        <meta
          name="twitter:description"
          content="Administer & Claim POAP NFTs | Proof of Attendance"
        />
        <meta name="twitter:image" content="/img/thumbnail.png" />
        <meta property="twitter:image:height" content="100" />
        <meta property="twitter:image:width" content="100" />
      </Head>
      <Page title="POAP Delivery">
        <div className="Container-poap">
            <div className="poap-titulo">Claim Your POAP Link</div>
            <Spacing space="10" />
          
         
            
            <form onSubmit={handleSubmit(onSubmit)}>
            <Spacing space="10" />
            <div>Enter the secret keyword provided to access your exclusive POAP link</div>
            <Spacing space="10" />
           
            <div className="poap">
            <Spacing space="20" />
            <center>
              <input
                type="text"
                name="keyword"
                placeholder="Enter the secret word"
                {...register("keyword")}
                class="input"
                style={{ textAlign: "center" }}
              ></input>
            
              <Spacing space="20" />
              {isSubmitting && (
                <>
                  <LinearProgress color="secondary" />
                </>
              )}
              <Spacing space="10" />
              <div className="recaptcha_text">Complete the reCAPTCHA</div>
              <Spacing space="20" />
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6Lf5xGImAAAAAM5BPbd3aRsFzCUQDMFQ9QTcT_nE"
                onChange={onChange}
              />
                <Spacing space="10" />
                </center>
             </div>
             <Spacing space="10" />
             <button class="button_claim">
                <p
                  type="submit"
                  variant="contained"
                  className="text"
                  disabled={isSubmitting && "true"}
                >
                  CLAIM
                </p>
              </button>
            </form>
            <Spacing space="50" />
            <div className="poap-titulo">
            Delivery your POAP Link
            </div>
            <Spacing space="20" />
            <div>Generate your unique delivery  links and distribute</div>
            <div> 
            <Spacing space="20" />
              <button class="button_claim">
                <p
                  type="submit"
                  variant="contained"
                  className="text"
                >
                  CREATE DELIVERY
                </p>
              </button></div>

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
