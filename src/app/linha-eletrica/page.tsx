"use client";

import { useState } from "react";
import Image from "next/image";
import SalesCard from "@/components/common/sales-card";
import { electricTools } from "@/lib/electric-defs";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { useTranslation } from "react-i18next";

export default function Eletric() {
  const [index, setIndex] = useState(-1);

  const images = Array.from({ length: 145 }, (_, idx) => ({
    src: `/eletric/photo (${idx}).png`,
  }));

  const { t } = useTranslation();

  return (
    <>
      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] relative">
        <Image
          src="/eletric/banner.jpg"
          alt="Banner linha elétrica"
          fill
          className="object-cover"
          priority
        />
      </div>

      <section className="w-5/6 mx-auto flex flex-col text-center py-20">
        <h2 className="text-2xl text-[#0E0458] font-semibold">
          {t("electric.title")}
        </h2>
        <p className="font-semibold mt-1">{t("electric.subtitle")}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-18">
          {images.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setIndex(idx)}
              className="cursor-pointer"
            >
              <SalesCard
                imageSrc={img.src}
                title={electricTools[idx].title}
                subtitle={electricTools[idx].subtitle}
              />
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
