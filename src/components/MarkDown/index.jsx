import { useState, useEffect, useRef } from "react";
import { API_URL } from "../../constants/env";
import Markdown from "markdown-to-jsx";
import Backdrop from "@mui/material/Backdrop";
import { Tweet } from "react-twitter-widgets";
import Image from "next/image";

const Code = ({ children, ...props }) => {
	return <div {...props}>{children}</div>;
};

const MyParagraph = ({ children, ...props }) => <p {...props}>{children}</p>;

const Ancle = ({ children, ...props }) => {
	const { className, href, title } = props;
	return (
		<>
			{title ? (
				<div className="Link__relationated-markdow">
					<a target="_blank" href={href}>{children}</a>
				</div>
			) : (
				<a target="_blank" title={title} className={className} href={href}>
					{children}
				</a>
			)}
		</>
	);
};

const Img = ({ src, ...props }) => {
	const { alt, title } = props;
	const [open, setOpen] = useState(false);
	const containerRef = useRef(null);

	const callbackFunction = (entries) => {
		const [entry] = entries;
		if (!entry.isIntersecting) {
			setOpen(false);
		}
	};

	const options = {
		root: null,
		rootMargin: "0px",
		threshold: 1.0,
	};

	useEffect(() => {
		const observer = new IntersectionObserver(callbackFunction, options);
		if (containerRef.current) observer.observe(containerRef.current);

		return () => {
			if (containerRef.current) observer.unobserve(containerRef.current);
		};
	}, [containerRef, options]);

	return (
		<>
			<div className="Ancle_container-a1">
				<figure onClick={() => setOpen(true)}>
					<img
						alt={alt && alt}
						title={alt && alt}
						src={`${API_URL}${src}`}
						ref={containerRef}
					/>
					<figcaption>{title && title}</figcaption>
				</figure>
			</div>
			<Backdrop style={{zIndex:1}} onClick={() => setOpen(false)} open={open}>
					<img
					className="imggrande"
						alt={alt && alt}
						title={alt && alt}
						src={`${API_URL}${src}`}
					/>
			</Backdrop>
	
		</>
	);
};

const Blockquote = ({ children, ...props}) => {
	if (children[1]){
		const childrenTweet = children[1].props.children[1];
		const urlPath = childrenTweet.props.href ? childrenTweet.props.href : childrenTweet;
		const clearCharacters = urlPath.replace(/[^\w\s]/gi, "/");
		// console.log(clearCharacters.split("ref_src")[0].split("/status/")[1].split("/")[0])
		return (
			<Tweet
				tweetId={clearCharacters.split("ref_src")[0].split("/status/")[1].split("/")[0]}
				// {...props}
			/>
		);
	}else{
		return (
			<Tweet/>
		);
	}
};

// const Relationated = ({ children, ...props }) => {
// 	console.log({ children, props });
// 	return (
// 		<div className="Link__relationated-markdow">
// 			<a href="#">{children}</a>
// 		</div>
// 	);
// };

const MarkDown = ({ children }) => {
	const options = {
		wrapper: "article",
		overrides: {
			code: {
				component: Code,
				props: {
					className: "code_mk",
				},
			},
			a: {
				component: Ancle,
				props: {
					className: "target_link",
				},
			},
			img: {
				component: Img,
				props: {
					className: "target_link",
				},
			},
			
			blockquote: {
				component: Blockquote,
				 props: {
					className: "",
				 },
			}, 
		},
	};

	return <Markdown options={options}>{children}</Markdown>;
};

export default MarkDown;