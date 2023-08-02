import { Fragment, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import TwitterIcon from "@mui/icons-material/Twitter";
import CloseIcon from "@mui/icons-material/Close";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const options = [
	{
		title: "Comparte en Twiter",
		action: "http://www.twitter.com/share?url=",
		icon: <TwitterIcon fontSize="medium" />,
	},
	{
		title: "Comparte en Telegram",
		action: "https://telegram.me/share/url?url=",
		icon: <img src="/icons/telegram_line.svg" width="25px" />,
	},
	{
		title: "Comparte en WhatsApp",
		action: "http://api.whatsapp.com/send?text=",
		icon: <WhatsAppIcon fontSize="medium" />,
	},
	{
		title: "Copiar",
		icon: <FileCopyIcon fontSize="medium" />,
	},
];

const Shared3 = ({ title, content }) => {
	const [open, setOpen] = useState(false);

	const handleSharing = async ({ action }) => {
		if (action) {
			window.open(`${action}${window.location.href}`, "_blank");
			return;
		}

		await navigator.clipboard.writeText(window.location.href);

		setOpen(true);
	};

	const action = (
		<Fragment>
			<Button
				color="secondary"
				size="small"
				onClick={() => setOpen((prev) => !prev)}
			>
				Cerrar
			</Button>
			<IconButton
				size="small"
				aria-label="close"
				color="inherit"
				onClick={() => setOpen((prev) => !prev)}
			>
				<CloseIcon fontSize="small" />
			</IconButton>
		</Fragment>
	);

	return (
		<>
			<div className="Post__infor-icons">
				{options.map((item) => (
					<IconButton
						key={item.title}
						onClick={() => handleSharing(item)}
						// aria-label="delete"
						size="small"
						color="inherit"
					>
						{item.icon}
					</IconButton>
				))}
			</div>
			<Snackbar
				open={open}
				autoHideDuration={6000}
				onClose={() => setOpen((prev) => !prev)}
				message={"Copiado con éxito!"}
				action={action}
			/>
		</>
	);
};
export default Shared3;
