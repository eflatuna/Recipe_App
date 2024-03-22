import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { GlobalStyles } from "../components/globalStyles/GlobalStyles";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import About from "../pages/about/About";
import Details from "../pages/details/Details";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
	return (
		<div>
			<BrowserRouter>
				<GlobalStyles />
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/about" element={<PrivateRouter />}>
						<Route path="" element={<About />} />
					</Route>
					<Route path="/details" element={<PrivateRouter />}>
						<Route path="" element={<Details />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default AppRouter;
