import SalesCard from "@/components/common/sales-card";
import Image from "next/image";
import { electricTools } from "@/lib/electric-defs";

export default function Eletric() {
  return (
    <>
      <div className="w-full h-[600px] relative">
        <Image
          src={"/eletric/banner.jpg"}
          alt={"/eletric/banner.jpg"}
          fill
          className="object-cover"
        />
      </div>

      <section className="w-5/6 mx-auto flex flex-col text-center py-20">
        <h2 className="text-2xl text-[#0E0458] font-semibold">
          Deccore Peças On-Line
        </h2>
        <p className="font-semibold mt-1">Linha Elétrica</p>
        <div className="grid grid-cols-4 gap-4 mt-18">
          {Array.from({ length: 145 }, (_, idx) => (
            <SalesCard
              key={idx}
              imageSrc={`/eletric/photo (${idx}).png`}
              title={electricTools[idx].title}
              subtitle={electricTools[idx].subtitle}
            />
          ))}
        </div>
      </section>
    </>
  );
}
