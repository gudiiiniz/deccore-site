"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

export default function Reform() {
  const [index, setIndex] = useState(-1);

  const images = Array.from({ length: 8 }, (_, idx) => ({
    src: `/reform/reform-${idx + 1}.jpg`,
  }));

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

      <section className="pb-10 w-2/3 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="relative w-72 aspect-square rounded-sm overflow-hidden mx-auto cursor-pointer"
            onClick={() => setIndex(idx)}
          >
            <Image
              src={img.src}
              alt={`Reforma ${idx + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
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
