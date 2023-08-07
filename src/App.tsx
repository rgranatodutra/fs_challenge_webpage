import { ToastContainer } from "react-toastify";
import Body from "./components/body";
import Header from "./components/header";
import { ClientsProvider } from "./contexts/clientsContext/clientsContext";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
	return (
		<>
			<Header />
			<ClientsProvider>
				<Body />
			</ClientsProvider>
			<ToastContainer />
		</>
	);
}
