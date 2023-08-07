import { createContext, useEffect } from "react";
import { Client, ClientsContextProps, ClientsProviderProps, Contact } from "./clientsContext.interfaces";
import { CustomState } from "../../hooks/state.hook";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export const ClientsContext = createContext({} as ClientsContextProps);

export function ClientsProvider({ children }: ClientsProviderProps) {
    const loadedClients = CustomState<Array<Client>>([]);
    const selectedClient = CustomState<Client | null>(null);
    const loadedClientContacts = CustomState<Array<Contact> | null>(null);
    const selectedContact = CustomState<Contact | null>(null);

    useEffect(() => {
        loadClients();
    }, []);

    useEffect(() => {
        if (selectedClient.value) {
            loadContacts(selectedClient.value.id);
        } else {
            loadedClientContacts.reset();
        }
    }, [selectedClient.value])

    async function loadClients() {
        await api.get<Array<Client>>("/clients")
            .then((res) => loadedClients.setValue(res.data))
            .catch((err) => {
                console.error(err);
                toast.error("Falha ao carregar clientes...")
            });
    }

    async function loadContacts(clientId: number) {
        await api.get<Array<Contact>>(`/clients/${clientId}/contacts`)
            .then((res) => loadedClientContacts.setValue(res.data))
            .catch((err) => {
                console.error(err);
                toast.error("Falha ao carregar contatos...");
            });
    }

    return (
        <ClientsContext.Provider
            value={{
                loadedClients,
                selectedClient,
                loadedClientContacts,
                selectedContact,
                loadClients,
                loadContacts
            }}
        >
            {children}
        </ClientsContext.Provider>
    )
};