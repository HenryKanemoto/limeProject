"use client";

//atualizar para usereducer depois

import { createContext, useContext, useEffect, useState } from "react";
import { ProductModel } from "../models/ProductModel";

interface CartProductsContextProps {
    cartProducts: ProductModel[];
    addProduct: (newProduct: ProductModel) => void;
    removeProduct: (index: number) => void;
    removeAllProducts: () => void;
}

const CartProductsContext = createContext<CartProductsContextProps | undefined>(undefined);

export const CartProductsProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [cartProducts, setCartProducts] = useState<ProductModel[]>([]);
    
    useEffect(() => {
        const savedCart = localStorage.getItem("cartProducts");
        if (savedCart) {
            setCartProducts(JSON.parse(savedCart))
        } else {
            setCartProducts([])
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cartProducts", JSON.stringify(cartProducts))
    }, [cartProducts]);

    const addProduct = (newProduct: ProductModel) => {
        setCartProducts((prevProducts) => [...prevProducts, newProduct]);
    };
    const removeProduct = (index: number) => {
        setCartProducts((prevProducts) => prevProducts.filter((product) => product.id !== index));
    };

    const removeAllProducts = () => {
        setCartProducts([]);
    }

    return (
        <CartProductsContext.Provider value={{cartProducts, addProduct, removeProduct, removeAllProducts}}>
            {children}
        </CartProductsContext.Provider>
    )
}

export const useCartProductsProvider = () => {
    const context = useContext(CartProductsContext);
    if(!context) {
        throw new Error("useCartProductContext deve ser usado com um Provider")
    }
    return context;
}