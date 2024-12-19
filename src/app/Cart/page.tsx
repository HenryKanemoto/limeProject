"use client";

import optionsData from "@/app/data/options.json";
import Product from "../components/Product";
import optionType from "../types/OptionType";
import generateIDArray from "../utils/generateIDArray";
import { useCartProductsProvider } from "../context/CartProductsContext";
import { useEffect, useState } from "react";
import redirectPayment from "../utils/redirectPayment";
import Head from "next/head";

export default function CartPage() {
    const products = useCartProductsProvider().cartProducts;
    const removeAllCartProducts = useCartProductsProvider().removeAllProducts;
    //repetição de código com ProductList
    const parsedOptions = optionsData.map((option) => ({
        ...option,
        version: option.version as "PC" | "PS4" | "XBOX"
    }))
    const optionsList: optionType[] = generateIDArray(parsedOptions);

    const [total, setTotal] = useState(0);

    useEffect(() => {
        const newTotal = products.reduce((sum, products) => sum + parseInt(products.price), 0);

        setTotal(newTotal);
    }, [products])

    return (
        <>
            <Head>
                <title>LimoStore | Meu carrinho</title>
                <meta name="description" content="Revise os produtos adicionados ao carrinho e finalize a compra" />
            </Head>
            <main className="pt-24 px-8 flex-grow md:px-[20%]">
                <ul className="flex flex-col gap-4">
                    {products.length > 0 ? products.map((product) => (
                        <Product
                            key={product.id}
                            expanded={true}
                            optionsList={optionsList}
                            product={product}
                        />
                    ))
                        :
                        <p className="font-bold text-lg">Voce ainda não adicionou nenhum item ao seu carrinho</p>
                    }
                </ul>
                {products.length > 0 &&
                    <div className="mt-8 pt-4 px-2 border-t-2 border-black">
                        <ul className="flex flex-col gap-4">
                            {products.map((product) => (
                                <li key={`total_${product.id}`} className="flex justify-between mx-2 px-2 border-b border-black">
                                    <h4 className="text-sm font-thin">{product.name}</h4>
                                    <p className="text-sm">R$ {product.price}</p>
                                </li>
                            ))}
                        </ul>
                        <div className="flex justify-between mt-4 pt-2 text-lg font-bold border-t-2 border-black">
                            <h3>TOTAL</h3>
                            <p>R$ {total.toFixed(2)}</p>
                        </div>
                        <button className="mt-6 bg-yellow-400 text-white font-bold px-4 py-2 rounded-md" onClick={() => redirectPayment(removeAllCartProducts)}>
                            Finalizar Compra
                        </button>
                    </div>
                }
            </main>
        </>
    )
}