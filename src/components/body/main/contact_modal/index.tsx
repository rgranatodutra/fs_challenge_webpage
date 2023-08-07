import { IoMdClose, IoMdSave } from "react-icons/io";
import { Contact } from "../../../../contexts/clientsContext/clientsContext.interfaces";
import { CustomState } from "../../../../hooks/state.hook";
import StyledContactModal, { StyledInputWrapper } from "./styles";
import { FaEdit, FaTrash } from "react-icons/fa";
import { api } from "../../../../services/api";
import { toast } from "react-toastify";
import { useContext } from "react";
import { ClientsContext } from "../../../../contexts/clientsContext/clientsContext";

interface ContactModalProps {
    contact: Contact;
}

export default function ContactModal({ contact }: ContactModalProps) {
    const { loadContacts } = useContext(ClientsContext);

    const fullName = CustomState<string>(contact.fullName);
    const email = CustomState<string>(contact.email);
    const phone = CustomState<string>(contact.phone);

    const createdDate = new Date(contact.createdAt).toLocaleDateString();
    const createdTime = new Date(contact.createdAt).toLocaleTimeString();
    const updatedDate = contact.updatedAt && new Date(contact.updatedAt).toLocaleDateString();
    const updatedTime = contact.updatedAt && new Date(contact.updatedAt).toLocaleTimeString();

    const editMode = CustomState<boolean>(false);

    function handleCancel() {
        fullName.reset();
        email.reset();
        phone.reset();
        editMode.reset()
    }

    function handleSave() {
        let requestObject: any = {};

        if (fullName.value !== contact.fullName) {
            requestObject = { ...requestObject, fullName: fullName.value }
        }

        if (email.value !== contact.email) {
            requestObject = { ...requestObject, email: email.value }
        }

        if (phone.value !== contact.phone) {
            requestObject = { ...requestObject, phone: phone.value }
        }

        api.patch<Contact>(`/contacts/${contact.id}`, requestObject)
            .then((res) => {
                toast.success("Contato atualizado com sucesso!");
                loadContacts(contact.clientId)
                contact = res.data;
            })
            .catch((err) => {
                console.error(err);
                toast.error("Falha ao salvar contato...")
            })
    }

    return (
        <StyledContactModal>
            <div className="inputs">
                <StyledInputWrapper>
                    <label> Nome completo </label>
                    <input
                        value={fullName.value}
                        onChange={(e) => fullName.setValue(e.target.value)}
                        disabled={!editMode.value}
                    />
                </StyledInputWrapper>
                <StyledInputWrapper>
                    <label> E-mail </label>
                    <input
                        value={email.value}
                        onChange={(e) => email.setValue(e.target.value)}
                        disabled={!editMode.value}
                    />
                </StyledInputWrapper>
                <StyledInputWrapper>
                    <label> Telefone </label>
                    <input
                        value={phone.value}
                        onChange={(e) => phone.setValue(e.target.value)}
                        disabled={!editMode.value}
                    />
                </StyledInputWrapper>
                <h4>
                    Data de criação: <span> {`${createdDate} ${createdTime}`} </span>
                </h4>
                <h4>
                    Ultima atualização: <span> {(updatedDate && updatedTime) ? `${updatedDate} ${updatedTime}` : "nunca"}  </span>
                </h4>
            </div>
            <div className="buttons">
                {
                    editMode.value ?
                        <>
                            <button onClick={handleCancel}>
                                <IoMdClose title="Cancelar" />
                            </button>
                            <button onClick={handleSave}>
                                <IoMdSave title="Salvar" />
                            </button>
                        </>
                        :
                        <button onClick={() => editMode.setValue(true)}>
                            <FaEdit title="Editar" />
                        </button>
                }
                <button>
                    <FaTrash title="Deletar" />
                </button>
            </div>
        </StyledContactModal>
    )
}