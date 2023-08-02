import { createContext, useContext, useState, useEffect } from "react";

export const ModalContext = createContext({});

export const useModal = () => {
	return useContext(ModalContext);
};

export const ModalProvider = ({ children }) => {
	const [initialState, setInitialState] = useState({
		signin: false,
		signup: false,
		forgot: false,
	});

	const handleModal = (key, action) => {
		setInitialState({
			signin: false,
			signup: false,
			forgot: false,
			[key]: action,
		});
	};

	return (
		<ModalContext.Provider value={{ initialState, handleModal }}>
			{children}
		</ModalContext.Provider>
	);
};
