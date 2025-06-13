"use client";
import Machines from "@/components/common/machines";
import { useTranslation } from "react-i18next";

export default function DryingOven() {
  const { t } = useTranslation();
  return (
    <Machines
      bannerSrc={"/drying-oven/banner.jpg"}
      title={t("uv-drying.title")}
      subtitle={t("uv-drying.subtitle")}
      model={"2515"}
      modelType={t("machines.type-semiautomatic")}
      productivity={"2000 à 3000 P/H"}
      description={t("uv-drying.desc")}
      imagesSrc={[
        "/drying-oven/photo1.jpg",
        "/drying-oven/photo2.jpg",
        "/drying-oven/photo3.jpg",
        "/drying-oven/photo4.jpg",
      ]}

    />
  );
}