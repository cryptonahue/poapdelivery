import { useForm, Controller } from "react-hook-form";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

const MyRadio = ({ control, name }) => {
	return (
		<FormControl component="fieldset">
			<Controller
				className="checkcontainer"
				rules={{ required: true }}
				control={control}
				name={name}
				render={({ field }) => (
					<RadioGroup {...field}>
						<FormControlLabel
							value="ONLINE"
							control={<Radio color="secondary" />}
							label="Online"
						/>
						<FormControlLabel
							value="PRESENCIAL"
							control={<Radio color="secondary" />}
							label="Presencial"
						/>
					</RadioGroup>
				)}
			/>
		</FormControl>
	);
};

export default MyRadio;
