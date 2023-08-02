import { auth } from "../../constants/firebase";

export const mapUserFromFirebaseAuthToUser = (user) => {
    if (user) {
        const { displayName, email, photoURL } = user;
        return {
            displayName,
            email,
            photoURL,
        };
    }
    return null;
};

export const statusLogin = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            unsubscribe();
            resolve(mapUserFromFirebaseAuthToUser(user));
        }, reject);
    });
};
