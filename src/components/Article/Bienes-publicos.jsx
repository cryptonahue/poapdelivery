import { useEffect, useState } from "react";
import axios from "axios";
import Typography from "@mui/material/Typography";
import MarkDown from "@/components/MarkDown";
import Avatar from "@mui/material/Avatar";
import Head from "next/head";
import { Shared, Shared2 } from "@/components/Shared";
import Image from "@/components/Image";
import validateDate from "@/utils/validateDate";
import evalueMInutes from "@/utils/evalueMInutes";
import { API_URL } from "../../constants/env";
import defaultApp from "../../constants/default";

const API_CURRENCY = "https://api.coingecko.com";

const Article = ({ currency = null, item, shared, shared2 }) => {
  const {
    title,
    description,
    content,
    author,
    image,
    moneda,
    published_at,
    users_permissions_user,
    category,
    slug,
    twitter,
    website,
    discord,
    medium,
    telegramcanal,
    telegramgrupo,
    blog,
  } = item;

  const [currentCurrency, setCurrentCurrency] = useState(null);

  useEffect(() => {
    if (currency && moneda) {
      (async function getCurrency() {
        let keyword = moneda.toLowerCase();
        let response = await axios.get(
          `${API_CURRENCY}/api/v3/simple/price?ids=${keyword}&vs_currencies=usd`
        );
        if (response.data[keyword]) {
          setCurrentCurrency(response.data[keyword].usd);
        }
        // console.log({ response });
      })();
    }
  }, [currency, moneda]);

  return (
    <>
      <Head>
        <title>Comunidad DeFi y Web3</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Comunidad DeFi y Web3" />
        <meta property="og:site_name" content="DeFi LATAM" />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content={"https://backend.defilatam.com" + image.url}
        />
        <meta property="og:image:width" content="100" />
        <meta property="og:image:height" content="100" />

        <meta name="telegram:title" content="Comunidad DeFi y Web3" />
        <meta name="telegram:description" content={description} />
        <meta
          name="telegram:image"
          content={"https://backend.defilatam.com" + image.url}
        />
        <meta property="telegram:image:height" content="100" />
        <meta property="telegram:image:width" content="100" />

        <meta name="twitter:title" content="Comunidad DeFi y Web3" />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content={"https://backend.defilatam.com" + image.url}
        />
        <meta property="twitter:image:height" content="100" />
        <meta property="twitter:image:width" content="100" />
      </Head>
      <div className="Contenedor-proyect" id="Contenedor-proyect">
        <div className="cont-title-display" id="cont-title">
          <h1>{title}</h1>
        </div>
        <div className="cont-categoria" id="cont-categoria">
          <span className="proyect-category2">{category.name}</span>
        </div>
        <div className="Contenedor-proyect-grid1" id="Contenedor-proyect-grid1">
          <div className="cont-img" id="cont-img">
            {image && (
              <Image width="100%" height={100} src={`${API_URL}${image.url}`} />
            )}
          </div>
          <div className="cont-redes" id="cont-redes">
            <div className="cont-title" id="cont-title">
              <h1>{title}</h1>
            </div>
            <div className="cont-categoria" id="cont-categoria">
              <span className="proyect-datos2">{category.name}</span>
            </div>
            <div className="cont-redes-icons" id="cont-redes-icons">
              {twitter ? (
                <a href={twitter} target="_blank">
                  <img
                    src="/icons/twitter2.svg"
                    width="25px"
                    height="25px"
                    alt="twitter"
                  />
                </a>
              ) : (
                ""
              )}
              {website ? (
                <a href={website} target="_blank">
                  <img
                    src="/icons/web.svg"
                    width="25px"
                    height="25px"
                    alt="website"
                  />
                </a>
              ) : (
                ""
              )}
              {discord ? (
                <a href={discord} target="_blank">
                  <img
                    src="/icons/discord2.svg"
                    width="25px"
                    height="25px"
                    alt="discord"
                  />
                </a>
              ) : (
                ""
              )}
              {medium ? (
                <a href={medium} target="_blank">
                  <img
                    src="/icons/medium.svg"
                    width="25px"
                    height="25px"
                    alt="medium"
                  />
                </a>
              ) : (
                ""
              )}
              {telegramgrupo ? (
                <a href={telegramgrupo} target="_blank">
                  <img
                    src="/icons/telegram2.svg"
                    width="25px"
                    height="25px"
                    alt="telegram-grupo"
                  />
                </a>
              ) : (
                ""
              )}
              {telegramcanal ? (
                <a href={telegramcanal} target="_blank">
                  <img
                    src="/icons/telegram2.svg"
                    width="25px"
                    height="25px"
                    alt="telegram-canal"
                  />
                </a>
              ) : (
                ""
              )}
              {blog ? (
                <a href={blog} target="_blank">
                  <img
                    src="/icons/blog.svg"
                    width="25px"
                    height="25px"
                    alt="blog"
                  />
                </a>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="cont-redes-icons-display" id="cont-redes-icons">
          {twitter ? (
            <a href={twitter} target="_blank">
              <img
                src="/icons/twitter2.svg"
                width="25px"
                height="25px"
                alt="twitter"
              />
            </a>
          ) : (
            ""
          )}
          {website ? (
            <a href={website} target="_blank">
              <img
                src="/icons/web.svg"
                width="25px"
                height="25px"
                alt="website"
              />
            </a>
          ) : (
            ""
          )}
          {discord ? (
            <a href={discord} target="_blank">
              <img
                src="/icons/discord2.svg"
                width="25px"
                height="25px"
                alt="discord"
              />
            </a>
          ) : (
            ""
          )}
          {medium ? (
            <a href={medium} target="_blank">
              <img
                src="/icons/medium.svg"
                width="25px"
                height="25px"
                alt="medium"
              />
            </a>
          ) : (
            ""
          )}
          {telegramgrupo ? (
            <a href={telegramgrupo} target="_blank">
              <img
                src="/icons/telegram2.svg"
                width="25px"
                height="25px"
                alt="telegram-grupo"
              />
            </a>
          ) : (
            ""
          )}
          {telegramcanal ? (
            <a href={telegramcanal} target="_blank">
              <img
                src="/icons/telegram2.svg"
                width="25px"
                height="25px"
                alt="telegram-canal"
              />
            </a>
          ) : (
            ""
          )}
          {blog ? (
            <a href={blog} target="_blank">
              <img
                src="/icons/blog.svg"
                width="25px"
                height="25px"
                alt="blog"
              />
            </a>
          ) : (
            ""
          )}
        </div>
        
        <div className="Markdown_container1">
          <div className="title-descripcion-proyect">
            <h2>Descripción del proyecto</h2>
          </div>
          <div className="Markdown_espacio">
            {content && <MarkDown>{content}</MarkDown>}
          </div>
          <div>
            <div className="hr-pro">
              <hr className="disclaimer_hr" />
            </div>
            <div className="disclaimer_container">
              <small className="disclaimer_text">
                Las opiniones, análisis, tutoriales, guías, experiencias y todo
                el contenido volcado en Academia DeFi LATAM y su comunidad son
                subjetivas, con fines educativos. En ningún momento constituyen
                recomendaciones de inversión. La finalidad de nuestra Academia,
                Blog y comunidad es educativa. El mercado de criptomonedas es
                volátil y conlleva riesgos elevados. Es carga del usuario
                contrastar la información publicada con otros sitios y hacer su
                propia investigación. Nuestro contenido es gratuito y creado
                desde la comunidad. Nadie del equipo de DeFi LATAM ni de la
                comunidad te contactará para inversiones o pagos. Evita caer en
                estafas.
              </small>
            </div>
          </div>
        </div></div>
      {/* <div className="contenedor-shared">
          <div className="border-shared">
            <span>
              <span>Compartir</span>
              {shared && <Shared title={title} content={description} />}
            </span>
          </div>
        </div> */}
    </>
  );
};

export default Article;
