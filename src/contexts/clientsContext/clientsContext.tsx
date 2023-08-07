import { createContext, useEffect } from "react";
import { Client, ClientsContextProps, ClientsProviderProps, Contact } from "./clientsContext.interfaces";
import { CustomState } from "../../hooks/state.hook";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export const ClientsContext = createContext({} as ClientsContextProps);

export function ClientsProvider({ children }: ClientsProviderProps) {
    const loadedClients = CustomState<Array<Client>>([]);
    const selectedClient = CustomState<Client | null>(null);
    const selectedClientContacts = CustomState<Array<Contact> | null>(null);

    useEffect(() => {
        loadClients();
    }, []);

    function loadClients() {
        api.get<Array<Client>>("/clients")
            .then((res) => loadedClients.setValue(res.data))
            .catch((err) => {
                console.error(err);
                toast.error("Falha ao carregar clientes...");
            });
    }

    return (
        <ClientsContext.Provider
            value={{
                loadedClients,
                selectedClient,
                selectedClientContacts,
                loadClients
            }}
        >
            {children}
        </ClientsContext.Provider>
    )
};