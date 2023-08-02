import MarkDown from "@/components/MarkDown";
// import Typography from "@material-ui/core/Typography";
// import validateDate from "@/utils/validateDate";
// import evalueMInutes from "@/utils/evalueMInutes";

const Content = ({ content }) => (
	<div className="Markdown_container">
		<MarkDown>{content}</MarkDown>
	</div>
);

export default Content;
