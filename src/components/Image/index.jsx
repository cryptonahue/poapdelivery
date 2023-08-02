import Image from "next/image";

const Img = (props) => {
	return <Image layout="responsive" placeholder="blur" {...props} />;
};

export default Img;


