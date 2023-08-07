import { ClientsContext } from "../../../../contexts/clientsContext/clientsContext";
import { Contact } from "../../../../contexts/clientsContext/clientsContext.interfaces";
import { useContext } from "react";
import { BiSolidUserPin } from "react-icons/bi";
import StyledContactCard from "./styles";

interface ContactCardProps {
    contact: Contact;
}

export default function ContactCard({ contact }: ContactCardProps) {
    const { selectedContact } = useContext(ClientsContext);

    function handleSelect() {
        selectedContact.setValue(contact);
    }

    return (
        <StyledContactCard onClick={handleSelect}>
            <BiSolidUserPin />
            <h3>
                {contact.fullName}
            </h3>
        </StyledContactCard>
    )
}