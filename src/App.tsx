import Body from "./components/body";
import Header from "./components/header";
import { ClientsProvider } from "./contexts/clientsContext/clientsContext";

export default function App() {
	return (
		<>
			<Header />
			<ClientsProvider>
				<Body />
			</ClientsProvider>
		</>
	);
}
