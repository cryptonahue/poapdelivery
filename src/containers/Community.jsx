import { API_URL } from "../constants/env";
import Image from "next/image";
import orderArrayByDate from "@/utils/orderByDate";

const Community = ({ data = [] }) => {
  return (
    <div className="Community">
      {orderArrayByDate(data, "fecha").map((item, index) => (
        <a href={item.alt}>
        <Image
          width="100"
          height="100"
          key={`community-${index}`}
          className="Community-image"
          alt={item.published_at}
          src={`${API_URL}${item.avatar.url}`}
        ></Image></a>
         ))}
    </div>
  );
};

export default Community;
