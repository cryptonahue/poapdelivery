import Modal from "@/components/Modal";
import { useModal } from "@/context/modalContext";
import Login from "@/containers/Login";
import Register from "@/containers/Register";
import Forgot from "@/containers/Forgot";

const Layout = ({ children }) => {
	const {
		initialState: { signin, signup, forgot },
		handleModal,
	} = useModal();

	return (
		<>
			<>{children}</>
			<Modal
				open={signin}
				handleClose={() => handleModal("signin", false)}
			>
				<Login />
			</Modal>
			<Modal
				open={signup}
				handleClose={() => handleModal("signup", false)}
			>
				<Register />
			</Modal>
			<Modal
				open={forgot}
				handleClose={() => handleModal("forgot", false)}
			>
				<Forgot />
			</Modal>
		</>
	);
};

export default Layout;
