import { Fragment, useState } from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CloseIcon from "@mui/icons-material/Close";

const options = [
	{
		icon: <VisibilityIcon fontSize="medium" />,
	},
];

const Shared = ({ title, content }) => {
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
		</>
	);
};
export default Shared;
