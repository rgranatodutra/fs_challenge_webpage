import { useContext } from "react";
import { ClientsContext } from "../../../../contexts/clientsContext/clientsContext";
import { CustomState } from "../../../../hooks/state.hook";
import { api } from "../../../../services/api";
import { toast } from "react-toastify";
import StyledRegisterContactModal, { StyledInputWrapper } from "./styles";

interface RegisterContactModalProps {
    onClose: () => void;
}

export default function RegisterContactModal({ onClose }: RegisterContactModalProps) {
    const { loadContacts, selectedClient } = useContext(ClientsContext);

    const fullName = CustomState<string>("");
    const email = CustomState<string>("");
    const phone = CustomState<string>("");

    const phoneRegex = /^[0-9+]+$/;

    const validFullName = fullName.value &&
        fullName.value.length >= 10 &&
        fullName.value.length <= 30;

    const validEmail = email.value && email.value.toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );

    const validPhone = phone.value && phoneRegex.test(phone.value) && phone.value.length >= 8 && phone.value.length <= 14;

    const disabledRegister = !validFullName || !validEmail || !validPhone;

    function registerContact() {
        const requestData = {
            fullName: fullName.value,
            email: email.value,
            phone: phone.value,
        };

        api.post(`/clients/${selectedClient.value!.id}/contacts`, requestData)
            .then(() => {
                toast.success("Cliente cadastrado com sucesso!");
                loadContacts(selectedClient.value!.id);
                onClose();
            })
            .catch((err) => {
                toast.error("Falha ao cadastrar cliente...");
                console.error(err);
            });
    };

    return (
        <StyledRegisterContactModal>
            <div className="inputs">
                <StyledInputWrapper>
                    <label> Nome completo </label>
                    <input
                        value={fullName.value}
                        onChange={(e) => fullName.setValue(e.target.value)}
                    />
                </StyledInputWrapper>
                <StyledInputWrapper>
                    <label> E-mail </label>
                    <input
                        value={email.value}
                        onChange={(e) => email.setValue(e.target.value)}
                    />
                </StyledInputWrapper>
                <StyledInputWrapper>
                    <label> Telefone </label>
                    <input
                        value={phone.value}
                        onChange={(e) => phone.setValue(e.target.value)}
                    />
                </StyledInputWrapper>
            </div>
            <button
                onClick={registerContact}
                disabled={disabledRegister}
            >
                Cadastrar
            </button>
        </StyledRegisterContactModal>
    );
}