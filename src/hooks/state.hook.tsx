import { useState } from "react";

export interface CustomStateHook<T> {
    value: T;
    setValue: React.Dispatch<React.SetStateAction<T>>;
    reset: () => void;
};

export function CustomState<T>(defaultValue: T): CustomStateHook<T> {

    const [value, setValue] = useState<T>(defaultValue);

    const reset = () => { setValue(defaultValue) };

    return { value, setValue, reset };
};