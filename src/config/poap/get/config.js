import * as yup from "yup";

export const config = yup.object().shape({
	keyword: yup.string().required(),
});

export const defaultValues = {
	keyword: "",
};
