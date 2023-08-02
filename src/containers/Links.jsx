import Button from "@mui/material/Button";

const Links = ({ list, ...rest }) => (
  <div className="Links">
    <div className="Links-list">
      {list
        .sort(function (a, b) {
          return new Date(b.fecha) - new Date(a.fecha);
        })
        .map((links, index) => (
          <div key={index}>
            {links.ventana == true ? (
              <a href={links.url} target="_blank">
                <div className="ItemLink__container">
                  <div className="ItemLink__info">
                    {/*If exist category*/}
                    <div className="links_titulo">{links.titulo}</div>
                    <hr className="hr_link" />
                    <div className="ItemLink__user">
                      <div className="ItemLink__user-info">
                        <p>{links.descripcion}</p>
                      </div>
                    </div>
                    <br></br>
                    <div className="boton_links_container">
                      <Button
                        size="large"
                        target="_blank"
                        variant="contained"
                        className="boton_link"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-arrow-narrow-right"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#0E162B"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <line x1="15" y1="16" x2="19" y2="12" />
                          <line x1="15" y1="8" x2="19" y2="12" />
                        </svg>
                      </Button>
                    </div>
                  </div>
                </div>
              </a>
            ) : (
              <a href={links.url}>
                <div className="ItemLink__container">
                  <div className="ItemLink__info">
                    {/*If exist category*/}
                    <div className="links_titulo">{links.titulo}</div>
                    <hr className="hr_link" />
                    <div className="ItemLink__user">
                      <div className="ItemLink__user-info">
                        <p>{links.descripcion}</p>
                      </div>
                    </div>
                    <br></br>
                    <div className="boton_links_container">
                      <Button
                        size="large"
                        target="_blank"
                        variant="contained"
                        className="boton_link"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-arrow-narrow-right"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#0E162B"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <line x1="15" y1="16" x2="19" y2="12" />
                          <line x1="15" y1="8" x2="19" y2="12" />
                        </svg>
                      </Button>
                    </div>
                  </div>
                </div>
              </a>
            )}
          </div>
        ))}
    </div>
  </div>
);

export default Links;
