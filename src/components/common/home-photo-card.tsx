import Image from "next/image";

interface Props {
  imageSrc: string;
  label1: string;
  label2: string;
}

export default function HomePhotoCard({ imageSrc, label1, label2 }: Props) {
  return (
    <div className="text-center group">
      <Image
        src={imageSrc}
        alt={imageSrc}
        width={1000}
        height={1000}
        className="rounded-sm w-72 h-72 cursor-pointer mx-auto group-hover:scale-105 transition-transform duration-300"
      />
      <p className="mt-4">
        <b>{label1}</b>
        <br />
        {label2}
      </p>
    </div>
  );
}
