import Head from "next/head";

export default function AboutPage() {
    return (
        <>
            <Head>
                <title>LimoStore | Sobre nós</title>
                <meta name="description" content="Entenda mais sobre este projeto" />
            </Head>
            <main className="pt-24 px-4 flex-grow">
                <h1 className="text-2xl font-extrabold">Sobre Nós</h1>
                <div className="pl-2">
                    <h2 className="mt-2 text-lg font-semibold">O que eu sou?</h2>
                    <p className="font-medium mt-2">Esta é um site com 3 páginas feito com o propósito de praticar Next.js em um projeto de E-commerce com opções específicas que apenas funcionariam para um site pequeno, ou seja, o propósito desse site não é ser escalável para ter mais do que 3 produtos, já que o jeito que eles form feitos torna impraticável ter muitos produtos, e essa foi uma escolha conciente minha. <br /> Mesmo sendo menos escalável o código ficou mais complexo do que caso fossem mais escaláveis(sobre a escolha de versões), porém seria mais prático para um possível usuário que ele tivesse esse layout mais direto, além de que isso seria também um jeito diferente, para mim, de projetar os produtos, mesmo que dificilmente eu o usaria em projetos reais.</p>
                </div>
            </main>
        </>
    )
}