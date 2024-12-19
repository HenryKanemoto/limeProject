import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
    return (
        <>
            <Head>
                <title>LimoStore | Contato</title>
                <meta name="description" content="Entre em contato por meio das redes sociais" />
            </Head>
            <main className="pt-24 flex-grow mx-4 md:mx-8 xl:mx-32">
                <h1 className="text-4xl font-extrabold border-b-2 border-black w-fit pr-[33%] md:pr-[40%]">Contatos</h1>
                <div className="ml-4 mt-8 md:ml-8">
                    <h2 className="text-xl font-bold">Redes Sociais</h2>
                    <Link href="#" className="flex align-bottom gap-2 ml-4 mt-2 md:ml-8">
                        <Image src="/img/github-icon.png" alt="Acessar github" width={24} height={24} />
                        <p className="text-blue-500 h-[1.35rem] border-b border-blue-500">Github</p>
                    </Link>
                </div>
                <div className="ml-4 mt-8 md:ml-8">
                    <h2 className="text-xl font-bold">Email</h2>
                    <p className="ml-4 md:ml-8 mt-2 ">kanenemotohenry@gmail.com</p>
                </div>
            </main>
        </>
    )
}