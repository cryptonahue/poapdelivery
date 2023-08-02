import Link from "next/link";
import { useModal } from "@/context/modalContext";
import { useAuth } from "@/context/authContext";
import { Fragment, useState } from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CloseIcon from "@mui/icons-material/Close";
import ButtonBase from "@mui/material/ButtonBase";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Avatar from "@mui/material/Avatar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Container from "@mui/material/Container";
import styles from "@/styles/components/Nav.module.css";
import useStyles from "./styles";

const list = [
  {
    text: "Inicio",
    to: "/",
  },
  {
    text: "Tutoriales",
    to: "/tutoriales",
  },
  {
    text: "Blog",
    to: "/blog",
  },
  {
    text: "Noticias",
    to: "/noticias",
  },
  {
    text: "Proyectos",
    to: "/proyectos",
  },
  {
    text: "Poap",
    to: "/poap",
  },
];

const NavBar = () => {
  const { handleModal } = useModal();
  const {
    initialState: { user },
    logoutFunc,
  } = useAuth();

  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeSesion = () => {
    logoutFunc();
    handleClose();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();

  return (
    <Container>
      <header className="anor_fn_header">
        <div className="container">
          <div className="header_in">
            <div className="header_left">
              <div className="fn_logo">
                <Link href="/">
                  <a>
                    <div><img
                        src="/img/logo.svg"
                        alt=""
                        width="40px"
                        height="auto"
                      ></img></div><div> POAPDelivery.xyz</div>
                  </a>
                </Link>
              </div>
            </div>

            <div className="header_right">
              <div className="fn_search_top">
                <input type="text" name="s" placeholder="Buscar" />
                <input type="submit" value="" />
                <img src="/svg/search.svg" alt="" className="fn__svg"></img>
              </div>

              <div className="fn_signin">
                {user ? (
                  <>
                    <ButtonBase
                      aria-controls="simple-menu"
                      aria-haspopup="true"
                      className="Profile__container"
                      onClick={handleClick}
                    >
                      <span>
                        <Avatar
                          sx={{ width: 40, height: 40 }}
                          alt={user.displayName}
                          width="50px"
                          height="50px"
                          src={user && user.photoURL}
                        />
                      </span>
                    </ButtonBase>
                    <Menu
                      anchorEl={anchorEl}
                      getContentAnchorEl={null}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      className="boton_home"
                    >
                      <MenuItem onClick={closeSesion}>
                        <ExitToAppIcon fontSize="small" />
                        &nbsp;
                        <small>Cerrar sesión</small>
                      </MenuItem>
                    </Menu>
                  </>
                ) : (
                  <>
                    <div>
                      <Button
                        onClick={() => handleModal("signin", true)}
                        color="inherit"
                      >
                        <AccountCircleIcon fontSize="large" />
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="anor_fn_mobile_menu">
        <div className="mobile_menu_inner">
          <div className="mobile_in">
            <div className="logo">
              <Link href="/">
                <a>
                <div><img
                        src="/img/logo.svg"
                        alt=""
                        width="40px"
                        height="auto"
                      ></img></div><div> POAPDelivery.xyz</div>
                </a>
              </Link>
            </div>
            <div className="trigger">
              <div className="hamburger hamburger--slider">
                <div className="">
                  <div>
                    <IconButton
                      onClick={() => setOpen(true)}
                      edge="start"
                      color="white"
                      aria-label="menu"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16m-7 6h7"
                        />
                      </svg>
                    </IconButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <div className="header-main-burger">
          <div>
            <div className="header-burger">
              <div>
                
              </div>

              <div>
                <IconButton
                  className="Menu_Button"
                  onClick={() => setOpen(false)}
                  color="inherit"
                >
                  <CloseIcon />
                </IconButton>
              </div>
            </div>
            

            <nav className="menu-burguer">
              <input type="checkbox" id="drop" />

              <ul>
                <li>
                  
                  <a href="/claim-poap">Claim POAP</a>
                  
                
                </li>
                <li>
                
                  <Link href="/delivery-poap">
                    <a>Delivery POAP</a>
                  </Link>
                </li>
                <li>
                  <Link href="/faq">
                    <a>FAQ</a>
                  </Link>
                </li>
                <li>
                  <Link href="/donate">
                    <a>Donate</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div style={{ padding: "10px" }}>
            {user && (
              <>
              {/*   <ButtonBase
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  className="Profile__container"
                  onClick={handleClick}
                >
                  <span>
                    <Avatar
                      sx={{ width: 40, height: 40 }}
                      alt={user.displayName}
                      width="50px"
                      height="50px"
                      src={user && user.photoURL}
                    />
                  </span>
                  <div className="AvatarContainerLogin">
                    <div className="UserName">{user.displayName}</div>
                    <div className="UserEmail">{user.email}</div>
                  </div>
                </ButtonBase> */}
              </>
            )}
            {user === null && (
              <>
               {/*  <Button
                  className="boton-comenzar-curso"
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={() => handleModal("signin", true)}
                  fullWidth
                >
                  Iniciar sesión
                </Button>

                <Button
                  className="boton-comenzar-curso buttom_margin_top"
                  onClick={() => handleModal("signin", true)}
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  fullWidth
                >
                  Registrarse
                </Button> */}
              </>
            )}
          </div>
        </div>
      </Drawer>
    </Container>
  );
};

export default NavBar;
