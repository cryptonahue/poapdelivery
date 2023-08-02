import Checkbox from "@mui/material/Checkbox";
import { Controller } from "react-hook-form";

const MyCheckbox = ({ label, control, name }) => {
	return (
		<>
			<Controller
				control={control}
				name={name}
				render={({
					field: { onChange, onBlur, value, name, ref },
					fieldState: { invalid, isTouched, isDirty, error },
					formState,
				}) => (
					<Checkbox
						onBlur={onBlur}
						onChange={onChange}
						checked={value}
						inputRef={ref}
						color="secondary"
					/>
				)}
			/>
		</>
	);
};

export default MyCheckbox;
