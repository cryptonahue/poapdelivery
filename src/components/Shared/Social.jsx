import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Social = () => {
  return (
    <>
      <center>
        <Typography variant="h4">Únete a la comunidad</Typography>
        <br />
        <div className="invitacion-comunidad-p">
          <p>Te invitamos a participar en nuestras redes, wagmi :)</p>
        </div>
        <br />
      </center>
      <Grid container className="Container__Community">
        <Grid item>
          <div className="Community__items">
            <div className="Redes">
              {" "}
              <a
                href="https://twitter.com/DeFi_LATAM"
                target="_blank"
                rel="noopener"
                title="Síguenos en Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-twitter"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#f9f9f9"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                </svg>
                <h3>Twitter</h3>
              </a>
            </div>
          </div>
        </Grid>
        <Grid item>
          <div className="Community__items">
            <div className="Redes">
              <a
                href="https://defilatam.com/comunidad"
                target="_blank"
                rel="noopener"
                title="Ingresá a nuestro server de Discord"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-discord"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#f9f9f9"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="9" cy="12" r="1" />
                  <circle cx="15" cy="12" r="1" />
                  <path d="M7.5 7.5c3.5 -1 5.5 -1 9 0" />
                  <path d="M7 16.5c3.5 1 6.5 1 10 0" />
                  <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-1 2.5" />
                  <path d="M8.5 17c0 1 -1.356 3 -1.832 3c-1.429 0 -2.698 -1.667 -3.333 -3c-.635 -1.667 -.476 -5.833 1.428 -11.5c1.388 -1.015 2.782 -1.34 4.237 -1.5l1 2.5" />
                </svg>
                <h3>Discord</h3>
              </a>
            </div>
          </div>
        </Grid>
        <Grid item>
          <div className="Community__items">
            <div className="Redes">
              <a
                href="https://www.youtube.com/c/DeFiLATAM_OG"
                target="_blank"
                rel="noopener"
                title="Mirá nuestros videos en Youtube"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-youtube"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#f9f9f9"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <rect x="3" y="5" width="18" height="14" rx="4" />
                  <path d="M10 9l5 3l-5 3z" />
                </svg>
                <h3>Youtube</h3>
              </a>
            </div>
          </div>
        </Grid>
        <Grid item>
          <div className="Community__items">
            <div className="Redes">
              <a
                href="https://t.me/DeFi_LATAM"
                target="_blank"
                rel="noopener"
                title="Se miembro de nuestro Telegram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-telegram"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#f9f9f9"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                </svg>
                <h3>Telegram</h3>
              </a>
            </div>
          </div>
        </Grid>
        <Grid item>
          <div className="Community__items">
            <div className="Redes">
              <a
                href="https://www.instagram.com/defilatam"
                target="_blank"
                rel="noopener"
                alt="Instagram"
                title="Síguenos en Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-instagram"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#f9f9f9"
                  fill="none"
                  strokeLinecap="round"
                  title="Instagram"
                  alt="Instagram"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <rect x="4" y="4" width="16" height="16" rx="4" />
                  <circle cx="12" cy="12" r="3" />
                  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                </svg>

                <h3>Instagram</h3>
              </a>
            </div>
          </div>
        </Grid>
        <Grid item>
          <div className="Community__items">
            <div className="Redes">
              <a
                href="https://open.spotify.com/show/2nrHx0HsLCw4oBBk5n3wN9"
                target="_blank"
                rel="noopener"
                title="Escucha nuestro Podcast"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-spotify"
                  width="36"
                  height="36"
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
                <h3>Spotify</h3>
              </a>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Social;
