import { createContext, useContext, useState } from "react";

export const UIContext = createContext();
export const useUIContext = () => useContext(UIContext);

export const UIProvider = ({children}) => {
    // define states
    const [openDrawer, setOpenDrawer] = useState(false);
    const [openSearchBox, setOpenSearchBox] = useState(false);
    
    //definevalues
    const value = {
        openDrawer,
        setOpenDrawer,
        openSearchBox,
        setOpenSearchBox
    }

    return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}