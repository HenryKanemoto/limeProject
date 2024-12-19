"use client";

import Image from "next/image";
import { ProductModel } from "../models/ProductModel";
import DropList from "./DropList";
import optionType from "../types/OptionType";
import { useCartProductsProvider } from "../context/CartProductsContext";
import { useState } from "react";


interface productProps {
    product: ProductModel,
    optionsList: optionType[],
    expanded: boolean
}

export default function Product(props: productProps) {
    const cartContext = useCartProductsProvider();
    const addProduct = cartContext.addProduct;
    const removeProduct = cartContext.removeProduct;
    const cartProducts = cartContext.cartProducts;
    const [productVersion, setProductVersion] = useState<"PC" | "PS4" | "XBOX">(props.product.version)

    return (
        //quando abre o droplist o item aumenta de tamanho
        <li key={props.product.id} className={`${props.expanded ? 'flex justify-center h-48 ' : 'flex flex-col w-60 my-4 md:w-96 hover:ring-4 hover:ring-gray-800'}`}>
            <Image
                className={`${props.expanded ? 'w-32 lg:w-52' : 'w-60 h-72 md:w-96 rounded-t-sm'}`}
                src={props.product.img}
                alt={`Imagem do Produto: ${props.product.name}`}
                width={240}
                height={480}
            />
            <div className={`p-2 bg-white ${props.expanded ? 'relative flex flex-col w-fit lg:w-52' : 'flex flex-col h-full rounded-b-sm'}`}>
                {props.expanded &&
                    <button onClick={() => removeProduct(props.product.id)} className="absolute right-0 top-0 bg-red-600 rounded-sm px-2">
                        <span className="text-white">X</span>
                    </button>
                }
                <div className="flex flex-col gap-2">
                    <h3 className={`font-bold ${props.expanded ? 'text-sm border-b border-black px-2 pt-2 md:pl-4 md:pr-3 md:pt-6' : 'text-xl'}`}>{props.product.name}</h3>
                    <p className={`font-semibold rounded-sm ${props.expanded ? 'border-b border-black text-sm px-2 md:pl-4' : 'text-lg text-green-600 '}`}>R$ {props.product.price}</p>
                </div>
                <div className={`pt-4 ${props.expanded ? 'flex flex-col items-center' : ''}`}>
                    <p className={props.expanded ? 'font-bold' : 'hidden'}>{productVersion}</p>
                    <DropList
                        options={props.optionsList}
                        product={props.product}
                        expanded={props.expanded}
                        productVersion={productVersion}
                        setProductVersion={setProductVersion}
                    />
                </div>
                <button
                    className={(props.expanded || cartProducts.some((p) => p.id === props.product.id)) ? 'hidden' : 'flex w-fit p-2 rounded-lg bg-yellow-400  text-white font-semibold'}
                    onClick={(e) => {
                        e.preventDefault();
                        if (!cartProducts?.some((p) => p.id === props.product.id)) {
                            props.product.version = productVersion
                            addProduct(props.product)
                        }
                    }}>
                    Adicionar ao Carrinho
                </button>
                <span className={`${cartProducts?.some((p) => p.id === props.product.id) && !props.expanded ? 'flex w-fit p-2 text-white bg-green-600 font-bold rounded-sm' : 'hidden'}`}>Adicionado ao carrinho</span>
            </div>

        </li>
    )
}