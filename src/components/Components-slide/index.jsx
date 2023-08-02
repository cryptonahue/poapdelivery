import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import useMediaQuery from "@mui/material/useMediaQuery";
import Slide from "./Slide";
import "swiper/swiper.min.css";

SwiperCore.use([Pagination, Navigation]);

const Slider = ({ posts }) => {
	const matches = useMediaQuery("(max-width:600px)");

	return (
		<>
			<Swiper
				pagination={{
					type: "slider",
				}}
				className="mySwiper"
				id="mySwiper"
				loop={true}
				slidesPerView={3} spaceBetween={30}
			>
				{posts.map((item, index) => (
					<SwiperSlide slidesPerView={3} spaceBetween={30} key={index}>
						<Slide slidesPerView={3} spaceBetween={30} item={item} />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default Slider;
