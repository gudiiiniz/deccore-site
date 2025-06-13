"use client";

import Machines from "@/components/common/machines";
import { useTranslation } from "react-i18next";

export default function Flamer() {
  const { t } = useTranslation();
  return (
    <Machines
      bannerSrc={"/flamer/banner.webp"}
      title={t("flamer.title")}
      subtitle={t("flamer.subtitle")}
      model={"450CBA"}
      modelType={"Manual"}
      productivity={"2000 P/H"}
      description={t("flamer.desc")}
      imagesSrc={[
        "/flamer/photo1.jpg",
        "/flamer/photo2.jpg",
        "/flamer/photo3.jpg",
        "/flamer/photo4.jpg",
      ]}
    />
  );
}
