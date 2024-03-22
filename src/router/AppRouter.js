import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./../components/navbar/Navbar";
import { GlobalStyles } from "../components/globalStyles/GlobalStyles";

const AppRouter = () => {
	return (
		<div>
			<BrowserRouter>
				<GlobalStyles />
				<Navbar />
				<Routes>
					<Route />
					<Route />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default AppRouter;
