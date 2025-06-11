import Image from "next/image";

interface Props {
  imageSrc: string;
}

export default function ToolsCard({ imageSrc }: Props) {
  return (
    <div className="w-72 h-72 relative">
      <Image
        src={imageSrc}
        alt={imageSrc}
        fill
        className="rounded-sm w cursor-pointer hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
}
