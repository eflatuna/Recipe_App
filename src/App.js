import { ThemeProvider } from "styled-components";
import AppRouter from "./router/AppRouter";
import theme from "./components/globalStyles/theme";
import RecipeProvider from "./context/RecipeProvider";

function App() {
	return (
		<RecipeProvider>
			<ThemeProvider theme={theme}>
				<AppRouter />
			</ThemeProvider>
		</RecipeProvider>
	);
}

export default App;
