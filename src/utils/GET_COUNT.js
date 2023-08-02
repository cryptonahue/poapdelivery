const GET_COUNT = (listOpinions, title) => {
	const quantity = listOpinions.filter((row) => row.platform.title === title);
	return quantity.length;
};

export default GET_COUNT;
