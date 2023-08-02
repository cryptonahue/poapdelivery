import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import useMediaQuery from "@mui/material/useMediaQuery";
import Slide from "./Slide";
import "swiper/swiper.min.css";

SwiperCore.use([Pagination, Navigation]);

const Slider = ({ posts, slidesPerView }) => {
	const matches = useMediaQuery("(max-width:640px)");

	return (
		<>
			<Swiper
				pagination={{
					type: "slider",
				}}
				navigation={matches ? false : true}
				className="mySwiper"
				id="swiper_slider"
				loop={true}
				slidesPerView={slidesPerView ? slidesPerView : 1}
			>
				{posts.map((item, index) => (
					<SwiperSlide key={index}>
						<Slide item={item} />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default Slider;
