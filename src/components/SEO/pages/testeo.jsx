import getData from "../../../services/getData";
import { API_URL } from "../../../constants/env";
import Head from "next/head";

const HomePageSEO = ({   
  
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
   
<title>{Seo.title}</title>
{/* <link rel="icon" href="/favicon.ico" />
<meta property="og:title" content={title} />
<meta property="og:site_name" content="DeFi LATAM" />
<meta property="og:description" content={description} />
<meta property="og:type" content="article" />
<meta
  property="og:image"
  content={`${API_URL}${about.hero.url}`}
/>
<meta property="og:image:width" content="100" />
<meta property="og:image:height" content="100" />

<meta name="telegram:title" content={title} />
<meta name="telegram:card" content="summary_large_image" />
<meta name="telegram:description" content={description} /> */}


{/* <meta
  name="telegram:image"
  content={"https://backend.defilatam.com" + image.url}
/>
<meta property="telegram:image:height" content="100" />
<meta property="telegram:image:width" content="100" />

<meta name="twitter:title" content={title} />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:description" content={description} />
<meta
  name="twitter:image"
  content={"https://backend.defilatam.com" + image.url}
/>
<meta property="twitter:image:height" content="100" />
<meta property="twitter:image:width" content="100" /> */}


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

export default HomePageSEO;


/* 
const seooptions = [

{
  content-title: "",
  content-sitename: "",
  content-description: "",
  content-type: "", home, article
  content-img: "",
  content-url: "",
  content-img-width: "",
  content-img-height: "",
  content-keywords: "",
  content-twitter-author: "",
  content-language: "",

}]

<meta name="title" content="Werwer">
<meta name="description" content="asdaddasd">
<meta name="keywords" content="asdad,asdasd,asdasdasd,">
<meta name="robots" content="index, follow">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="language" content="Spanish">
<meta name="author" content="@0x">
</meta>

<meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="@cbssports" />
<meta name="twitter:creator" content="@KBergCBS" />
<metaname="twitter:url" content="http://www.cbssports.com/nba/writer/ken-berger/24723463/for-many-nba-assistants-the-road-to-glory-is-well-traveled" />
<meta name="twitter:title" content="For many NBA assistants, the road to glory is well-traveled" />
<metaname="twitter:description" content="Ken Berger catches up with New Orleans Pelicans assistant Bryan Gates, whose circuitous coaching path meant he celebrated Christmas at Denny&#39;s five years in a row ... but never the same one." />
<metaname="twitter:image" content="http://cbssports.com/images/visual/whatshot/092414bryangates.jpg" /></meta>


<meta name="telegram:card" content="summary_large_image" />
<meta name="twitter:creator" content={seo.twitterUsername} />
<meta property="telegram:image:width" content="100" />



<title>{title}</title>
<link rel="icon" href="/favicon.ico" />
<meta property="og:title" content={title} />
<meta property="og:site_name" content="DeFi LATAM" />
<meta property="og:description" content={description} />
<meta property="og:type" content="article" />
<meta
  property="og:image"
  content={"https://backend.defilatam.com" + image.url}
/>
<meta property="og:image:width" content="100" />
<meta property="og:image:height" content="100" />

<meta name="telegram:title" content={title} />
<meta name="telegram:card" content="summary_large_image" />
<meta name="telegram:description" content={description} />
<meta
  name="telegram:image"
  content={"https://backend.defilatam.com" + image.url}
/>
<meta property="telegram:image:height" content="100" />
<meta property="telegram:image:width" content="100" />

<meta name="twitter:title" content={title} />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:description" content={description} />
<meta
  name="twitter:image"
  content={"https://backend.defilatam.com" + image.url}
/>
<meta property="twitter:image:height" content="100" />
<meta property="twitter:image:width" content="100" />

const Homepage =   (
{

  <title>Comunidad DeFi LATAM</title>
  <link rel="icon" href="/favicon.ico" />
  <meta name="theme-color" content="#0d1527" />
  <meta
    data-rh="true"
    property="og:image"
    content="https://www.defilatam.com/_next/image?url=https%3A%2F%2Fbackend.defilatam.com%2Fuploads%2F854_480_b4de096ada.png&w=3840&q=75"
  />
  <meta property="og:title" content="DeFi LATAM" />
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
  <meta name="telegram:description" content="Comunidad DeFi y Web3" />
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

);

export default Homepage;
 */