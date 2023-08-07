import { useContext } from "react";
import { ClientsContext } from "../../../contexts/clientsContext/clientsContext";
import StyledSidebar from "./styles";
import ClientCard from "./client_card";
import { CustomState } from "../../../hooks/state.hook";
import Modal from "../../modal";
import RegisterClientModal from "./register_client_modal";

export default function Sidebar() {
    const { loadedClients } = useContext(ClientsContext);
    const isRegistering = CustomState<boolean>(false);

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
                <button
                    className="footer_button"
                    onClick={() => isRegistering.setValue(true)}
                >
                    Cadastrar cliente
                </button>
            </footer>
            {
                isRegistering.value &&
                <Modal
                    onClose={isRegistering.reset}
                    title="Cadastro de cliente"
                    $modalWidth="40rem"
                >
                    <RegisterClientModal onClose={isRegistering.reset} />
                </Modal>
            }
        </StyledSidebar>
    );
};