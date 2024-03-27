import { ThemeProvider } from "styled-components";
import AppRouter from "./router/AppRouter";
import theme from "./components/globalStyles/theme";
import RecipeProvider from "./context/RecipeProvider";
import LoginProvider from "./context/LoginProvider";

function App() {
	return (
		<LoginProvider>
			<RecipeProvider>
				<ThemeProvider theme={theme}>
					<AppRouter />
				</ThemeProvider>
			</RecipeProvider>
		</LoginProvider>
	);
}

export default App;
