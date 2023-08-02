import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
	root: {
		flexGrow: 1,
	},
	sidebar: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		height: "inherit",
		background: "#0C0E1A",
		color: "#FFF",
	},
	sidebarHeader: {
		padding: "10px 0px 0px 10px",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-around",
		margin: "20px 0px 0px 0px"
	},
	sidebarList: {
		width: 250,
	},
	Menu_Button: {
		marginBottom: "5px",
	},
}));