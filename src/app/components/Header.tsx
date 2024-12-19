"use client";

import Image from "next/image";
import Link from "next/link";
import { useCartProductsProvider } from "../context/CartProductsContext";

export default function Header() {
  const cartProducts = useCartProductsProvider().cartProducts;

  return (
    <header className="flex justify-between items-center h-16 px-2 fixed z-50 top-0 left-0 right-0 bottom-0 bg-blue-800 text-white font-semibold text-sm md:text-xl md:px-4">
      <ul className="flex justify-center gap-10 w-full">
        <div className="group">
          <Link className="relative inline-block" href={'/'}>
            Loja
            <span className="absolute left-0 bottom-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full bg-white"></span>
          </Link>
        </div>
        <div className="group">
          <Link className="relative inline-block" href={'/Contact'}>
            Contato
            <span className="absolute left-0 bottom-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full bg-white"></span>
          </Link>
        </div>
        <div className="group">
          <Link className="relative inline-block" href={'/About'}>
            Sobre Nós
            <span className="absolute left-0 bottom-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full bg-white"></span>
          </Link>
        </div>
      </ul>
      <div className="relative right-1 md:right-3 w-fit">
        <Link href={'/Cart'}>
          <Image className="bg-white rounded-full mr-1 p-1 pr-[6px] w-7 h-7 md:mr-6 md:w-8 md:h-8" src={'/img/cart-image.png'} alt="Carrinho de compras" width={32} height={32} />
          {cartProducts.length > 0 &&
            <span className="absolute -right-[6px] bottom-0 top-4 px-[6px] h-fit text-[10px] rounded-full bg-red-600 md:right-2 md:px-[10px]">
              <p className="text-white font-extrabold">{cartProducts.length}</p>
            </span>
          }
        </Link>
      </div>
    </header>
  );
}