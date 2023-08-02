import { firebase, auth } from "../../constants/firebase";
// import statusFirebase from "./statusFirebase";
const login = async (user) => {
    try {
        if (!user) {
            try {
                const provider = new firebase.auth.GoogleAuthProvider();
                const resultWithGoogle = await auth.signInWithPopup(provider);
                return resultWithGoogle;
            } catch (error) {
                return error;
            }
        } else {
            const { email, password } = user;
            try {
                const resultWithEmail = await auth.signInWithEmailAndPassword(
                    email,
                    password
                );
                return resultWithEmail;
            } catch (error) {
                return error;
            }
        }
    } catch (error) {
        return error;
    }
};

export default login;
