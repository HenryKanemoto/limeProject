"use client";

import Head from "next/head";
import Banner from "./components/Banner";
import ProductList from "./components/ProductList";
import { useProductContext } from "./context/ProductsContext";

export default function Home() {
  const productsContext = useProductContext();

  return (
    <>
      <Head>
        <title>LimoStore | Início</title>
        <meta name="description" content="Compre FIFA 14, FIFA 16 e PES 21 para PC, PS4 e Xbox" />
        <meta name="robots" content="index, follow" />
      </Head>
      <main className="pt-20 flex-grow">
        <div className="flex justify-center">
          <h2 className="pl-4 md:pl-16 border-b-2 border-blue-500  w-3/4  text-2xl font-extrabold">Em Destaque</h2>
        </div>
        <ProductList list={productsContext.products} />
        <Banner
          title="Precisa de ajuda? Contate-nos"
          bg_image="/img/bg-banner-1.jpg"
          button_description="Ir Para"
          button_href="/Contact"
        />
      </main>
    </>
  );
};
