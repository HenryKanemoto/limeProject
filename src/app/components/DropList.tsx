"use client";

import Image from "next/image";
import optionType from "../types/OptionType";
import { Dispatch, SetStateAction, useState } from "react";
import { ProductModel } from "../models/ProductModel";

interface DropListProps {
    options: optionType[],
    product: ProductModel,
    expanded: boolean,
    productVersion: "PC" | "PS4" | "XBOX",
    setProductVersion: Dispatch<SetStateAction<"PC" | "PS4" | "XBOX">>
}

export default function DropList(props: DropListProps) {
    const [showOptions, setShowOptions] = useState(false);

    return (
        <div className='w-fit'>
            <button
                className={`flex p-1 text-white bg-blue-500 ${props.expanded ? 'gap-1 text-sm' : 'gap-3 rounded-md'}`}
                onClick={(event) => {
                    event.preventDefault();
                    setShowOptions(!showOptions);
                }}>
                Escolher versão
                <span className={`transition-transform duration-300 ${showOptions && 'rotate-180'}`}>
                    <Image
                        src="/img/arrow.png"
                        alt="abrir ou fechar aba de escolha de versão"
                        width={18}
                        height={18}
                    />
                </span>
            </button>
            <div className="flex w-full justify-around my-2">
                {
                    showOptions && props.options.map((option) => {
                        return (
                            <button
                                className="w-fit"
                                onClick={(e) => {
                                    e.preventDefault()
                                    props.setProductVersion(option.version)
                                
                                }}
                                key={option.id}
                            >
                                <Image src={option.img} alt={option.alt} width={24} height={24}
                                    className={`${props.expanded ? 'w-5 h-5' : 'w-8 h-8'} rounded-md ${props.productVersion === option.version && 'ring-4 ring-blue-500 '}`}
                                />
                            </button>
                        )
                    })
                }
            </div>
        </div>
)}