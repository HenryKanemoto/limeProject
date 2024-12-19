import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Paymentpage() {
    return (
        <>
            <Head>
                <title>LimoStore | Pagamento</title>
                <meta name="description" content="Conclua sua compra" />
            </Head>
            <main className="pt-40 flex flex-col gap-4 items-center flex-grow">
                <div className="flex flex-col items-center">
                    <h2>Sua compra foi concluída com sucesso!</h2>
                    <span><Image src={"/img/check-icon.png"} alt="Compra Aceita" width={48} height={48} /></span>
                </div>
                <Link href={"/"} className="text-gray-600 underline">Voltar</Link>
            </main>
        </>
    )
}