import HomePhotoCard from "./home-photo-card";

const photoGrid = [
  {
    imageSrc: "/home-grid/grid-1.jpg",
    label1: "Máquinas Manuais",
    label2: "Flamador",
    href: "/flamador-manual",
  },
  {
    imageSrc: "/home-grid/grid-2.jpg",
    label1: "Máquinas Semiautomáticas",
    label2: "Serigráfica Universal",
    href: "/serigrafia-universal",
  },
  {
    imageSrc: "/home-grid/grid-3.jpg",
    label1: "Máquinas Semiautomáticas",
    label2: "Estufa de Secagem UV",
    href: "/estufa-secagem",
  },
  {
    imageSrc: "/home-grid/grid-4.jpg",
    label1: "Máquinas Semiautomáticas",
    label2: "Serigráfica para Galões",
    href: "/serigrafia-galoes",
  },
  {
    imageSrc: "/home-grid/grid-5.jpg",
    label1: "Máquinas Automáticas",
    label2: "UV / 1 Cor",
    href: "/uv",
  },
  {
    imageSrc: "/home-grid/grid-6.jpg",
    label1: "Máquinas Automáticas",
    label2: "Cilíndrica UV / 2 Cores",
    href: "/cilindrica-uv",
  },
];

export default function HomeGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-20 max-w-6xl mx-auto px-4">
      {photoGrid.map((p) => (
        <HomePhotoCard
          imageSrc={p.imageSrc}
          label1={p.label1}
          label2={p.label2}
          key={p.imageSrc} href={p.href}        />
      ))}
    </div>
  );
}
