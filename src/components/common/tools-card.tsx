import Image from "next/image";

interface Props {
  imageSrc: string;
}

export default function ToolsCard({ imageSrc }: Props) {
  return (
    <div className="w-full aspect-square relative">
      <Image
        src={imageSrc}
        alt={imageSrc}
        fill
        className="rounded-sm object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
}

