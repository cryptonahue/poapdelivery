import getData from "../../../services/getData";
import { API_URL } from "../../../constants/env";
import Head from "next/head";

const HomeSEO = ({   
  
  title,
  description,
  type,
  Seo,
  url,
  img_width,
  img_heiht,
  keywords,
  author,
  image,

 }) => {
  return (
    
    <Head>
    <title>Comunidad DeFi LATAM</title>
    <link rel="icon" href="/favicon.ico" />
    <meta name="theme-color" content="#0d1527" />
    <meta
      data-rh="true"
      property="og:image"
      content="https://www.defilatam.com/_next/image?url=https%3A%2F%2Fbackend.defilatam.com%2Fuploads%2F854_480_b4de096ada.png&w=3840&q=75"
    />
    <meta property="og:title" content="Comunidad DeFi LATAM" />
    <meta property="og:site_name" content="DeFi LATAM" />
    <meta property="og:description" content="Comunidad DeFi y Web3" />
    <meta property="og:type" content="home" />
    <meta
      property="og:image"
      content="https://backend.defilatam.com/uploads/De_Fi_LATAM_838fe333a8.png"
    />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="480" />

    <meta name="telegram:card" content="summary_large_image" />
    <meta name="telegram:title" content="DeFi LATAM" />
    <meta
      name="telegram:description"
      content="Comunidad DeFi y Web3"
    />
    <meta
      name="telegram:image"
      content="https://backend.defilatam.com/uploads/De_Fi_LATAM_838fe333a8.png"
    />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="DeFi LATAM" />
    <meta name="twitter:description" content="Comunidad DeFi y Web3" />
    <meta
      name="twitter:image"
      content="https://backend.defilatam.com/uploads/De_Fi_LATAM_838fe333a8.png"
    />
  </Head>
      
     
     
 
    
    );
}

export async function getServerSideProps() {
  const response = await getData(`${API_URL}/home`);
  return {
    props: {
      home: response,
    },
  };
}

export default HomeSEO;
