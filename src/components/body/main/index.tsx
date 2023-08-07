import { useContext } from "react";
import { ClientsContext } from "../../../contexts/clientsContext/clientsContext";
import StyledMain from "./styles";
import ContactCard from "./contact_card";
import Modal from "../../modal";
import ContactModal from "./contact_modal";
import { AiOutlinePlus } from "react-icons/ai";
import RegisterContactModal from "./register_contact_modal";
import { CustomState } from "../../../hooks/state.hook";

export default function Main() {
    const {
        selectedClient,
        loadedClientContacts,
        selectedContact
    } = useContext(ClientsContext);

    const isRegistering = CustomState<boolean>(false);

    return (
        <StyledMain>
            {
                selectedClient.value ?
                    <div className="selected_client">
                        <h1>
                            Exibindo contatos de
                            <span className="highlight_name">
                                {" "}{selectedClient.value.fullName}:
                            </span>
                        </h1>
                        <ul>
                            {
                                loadedClientContacts.value &&
                                loadedClientContacts.value.map((contact) => (
                                    <ContactCard
                                        key={`contact_${contact.id}`}
                                        contact={contact}
                                    />
                                ))
                            }
                        </ul>
                        <button
                            className="add_contact"
                            title="Adicionar contato"
                            onClick={() => isRegistering.setValue(true)}
                        >
                            <AiOutlinePlus />
                        </button>
                        {
                            isRegistering.value &&
                            <Modal
                                onClose={isRegistering.reset}
                                title="Cadastro de cliente"
                                $modalWidth="40rem"
                            >
                                <RegisterContactModal onClose={isRegistering.reset} />
                            </Modal>
                        }
                    </div>
                    :
                    <div className="not_selected_client">
                        <h1>
                            Selecione um cliente para renderizar seus contatos...
                        </h1>
                    </div>
            }
            {
                selectedContact.value &&
                <Modal
                    onClose={selectedContact.reset}
                    title={`Visualizando contato: ${selectedContact.value.fullName}`}
                >
                    <ContactModal contact={selectedContact.value} />
                </Modal>
            }
        </StyledMain>
    );
}