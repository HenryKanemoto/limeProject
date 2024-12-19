"use client";

import { ProductModel } from "../models/ProductModel";
import optionType from "../types/OptionType";
import optionsData from "@/app/data/options.json";
import generateIDArray from "../utils/generateIDArray";
import Product from "./Product";

interface ProductListProps {
    list: ProductModel[],
    className?: string
}

export default function ProductList(props: ProductListProps) {
    const list: ProductModel[] = props.list;
    //repetição de código com cartPage
    const parsedOptions = optionsData.map((option) => ({
        ...option,
        version: option.version as "PC" | "PS4" | "XBOX"
    }))
    const optionsList: optionType[] = generateIDArray(parsedOptions);

    return (
        <ul className={`${props.className} flex flex-col gap-6 justify-center items-center mt-8 xl:flex-row xl:gap-12 `}>
            {list.map((product) => Product({product, optionsList, expanded:false}))}
        </ul>
    );
}