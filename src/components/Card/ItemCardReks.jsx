import Link from "next/link";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Image from "@/components/Image";
import minimalBody from "@/utils/minimalBody";
import validateDate from "@/utils/validateDate";
// import evalueMInutes from "@/utils/evalueMInutes";
import { API_URL } from "../../constants/env";
import defaultApp from "@/constants/default";
import Button from "@mui/material/Button";
import ArrowIcon from "@mui/icons-material/ArrowRightAlt";
import LanguageIcon from "@mui/icons-material/Language";

import IconButton from "@mui/material/IconButton";
import TwitterIcon from "@mui/icons-material/Twitter";

const ItemCardProyect = ({ item, to }) => {
  const {
    title,
    description,
    category,
    content,
    author,
    slug,
    users_permissions_user,
    published_at,
    image,
    twitter,
    website,
    discord,
    medium,
    telegramcanal,
    telegramgrupo,
    date_published,
    blog,
  } = item;
  const slugContext = `/${to}/${slug}`;
  return (
    <Link href={slugContext}>
      <div className="todo-proyect">
        <div className="proyect-conteiner-div">
          <div className="proyect-conteiner-imgc">
            <Link href={slugContext}>
              <div className="proyect-imgc">
                <span>
                  {image && (
                    <Image
                      width="50"
                      height={50}
                      src={`${API_URL}${image.url}`}
                    />
                  )}
                </span>
              </div>
            </Link>
            <div className="display-datos">
              <div className="proyect-datos1">
                {title ? title : "Sin título"}
              </div>
              <div className="proyect-datos2">
                {category ? category.name : "Sin categoría"}
              </div>
              <div className="proyect-datos3">
                {twitter ? (
                  <a href={twitter} target="_blank">
                    <img src="/icons/twitter2.svg" width="25px" height="25px" />
                  </a>
                ) : (
                  ""
                )}
                {website ? (
                  <a href={website} target="_blank">
                    <img src="/icons/web.svg" width="25px" height="25px" />
                  </a>
                ) : (
                  ""
                )}
                {discord ? (
                  <a href={discord} target="_blank">
                    <img src="/icons/discord2.svg" width="25px" height="25px" />
                  </a>
                ) : (
                  ""
                )}
                {medium ? (
                  <a href={medium} target="_blank">
                    <img src="/icons/medium.svg" width="25px" height="25px" />
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
                    />
                  </a>
                ) : (
                  ""
                )}
                {blog ? (
                  <a href={blog} target="_blank">
                    <img src="/icons/blog.svg" width="25px" height="25px" />
                  </a>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="proyect-description">
            <p>{description}</p>
          </div>
          <div className="proyect-footer">
            <div className="proyect-footer-user">
              <div className="ItemProyect__user-image">
                {users_permissions_user && users_permissions_user.avatar && (
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
                <div className="ItemProyect__user-info">
                  <div className="Post__user-info_username_space">
                    <b className="Post__user-info_username">
                      {users_permissions_user.username}
                    </b>
                    <small className="Post__user-info_date">
                      {date_published && validateDate(date_published)}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItemCardProyect;
