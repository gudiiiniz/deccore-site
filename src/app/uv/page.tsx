"use client";
import Machines from "@/components/common/machines";
import { useTranslation } from "react-i18next";

export default function UV() {
  const { t } = useTranslation();
  return (
    <Machines
      bannerSrc={"/uv/banner.jpg"}
      title={t("uv.title")}
      subtitle={t("uv.subtitle")}
      model={"DECC M.S.C.U.V 1C"}
      modelType={t("machines.type-automatic")}
      productivity={"2500 à 3300 P/H"}
      description={t("uv.desc")}
      imagesSrc={[
        "/uv/photo1.jpg",
        "/uv/photo2.jpg",
        "/uv/photo3.jpg",
        "/uv/photo4.jpg",
      ]}
    />
  );
}
