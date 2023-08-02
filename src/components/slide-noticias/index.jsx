import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import useMediaQuery from "@mui/material/useMediaQuery";
import Slide from "./Slide";
import {Titles} from "@/components/Card";
import Typography from "@mui/material/Typography";
import "swiper/swiper.min.css";

SwiperCore.use([Pagination, Navigation]);

const Slider = ({ posts }) => {
	const matchesss = useMediaQuery("(max-width:550px)");
	const matches2 = useMediaQuery("(max-width:1050px)");
	const matches3 = useMediaQuery("(max-width:600px)");

	return (
		<>
		<div className="grup_title">
			{Titles("Noticias")}	
		{matches2?matches3?<Swiper
				pagination={{
					type: "slider",
				}}
				className="mySwiper2"
				id="mySwiper"
				loop={true}
				slidesPerView={1}
			>
				{posts.map((item, index) => (
					<SwiperSlide slidesPerView={2} className="mySwiper1" key={index}>
						<Slide slidesPerView={2}   item={item} />
					</SwiperSlide>
				))}
			</Swiper>:<Swiper
				pagination={{
					type: "slider",
				}}
				className="mySwiper2"
				id="mySwiper"
				loop={true}
				slidesPerView={2} 
				spaceBetween={10}
			>
				{posts.map((item, index) => (
					<SwiperSlide slidesPerView={2} spaceBetween={10} className="mySwiper3" key={index}>
						<Slide slidesPerView={2} spaceBetween={10}  item={item} />
					</SwiperSlide>
				))}
			</Swiper>:<Swiper
				pagination={{
					type: "slider",
				}}
				className="mySwiper2"
				id="mySwiper"
				loop={true}
				slidesPerView={3} 
			>
				{posts.map((item, index) => (
					<SwiperSlide slidesPerView={2} className="mySwiper3"   key={index}>
						<Slide slidesPerView={2}   item={item} />
					</SwiperSlide>
				))}
			</Swiper>}
			</div>
		</>
	);
};

export default Slider;
