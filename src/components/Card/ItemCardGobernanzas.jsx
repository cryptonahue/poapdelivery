import { API_URL } from "../../constants/env";
import Link from "next/link";
import Avatar from "@mui/material/Avatar";
import Image from "@/components/Image";
import { useNearScreen } from "@/hooks/useNearScreen";
import minimalBody from "@/utils/minimalBody";
import validateDate from "@/utils/validateDate";
import defaultApp from "@/constants/default";
import ArrowIcon from "@mui/icons-material/ArrowRightAlt";

const ItemCardGobernanzas = ({ item, to }) => {
  const {
    title,
    description,
    category,
    author,
    slug,
    users_permissions_user,
    date_published,
    image,
  } = item;
  const [isNear, fromRef] = useNearScreen();
  const slugContext = `/${to}/${slug}`;
  console.log({ users_permissions_user });
  return (
    <div ref={fromRef}>
      {isNear && (
        <Link href={slugContext}>
          <a href={slugContext}>
            <div className="ItemPost__container">
              <div className="ItemPost__image">
                {image && (
                  <Image
                    width="100%"
                    height={60}
                    src={`${API_URL}${image.url}`}
                  />
                )}
              </div>
              <div className="ItemPost__info">
                {/*If exist category*/}
                <div className="ItemPost__categoria">
                  {category ? category.name : "Sin categoría"}
                </div>

                <div className="subtitle1">{title ? title : "Sin título"}</div>

                <div className="descripcion">
                  {description ? (
                    minimalBody(description, 100)
                  ) : (
                    <>No hay contenido para mostrar.</>
                  )}
                </div>
                <div className="ItemPost__user">
                  <div className="ItemPost__user-cont">
                    <div className="ItemPost__user-image">
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
                    <div className="ItemPost__user-info">
                      <div>
                        <b className="Post__user-info_username">
                          {users_permissions_user &&
                            users_permissions_user.username}
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
          </a>
        </Link>
      )}
    </div>
  );
};

export default ItemCardGobernanzas;
