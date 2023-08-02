import axios from "axios";
import { API_URL } from "@/constants/env";
import { createContext, useContext, useState, useEffect } from "react";
import { loginFirebase, logoutFirebase } from "../services/accounts";
import {
	mapUserFromFirebaseAuthToUser,
	statusLogin,
} from "../services/accounts/statusFirebase";

export const AuthContext = createContext({});

export const useAuth = () => {
	return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
	const [initialState, setInitialState] = useState({
		isLoading: true,
		isAuth: false,
		user: null,
		ip: null,
	});

	const getIP = async () => {
		try {
			let status = await statusLogin();

			/*const res = await axios.get(
				"https://backend.defilatam.com/test.php"
			);

			const verifyIp = res.data && res.data[0];*/

			setInitialState({
				...initialState,
				isLoading: false,
				isAuth: true,
				user: status,
				ip: "", //verifyIp
			});
			
		} catch (error) {
			console.log({ error });
			setInitialState({
				...initialState,
				ip: null,
			});
		}
	};

	useEffect(() => {
		getIP();
	}, []);

	const authFunc = async (data, handleModal) => {
		let user;
		try {
			if (data) {
				user = await loginFirebase(data);
				setInitialState({
					...initialState,
					user: mapUserFromFirebaseAuthToUser(user.user),
				});

				return user;
			} else {
				user = await loginFirebase();
				setInitialState({
					...initialState,
					user: mapUserFromFirebaseAuthToUser(user.user),
				});

				handleModal("signin", false);
				return user;
			}
		} catch (error) {
			return error;
		}
	};

	const logoutFunc = () => {
		logoutFirebase();
		setInitialState({
			...initialState,
			user: null,
		});
	};

	return (
		<AuthContext.Provider value={{ initialState, authFunc, logoutFunc }}>
			{children}
		</AuthContext.Provider>
	);
};
