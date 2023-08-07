import { ReactNode } from "react";
import { CustomStateHook } from "../../hooks/state.hook";

export interface ClientsProviderProps {
    children: ReactNode;
}

export interface ClientsContextProps {
    readonly loadedClients: CustomStateHook<Array<Client>>;
    readonly selectedClient: CustomStateHook<Client | null>;
    readonly selectedClientContacts: CustomStateHook<Array<Contact> | null>;
    readonly loadClients: () => void;
}

export interface Client {
    readonly id: number;
    readonly fullName: string;
    readonly email: string;
    readonly phone: string;
    readonly createdAt: string;
    readonly updatedAt: string;
}

export interface Contact {
    readonly id: number;
    readonly clientId: number;
    readonly fullName: string;
    readonly email: string;
    readonly phone: string;
    readonly createdAt: string;
    readonly updatedAt: string;
}