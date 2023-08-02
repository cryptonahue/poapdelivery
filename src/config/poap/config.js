import * as yup from "yup";

export const config = yup.object().shape({
	file: yup.mixed().test("type", "Work work...", (value) => {
		return value && value.length > 0;
	}),
	keyword: yup.string().required(),
});

export const defaultValues = {
	keyword: "",
	file: null,
};
