const emojis = (e) => {
	let emoji = e.replaceAll(':blush:','😊').replaceAll(':smiley:','😃')
	.replaceAll(':laughing:','😆').replaceAll(':sweat:','😓').replaceAll(':fearful:','😨')
	.replaceAll(':cry:','😢').replaceAll(':confused:','😕').replaceAll(':scream:','😱')
	.replaceAll(':rage:','😡').replaceAll(':heart:','❤️')
	return (
		emoji
	);
};
export default emojis;