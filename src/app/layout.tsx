import { ProductProvider } from "./context/ProductsContext";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { CartProductsProvider } from "./context/CartProductsContext";
import Head from "next/head";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <Head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <body className="flex flex-col min-h-screen bg-gray-200">
          <ProductProvider>
            <CartProductsProvider>
              <Header />
              {children}
              <Footer />
            </CartProductsProvider>
          </ProductProvider>
      </body>
    </html>
  );
}
