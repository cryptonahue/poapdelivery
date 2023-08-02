const alphabeticOrder = (array) => {
	return array.sort((a, b) => {
		if (a.nombre < b.nombre) {
			return -1;
		}
		if (a.nombre > b.nombre) {
			return 1;
		}
		return 0;
	});
};

export default alphabeticOrder;
