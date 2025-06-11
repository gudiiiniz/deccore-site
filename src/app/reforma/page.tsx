import Image from "next/image";

export default function Reform() {
  return (
    <>
      <video
        src="/reform/banner-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-[800px] object-fill"
      ></video>

      <div className="py-10 w-2/3 mx-auto text-center">
        <h2 className="text-2xl text-[#0E0458] font-semibold">
          Reforma de Máquinas
        </h2>
      </div>

      <section className="pb-10 w-2/3 mx-auto grid grid-cols-4 gap-10">
        {Array.from({ length: 8 }).map((_, idx) => (
          <div
            key={idx}
            className="relative w-72 aspect-square rounded-sm overflow-hidden mx-auto cursor-pointer"
          >
            <Image
              src={`/reform/reform-${idx + 1}.jpg`}
              alt={`Reforma ${idx + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </section>
    </>
  );
}