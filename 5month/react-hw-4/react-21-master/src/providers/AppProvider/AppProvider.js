import { useState } from "react";
import { AppContext } from "./config";

export const AppProvider = ({ children }) => {

    const [ count, setCount ] = useState(0)


    const defaultValue = {
        count, setCount
    }
    
    return (
        <AppContext.Provider value={defaultValue}>
            {children}
        </AppContext.Provider>
    );
}