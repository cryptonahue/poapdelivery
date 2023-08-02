import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import Typography from "@mui/material/Typography";
import MarkDown from "@/components/MarkDown";
import Avatar from "@mui/material/Avatar";
import { Shared, Shared2 } from "@/components/Shared";
import Image from "@/components/Image";
import validateDate from "@/utils/validateDate";
import evalueMInutes from "@/utils/evalueMInutes";
import { API_URL } from "../../constants/env";
import defaultApp from "../../constants/default";
import Disclaimer from "@/components/Disclaimer";

const API_CURRENCY = "https://api.coingecko.com";

const ArticleDefiniciones = ({ currency = null, item, shared, shared2 }) => {
  const {
    title,
    description,
    content,
    author,
    image,
    moneda,
    published_at,
    data_published,
    users_permissions_user
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
      })();
    }
  }, [currency, moneda]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content="DeFi LATAM" />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
      {/*   <meta
          property="og:image"
          content={"https://backend.defilatam.com" + image.url}
        /> */}
        <meta property="og:image:width" content="100" />
        <meta property="og:image:height" content="100" />

        <meta name="telegram:title" content={title} />
        <meta name="telegram:card" content="summary_large_image" />
        <meta name="telegram:description" content={description} />
    {/*     <meta
          name="telegram:image"
          content={"https://backend.defilatam.com" + image.url}
        /> */}
        <meta property="telegram:image:height" content="100" />
        <meta property="telegram:image:width" content="100" />

        <meta name="twitter:title" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content={description} />
     {/*    <meta
          name="twitter:image"
          content={"https://backend.defilatam.com" + image.url}
        /> */}
        <meta property="twitter:image:height" content="100" />
        <meta property="twitter:image:width" content="100" />
      </Head>
      <div className="Post__container1">
        <div className="title-post">
          <Typography variant="h1">{title ? title : "Sin título"}</Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
       {/*    <a href={users_permissions_user.twitter} target="_blank"> */}
            <div className="Post__user">
              <div className="Post__user-image">
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
              <div className="Post__user-info">
{/*                 <b className="user_post">{users_permissions_user.username}</b> */}
                <br />
                <span>
                  <small className="Post__user-info_date">
                   {/*  {validateDate(data_published)} */}
                  </small>
                </span>
                <p />
              </div>
            </div>
         {/*  </a> */}
          <div className="Post__infor-categories">
            {shared && <Shared2 title={title} content={description} />}
            <small className="Lectura">
              {`Lectura de ${content && evalueMInutes(content)} minutos`}
            </small>
          </div>
        </div>
        <br></br>
        <div className="Post__image1">
  {/*         {image && (
            <Image width="100%" height={60} src={`${API_URL}${image.url}`} />
          )} */}
        </div>
        <br></br>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="Post__infor-categories">
            <p>Compartir esta publicación</p>
          </div>

          <div className="Post__infor-categories">
            {shared && <Shared title={title} content={description} />}
          </div>
        </div>
      </div>
      <br></br>
      <div className="Markdown_container1 AlturaMinima500">
        {description && <MarkDown>{description}</MarkDown>}
        <Disclaimer></Disclaimer>
      </div>
    </>
  );
};

export default ArticleDefiniciones;
