import { auth } from "../../constants/firebase";
import { APP_URL } from "@/constants/env";

const register = async (user, setStatus) => {
  const { name, email, password } = user;

  try {
    const result = await auth.createUserWithEmailAndPassword(email, password);

    await result.user.updateProfile({
      displayName: name,
    });

    /*Cancell Email send momentary*/
    await result.user.sendEmailVerification({
      url: APP_URL,
    });

    auth.signOut();

    setStatus({
      open: true,
      type: "success",
      title: "Revisa tu bandeja de correo!",
    });

    return result;
  } catch (error) {
    console.log({ error });
    if (error.code === "auth/email-already-in-use") {
      setStatus({
        open: true,
        type: "warning",
        title: "Ya tienes una cuenta!",
      });
    }
    return error;
  }
};

export default register;
