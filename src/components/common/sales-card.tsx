import Image from "next/image";

interface Props {
  imageSrc: string;
  title: string;
  subtitle: string;
}

export default function SalesCard({ imageSrc, title, subtitle }: Props) {
  return (
    <div className="w-full h-[26rem] flex flex-col rounded-sm shadow-2xl shadow-black/50 cursor-pointer">
      <div className="w-72 h-72 relative mx-auto mt-5">
        <Image
          src={imageSrc}
          alt={imageSrc}
          fill
          className="rounded-sm"
        />
      </div>
      <div className="mt-6">
        <p className="font-bold">{title}</p>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
