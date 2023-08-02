import { forwardRef } from "react";
import { makeStyles, withStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";

const useStyles = makeStyles(() => ({
	multilineColor: {
		backgroundColor: "#fff",
		color: "#444",
	},
}));

const CssTextField = withStyles({
	root: {
		"& label.Mui-focused": {
			color: "#FFF",
		},
		"& .MuiInput-underline:after": {
			borderBottomColor: "#FFF",
		},
		"& .MuiOutlinedInput-root": {
			"& fieldset": {

				borderColor: "#FFF",
			},
			"&:hover fieldset": {

				borderColor: "#FFF",
			},
			"&.Mui-focused fieldset": {

				borderColor: "#FFF",
			},
		},
	},
})(TextField);

const Input = forwardRef((rest, ref) => {
	const classes = useStyles();
	return (
		<CssTextField
			InputProps={{ classes: { input: classes.multilineColor } }}
			inputRef={ref}
			{...rest}
		/>
	);
});

export default Input;
