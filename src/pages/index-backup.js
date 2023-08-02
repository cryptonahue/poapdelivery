import { API_URL } from "../constants/env";
import Page from "@/components/Page";
import Slide from "@/components/Slide";
import Slide2 from "@/components/slide-noticias";
import Slide3 from "@/components/slide-blogs";
import Spacing from "@/components/Spacing";
import Link from "next/link";
import Button from "@mui/material/Button";
import { Social } from "@/components/Shared";
import Group from "@/components/Group";
import Group2 from "@/components/GroupProyect";
import Links from "@/containers/Links";
import getData from "../services/getData";
import getHighlights from "@/utils/getHighlights";
import getLastestPosts from "@/utils/getLastestPosts";
import orderArrayByDate from "@/utils/orderByDate";
import { HomeSEO }  from "@/components/SEO";


const Home = ({

  title,
  description,
  type,
  url,
  img_width,
  img_heiht,
  keywords,
  author,


  posts,
  proyects,
  featured,
  lastestPosts,
  lastestNews,
  lastestProyects,
  links,
  rekts,
}) => {
  return (
    <Page title="DeFi LATAM">
   <HomeSEO></HomeSEO> 
 
      <h1>{title}</h1>
      <Slide posts={featured} to="asdasd" />
      {/* <Spacing space="50" />
      <Links list={links} /> */}
      <Spacing space="50" />
      <Social />
      <Spacing space="50" />

      {/* <div className="contenedor_redes">
        <div className="contenedor_redes_izquierda">
          <div className="contenedor_twitter">
          <a href="https://twitter.com/DeFi_LATAM?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="true">Follow @DeFi_LATAM</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            <div className="contenedor_twitter1">
            <div className="icon-spoti">
              <div className="Redes">
                <a
                  href="https://open.spotify.com/show/3BQuz3YdP8B7y49HgUMhpe"
                  target="_blank"
                  rel="noopener"
                  title="Escucha nuestro Podcast"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-brand-spotify"
                    width="34"
                    height="34"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#1db954"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="12" cy="12" r="9" />
                    <path d="M8 11.973c2.5 -1.473 5.5 -.973 7.5 .527" />
                    <path d="M9 15c1.5 -1 4 -1 5 .5" />
                    <path d="M7 9c2 -1 6 -2 10 .5" />
                  </svg>
                </a>
              </div>
            </div>
            </div>
            <div className="boton-spoti">
              
            </div>
          </div>
          <div className="contenedor_instagram">
            <button></button>
          </div>
        </div>

        <div className="contenedor_spotify_derecha">
          <div className="ifram1">
            <iframe
              src="https://open.spotify.com/embed/episode/6hlAsZPr3gWRuYUrLzdANf?utm_source=generator&theme=0"
              width="100%"
              height="152"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </div>
          <div className="ifram1">
            <iframe
              src="https://open.spotify.com/embed/episode/089TFox2QtqutxJU3rnxsV?utm_source=generator&theme=0"
              width="100%"
              height="152"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </div>
          <div className="ifram1">
            <iframe
              src="https://open.spotify.com/embed/episode/6hlAsZPr3gWRuYUrLzdANf?utm_source=generator&theme=0"
              width="100%"
              height="152"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </div> */}
         {/* <div>
                
                 <Button
                className="BotonRedesSpotify"
                color="inherit"
                component="a"
                href="https://open.spotify.com/show/3BQuz3YdP8B7y49HgUMhpe"
                target="_blank"
                startIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-brand-spotify"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#f9f9f9"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="12" cy="12" r="9" />
                    <path d="M8 11.973c2.5 -1.473 5.5 -.973 7.5 .527" />
                    <path d="M9 15c1.5 -1 4 -1 5 .5" />
                    <path d="M7 9c2 -1 6 -2 10 .5" />
                  </svg>
                }
              >
                Seguí nuestro Podcast!
              </Button>
              </div>
        </div>
      </div> */}
      <div className="redes_Youtube">
        <div>
          <iframe
            width="280"
            height="150"
            src="https://www.youtube.com/embed/WaCF06LdAA8"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          
          ></iframe>
        </div>
        <div>
          <iframe
            width="280"
            height="150"
            src="https://www.youtube.com/embed/EVW-CihqeUQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
           
          ></iframe>
        </div>
        <div>
          <iframe
            width="280"
            height="150"
            src="https://www.youtube.com/embed/WIr_k4IwrcA"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         
          ></iframe>
        </div>

        <div>
          <iframe
            width="280"
            height="150"
            src="https://www.youtube.com/embed/qQmkP8Xndaw"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         
          ></iframe>
        </div>
      
        
      </div>

      <Slide2 posts={orderArrayByDate(lastestNews)} to="asdas222d" />

      <br />

      <Link href="/noticias">
        <div className="boton_container_home">
          <Button variant="outlined" color="inherit" className="boton_home">
            Ver todas las noticias
          </Button>
        </div>
      </Link>

      <Spacing space="50" />
      <Slide3 posts={orderArrayByDate(lastestPosts)}  to="asdas222d"/>
      <br />

      <Link href="/blog">
        <div className="boton_container_home">
          <Button variant="outlined" color="inherit" className="boton_home">
            Ingresar al blog
          </Button>
        </div>
      </Link>

      <Spacing space="50" />

      <Group2 title="Rekts" list={orderArrayByDate(rekts)} to="rekt" max={3} />

      <br />

      <Link href="/rekts">
        <div className="boton_container_rekts_proyectos">
          <Button variant="outlined" color="inherit" className="boton_home">
            Ver todos los rekts
          </Button>
        </div>
      </Link>

      <Spacing space="50" />
      <Group2 title="Proyectos" list={orderArrayByDate(lastestProyects)} to="proyectos" max={3} />
      <br />

      <Link href="/proyectos">
        <div className="boton_container_rekts_proyectos">
          {" "}
          <Button variant="outlined" color="inherit" className="boton_home">
            Ver todos los proyectos
          </Button>
        </div>
      </Link>
    </Page>
  );
};

export async function getServerSideProps() {
  let responses = await Promise.all([
    getData(`${API_URL}/articles`),
    getData(`${API_URL}/proyects`),
    getData(`${API_URL}/news-articles`),
    getData(`${API_URL}/links`),
    getData(`${API_URL}/rekts`),
  ]);

  let posts = responses[0];
  let proyects = responses[1];
  let news = responses[2];
  let links = responses[3];
  let rekts = responses[4];
  

  return {
    props: {
      posts: posts,
      proyects: proyects,
      featured: getHighlights(posts, proyects, news, rekts),
      lastestPosts: getLastestPosts(posts),
      lastestNews: getLastestPosts(news),
      lastestProyects: getLastestPosts(proyects),
      links: getLastestPosts(links),
      rekts: getLastestPosts(rekts),
    },
  };
}

export default Home;
