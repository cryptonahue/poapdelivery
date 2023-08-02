const GET_AVERAGE = (listOpinions, title) => {
	const list = listOpinions.filter((row) => row.platform.title === title);

	const percents = list.map((row) => {
		return row.percent;
	});

	const reducer = (accumulator, curr) => accumulator + curr;

	const result =
		percents.length === 0 ? 0 : percents.reduce(reducer) / percents.length;
	return parseInt(result);
};

export default GET_AVERAGE;
