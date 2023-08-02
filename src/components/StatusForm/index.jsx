import LinearProgress from "@mui/material/LinearProgress";
import Alert from "@mui/material/Alert";

const StatusForm = ({ type, statusMessage }) => (
	<div>
		{type == "loading" && <LinearProgress color="secondary" />}
		{type == "error" && <Alert severity={type}>{statusMessage}</Alert>}
		{type == "warning" && <Alert severity={type}>{statusMessage}</Alert>}
		{type == "success" && <Alert severity={type}>{statusMessage}</Alert>}
	</div>
);

export default StatusForm;
