const filterByType = (obj, type) => {
	let result = obj.forEach((item) => (item.type = type));
	return obj;
};

const getHighlights = (blog, proyects, news, rekts) => {
	return filterByType(blog, "blog")
		.concat(
			filterByType(proyects, "proyectos"),
			filterByType(news, "noticias"),
			filterByType(rekts, "rekt")
		)
		.filter((result) => !0 === result.destacado);
};
export default getHighlights;
