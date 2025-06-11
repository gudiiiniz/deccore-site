import Image from "next/image";

export default function UniversalScreenPrinter() {
  return (
    <div className="w-full h-[600px] relative">
      <Image
        src={"/universal-screen-printer/banner.webp"}
        alt={"/universal-screen-printer/banner.webp"}
        fill
        className="object-cover"
      />
    </div>
  );
}