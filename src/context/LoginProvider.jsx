import { createContext, useState } from "react";

export const LoginContext = createContext();

const LoginProvider = ({ children }) => {
	const [user, setUser] = useState({ name: "", password: "" });

	const values = { user, setUser };
	return (
		<LoginContext.Provider value={values}>{children}</LoginContext.Provider>
	);
};

export default LoginProvider;
