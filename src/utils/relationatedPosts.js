const relationatedPosts = (t, e) => {
	if (!t || !e) return [];
	return t.filter(
		(t) => t.category.name == e.category.name && t.slug !== e.slug
	);
};
export default relationatedPosts;
