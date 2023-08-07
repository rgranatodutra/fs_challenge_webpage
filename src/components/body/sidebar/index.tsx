import { useContext } from "react";
import { ClientsContext } from "../../../contexts/clientsContext/clientsContext";
import StyledSidebar from "./styles";
import ClientCard from "./client_card";

export default function Sidebar() {
    const { loadedClients } = useContext(ClientsContext);

    return (
        <StyledSidebar>
            <header>
                <h1> Lista de clientes </h1>
            </header>
            <ul>
                {
                    loadedClients.value
                        .map((client) => (
                            <ClientCard
                                key={`client_${client.id}`}
                                client={client}
                            />
                        ))
                }
            </ul>
            <footer>
                <button className="footer_button">
                    Cadastrar cliente
                </button>
            </footer>
        </StyledSidebar>
    );
};