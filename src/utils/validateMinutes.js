const validateDateMinu = (date) => {
	const time = new Date(date);
	if (`${time.getMinutes()}`.length==2){
		return `${time.getMinutes()}`;
	}
	else{
		return `${time.getMinutes()}0`;
	}
};
export default validateDateMinu;
