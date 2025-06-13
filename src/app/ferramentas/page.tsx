"use client";

import ToolsCard from "@/components/common/tools-card";
import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

export default function Tools() {
  const [index, setIndex] = useState(-1);

  const images = Array.from({ length: 36 }, (_, idx) => ({
    src: `/tools/photo (${idx}).jpg`,
  }));

  const { t } = useTranslation();

  return (
    <>
      <div className="w-full h-[300px] sm:h-[500px] lg:h-[600px] relative">
        <Image
          src={"/tools/banner.jpg"}
          alt="Banner"
          fill
          className="object-cover"
        />
      </div>

      <section className="w-full max-w-6xl px-4 mx-auto flex flex-col text-center py-20">
        <h2 className="text-2xl text-[#0E0458] font-semibold">
          {t("tools.title")}
        </h2>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-14">
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
