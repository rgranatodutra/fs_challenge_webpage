import { useContext } from "react";
import { ClientsContext } from "../../../contexts/clientsContext/clientsContext";

export default function Main() {
    const {
        selectedClient,
        selectedClientContacts
    } = useContext(ClientsContext);

    return (
        <>
            {
                selectedClient.value ?
                    <div>
                        <h2>
                            Contatos de {selectedClient.value.fullName}
                        </h2>
                        <ul>
                            {
                                selectedClientContacts.value &&
                                selectedClientContacts.value.map((contact) => (
                                    <li key={`contact_${contact.id}`}>
                                        {contact.fullName}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    :
                    <div className="not_selected_client">
                        Selecione um cliente para renderizar seus contatos...
                    </div>
            }
        </>
    );
}