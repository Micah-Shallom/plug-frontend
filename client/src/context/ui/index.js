import { createContext, useContext, useEffect, useState } from "react";

export const UIContext = createContext();
export const useUIContext = () => useContext(UIContext);

export const UIProvider = ({children}) => {
    // define states
    const [openDrawer, setOpenDrawer] = useState(false);
    const [openSearchBox, setOpenSearchBox] = useState(false);
    const [showCategories, setShowCategories] = useState(false);
    const [products, setProducts] = useState([]);

    // const fetchProducts = async () => {
    //     try {
    //         const response = await fetch("http://localhost:5000/products/all");
    //         const data = await response.json();
    //         setProducts(data);
    //     } catch (error) {
    //         console.error('Error', error);      
    //     }
    // };
    // useEffect(() => {
    //     fetchProducts();
    // },[])
    
    //definevalues
    const value = {
        openDrawer,
        setOpenDrawer,
        openSearchBox,
        setOpenSearchBox,
        showCategories,
        setShowCategories,
        products,
        setProducts,
        // fetchProducts,
    }

    return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}