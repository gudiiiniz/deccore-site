import HomePhotoCard from "./home-photo-card";

const photoGrid = [
  {
    imageSrc: "home-grid/grid-1.jpg",
    label1: "Máquinas Manuais",
    label2: "Flamador",
  },
  {
    imageSrc: "home-grid/grid-2.jpg",
    label1: "Máquinas Semiautomáticas",
    label2: "Serigráfica Universal",
  },
  {
    imageSrc: "home-grid/grid-3.jpg",
    label1: "Máquinas Semiautomáticas",
    label2: "Estufa de Secagem UV",
  },
  {
    imageSrc: "home-grid/grid-4.jpg",
    label1: "Máquinas Semiautomáticas",
    label2: "Serigráfica para Galões",
  },
  {
    imageSrc: "home-grid/grid-5.jpg",
    label1: "Máquinas Automáticas",
    label2: "UV / 1 Cor",
  },
  {
    imageSrc: "home-grid/grid-6.jpg",
    label1: "Máquinas Automáticas",
    label2: "Cilíndrica UV / 2 Cores",
  },
];

export default function HomeGrid() {
  return (
    <div className="grid grid-cols-3 w-6/10 mx-auto gap-20 mt-20">
      {photoGrid.map(p => (
        <HomePhotoCard imageSrc={p.imageSrc} label1={p.label1} label2={p.label2} key={p.imageSrc} />
      ))}
    </div>
  );
}
