import { auth } from "../../constants/firebase";

const recover = async (email) => {
    try {
        const result = await auth.sendPasswordResetEmail(email);
        console.log(result);
        return result;
    } catch (error) {
        return error;
    }
};
export default recover;
