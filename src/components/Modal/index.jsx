import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";

const Modal = ({ children, open, handleClose, ...props }) => {
	const [isBrowser, setIsBrowser] = useState(false);

	useEffect(() => {
		setIsBrowser(true);
	}, []);

	const modalContent = open ? (
		<Dialog
			PaperProps={{
				square: false,
			}}
			open={open}
			onClose={handleClose}
			{...props}
		>
			{children}
		</Dialog>
	) : null;

	if (isBrowser) {
		return ReactDOM.createPortal(
			modalContent,
			document.querySelector("#modal")
		);
	} else {
		return null;
	}
};

export default Modal;
