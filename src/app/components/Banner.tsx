import Image from "next/image";
import Link from "next/link";

interface BannerProps {
    title: string,
    description?: string,
    button_description?: string,
    button_href?: string,
    bg_image: string,
    img?: {
        src: string,
        alt: string
    },
    className?: string
}


export default function Banner(props: BannerProps) {
    const backgroundStyle = props.bg_image ? {backgroundImage: `url(${props.bg_image})`} : {};

    return (
        <section className=
            {`relative flex justify-center items-center my-8 h-80 text-white ${props.className || ''} bg-center bg-cover lg:h-[420px]`} 
            style={backgroundStyle}
        >
            <div className="absolute inset-0 w-full h-full bg-black/50 "></div>
            <div className=" absolute flex flex-col md:flex-row items-center justify-between w-2/4">
                {props.img && (
                    <Image src={props.img.src} alt={props.img.alt} width={128} height={128}/>
                )}
                <div className={`flex flex-col items-center justify-center mt-4 md:mt-0 ${props.img ? 'md:w-3/4' : 'md:w-full'}`}>
                    <h2 className="font-extrabold text-2xl text-center">{props.title}</h2>
                    <div className="flex flex-col gap-5 items-center mt-6">
                        <p>{props.description}</p>
                        {props.button_href && props.button_description && (
                            <Link className="w-fit font-bold text-xl py-1 md:py-2 px-8 md:px-16 rounded-md bg-yellow-400 hover:scale-105 hover:bg-yellow-500" href={props.button_href}>
                                {props.button_description}
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}