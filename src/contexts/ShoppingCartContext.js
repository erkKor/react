import { createContext, useContext, useState } from "react";

const ShoppingCartContext = createContext()

export const useShoppingCart = () =>{
    return useContext(ShoppingCartContext)
}

export const ShoppingCartProvider = ({children}) => {
    
}