import { useTranslation } from "react-i18next";
import HomePhotoCard from "./home-photo-card";

export default function HomeGrid() {
  const { t } = useTranslation();

  const photoGrid = [
    {
      imageSrc: "/home-grid/grid-1.jpg",
      label1: t("home.photo-grid.photo1.label1"),
      label2: t("home.photo-grid.photo1.label2"),
      href: "/flamador-manual",
    },
    {
      imageSrc: "/home-grid/grid-2.jpg",
      label1: t("home.photo-grid.photo2.label1"),
      label2: t("home.photo-grid.photo2.label1"),
      href: "/serigrafia-universal",
    },
    {
      imageSrc: "/home-grid/grid-3.jpg",
      label1: t("home.photo-grid.photo3.label1"),
      label2: t("home.photo-grid.photo3.label1"),
      href: "/estufa-secagem",
    },
    {
      imageSrc: "/home-grid/grid-4.jpg",
      label1: t("home.photo-grid.photo4.label1"),
      label2: t("home.photo-grid.photo4.label1"),
      href: "/serigrafia-galoes",
    },
    {
      imageSrc: "/home-grid/grid-5.jpg",
      label1: t("home.photo-grid.photo5.label1"),
      label2: t("home.photo-grid.photo5.label1"),
      href: "/uv",
    },
    {
      imageSrc: "/home-grid/grid-6.jpg",
      label1: t("home.photo-grid.photo6.label1"),
      label2: t("home.photo-grid.photo6.label1"),
      href: "/cilindrica-uv",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-20 max-w-6xl mx-auto px-4">
      {photoGrid.map((p) => (
        <HomePhotoCard
          imageSrc={p.imageSrc}
          label1={p.label1}
          label2={p.label2}
          key={p.imageSrc}
          href={p.href}
        />
      ))}
    </div>
  );
}
