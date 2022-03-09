import { createContext, useReducer } from "react";
import { initValue, reducer } from "../store/reduce";
const ContextPlayer = createContext();

const ProviderPlayer = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initValue)
    const value = {
        state,
        dispatch
    }

    return <ContextPlayer.Provider value={value}>
        {children}
    </ContextPlayer.Provider>;
};

export { ContextPlayer, ProviderPlayer };
