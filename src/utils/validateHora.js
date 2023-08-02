const validateDateHora = (date) => {
	const time = new Date(date);
	return `${time.getHours()}`;
};
export default validateDateHora;
