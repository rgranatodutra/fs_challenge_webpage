import { Client } from "../../../../contexts/clientsContext/clientsContext.interfaces";
import StyledClientCard from "./styles";
import { FaPhoneAlt } from "react-icons/fa";
import { BiSolidUserRectangle } from "react-icons/bi"
import { MdEmail } from "react-icons/md"
import { useContext, useEffect } from "react";
import { ClientsContext } from "../../../../contexts/clientsContext/clientsContext";
import { CustomState } from "../../../../hooks/state.hook";

interface ClientCardProps {
    client: Client;
}

export default function ClientCard({ client }: ClientCardProps) {
    const { selectedClient } = useContext(ClientsContext);
    const isClientSelected = CustomState<boolean>(false);

    useEffect(() => {
        if (selectedClient.value?.id === client.id) {
            isClientSelected.setValue(true);
        } else {
            isClientSelected.setValue(false);
        }
    }, [selectedClient.value])

    function handleSelect() {
        if (!isClientSelected.value) {
            selectedClient.setValue(client);
        } else {
            selectedClient.reset();
        }
    }

    return (
        <StyledClientCard
            className={isClientSelected.value ? "selected" : ""}
            onClick={handleSelect}
        >
            <div>
                <BiSolidUserRectangle />
                <div>
                    <h3>
                        {client.fullName}
                    </h3>
                    <h5>
                        <MdEmail />
                        {client.email}
                    </h5>
                    <h5>
                        <FaPhoneAlt />
                        {client.phone}
                    </h5>
                </div>
            </div>
        </StyledClientCard>
    );
}