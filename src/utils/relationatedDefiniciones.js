const relationatedPosts = (t, e) => {
	if (!t || !e) return [];
	return t.filter(
		(t) => t.tags.name == e.tags.name && t.title !== e.title
	);
};
export default relationatedPosts;
