import ToolsCard from "@/components/common/tools-card";
import Image from "next/image";

export default function Tools() {
  return (
    <>
      <div className="w-full h-[600px] relative">
        <Image
          src={"/tools/banner.jpg"}
          alt={"/tools/banner.jpg"}
          fill
          className="object-cover"
        />
      </div>

      <section className="w-2/3 mx-auto flex flex-col text-center py-20">
        <h2 className="text-2xl text-[#0E0458] font-semibold">
          Peças e Ferramentas
        </h2>
        <div className="w-full mx-auto grid grid-cols-4 gap-4 mt-14 justify-items-center">
          {Array.from({ length: 35 }, (_, idx) => (
            <ToolsCard key={idx} imageSrc={`/tools/photo (${idx + 1}).jpg`} />
          ))}
        </div>
      </section>
    </>
  );
}
