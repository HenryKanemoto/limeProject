"use client";

import { ProductModel } from "../models/ProductModel";
import React, { createContext, useContext, useEffect, useState } from "react";
import { ProductService } from "../services/ProductsSevice";

interface ProductsContextType {
    products: ProductModel[];
    getProductById: (id: number) => ProductModel | undefined;
  }

const ProductsContext = createContext< ProductsContextType | undefined>(undefined);

export const ProductProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [products, setProducts] = useState<ProductModel[]>([]);
    const productsService = new ProductService;

    useEffect(() => {
        setProducts(productsService.getAllProducts())
    }, []);
    
    const getProductById = (id: number) => productsService.getProductById(id);

    return (
        <ProductsContext.Provider value={{products, getProductById}}>
            {children}
        </ProductsContext.Provider>
    )
};

export const useProductContext = () => {
    const context = useContext(ProductsContext);
    if (!context) {
      throw new Error("useProductContext deve ser usado com um Provider");
    }
    return context;
  };