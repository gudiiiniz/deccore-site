"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function CylindricalUV() {
  const { t } = useTranslation();
  return (
    <>
      <div className="w-full h-[300px] sm:h-[600px] relative overflow-hidden">
        <video
          src="/cylindrical-uv/banner-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        ></video>
      </div>

      <section className="w-full max-w-6xl px-4 mx-auto pt-20 pb-20 flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-1/2">
          <h2 className="text-[#0E0458] text-2xl text-center font-semibold">
            {t("cylindrical.title")}
            <br /> {t("cylindrical.title2")} <br />
            {t("cylindrical.title3")}
          </h2>
          <p className="pt-1 text-xl font-semibold text-center">
            {t("cylindrical.subtitle")}
          </p>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col">
          <div className="overflow-x-auto rounded-lg shadow-md">
            <table className="w-full text-sm min-w-[300px]">
              <thead>
                <tr className="bg-blue-500 text-white text-left">
                  <th className="px-4 py-2 font-semibold text-center">
                    {t("machines.model")}
                  </th>
                  <th className="px-4 py-2 font-semibold text-center">
                    {t("machines.type")}
                  </th>
                  <th className="px-4 py-2 font-semibold text-center">
                    {t("machines.productivity")}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-2 font-bold text-black bg-gray-100 text-center">
                    DECC M.S.C.U.V 1C
                  </td>
                  <td className="px-4 py-2 text-center">
                    {t("machines.type-automatic")}
                  </td>
                  <td className="px-4 py-2 text-center">2500 à 3300 P/H</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="w-full pt-10 text-center text-gray-600 text-sm">
            {t("cylindrical.desc")}
          </p>
        </div>
      </section>

      <section
        className="w-full px-4 mx-auto pt-20 pb-20"
        style={{
          boxShadow: "0 -4px 6px -1px rgba(0,0,0,0.1)",
        }}
      >
        <h2 className="text-[#0E0458] text-2xl text-center font-semibold">
          {t("machines.title")}
        </h2>

        <div className="flex justify-center pt-10">
          <Image
            src="/cylindrical-uv/cylindrical-uv-1.jpg"
            alt="cylindrical-uv-1.jpg"
            width={400}
            height={1000}
            className="rounded-md shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300 object-cover max-w-full h-auto"
          />
        </div>
      </section>
    </>
  );
}
