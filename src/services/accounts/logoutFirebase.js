import { auth } from "../../constants/firebase";

const logout = () => {
    auth.signOut();
};

export default logout;
