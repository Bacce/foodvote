import { createContext } from "react";

interface AppContextProps {
    contextState: any;
    setContextState: ({ }: any) => void;
}

export const AppContext = createContext<AppContextProps>({
    contextState: {},
    setContextState() { },
});