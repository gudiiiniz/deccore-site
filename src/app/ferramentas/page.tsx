"use client";

import ToolsCard from "@/components/common/tools-card";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

export default function Tools() {
  const [index, setIndex] = useState(-1);

  const images = Array.from({ length: 36 }, (_, idx) => ({
    src: `/tools/photo (${idx}).jpg`,
  }));

  return (
    <>
      <div className="w-full h-[600px] relative">
        <Image
          src={"/tools/banner.jpg"}
          alt="Banner"
          fill
          className="object-cover"
        />
      </div>

      <section className="w-2/3 mx-auto flex flex-col text-center py-20">
        <h2 className="text-2xl text-[#0E0458] font-semibold">
          Peças e Ferramentas
        </h2>
        <div className="w-full mx-auto grid grid-cols-4 gap-10 mt-14 justify-items-center">
          {images.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setIndex(idx)}
              className="cursor-pointer"
            >
              <ToolsCard imageSrc={img.src} />
            </div>
          ))}
        </div>
      </section>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={images}
        plugins={[Zoom, Fullscreen]}
      />
    </>
  );
}
