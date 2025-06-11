import Image from "next/image";

export default function Flamer() {
    return(
        <>
        <div className="w-full h-[600px] relative">
            <Image
            src="/flamer/banner.webp"
            alt="banner.webp"
            fill
            className="object-cover"
            />
        </div>

        
        </>
    )
}