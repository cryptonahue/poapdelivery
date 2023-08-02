const orderByDate = (array = [], key = null) => {
	const newArray = array.sort(
		(a, b) =>
			new Date(key ? b[key] : b.date_published) -
			new Date(key ? a[key] : a.date_published)
	);
	return newArray;
};

export default orderByDate;
