const getPost = (t, e) => {
	return t.filter((t) => t.slug == e)[0];
};
export default getPost;
