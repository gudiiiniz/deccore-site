import Image from "next/image";

export default function SalesCard() {
  return (
    <div className="w-full h-[26rem] flex flex-col rounded-sm shadow-2xl shadow-black/50 cursor-pointer">
      <div className="w-72 h-72 relative mx-auto mt-5">
        <Image
          src={"/tools/photo (0).jpg"}
          alt={"/tools/photo (0).jpg"}
          fill
          className="rounded-sm"
        />
      </div>
      <div className="mt-6">
        <p className="font-bold">asdlkfj</p>
        <p>fffff</p>
      </div>
    </div>
  );
}
