export default function HomeGrid() {
  return (
    <div className="grid grid-cols-3 w-6/10 mx-auto gap-20 mt-20">
      <div className="mt-20 text-center group">
        <img
          src={"home-grid/grid-1.jpg"}
          alt=""
          className="rounded-2xl w-72 h-72 cursor-pointer mx-auto group-hover:scale-105 transition-transform duration-300"
        />
        <p className="mt-4">
          <b>Máquinas Manuais</b>
          <br />
          Flamador
        </p>
      </div>
      <div className="mt-20 text-center group">
        <img
          src={"home-grid/grid-2.jpg"}
          alt=""
          className="rounded-2xl w-72 h-72 cursor-pointer mx-auto group-hover:scale-105 transition-transform duration-300"
        />
        <p className="mt-4">
          <b>Máquinas Semiautomáticas</b>
          <br />
          Serigráfica Universal
        </p>
      </div>
      <div className="mt-20 text-center group">
        <img
          src={"home-grid/grid-3.jpg"}
          alt=""
          className="rounded-2xl w-72 h-72 cursor-pointer mx-auto group-hover:scale-105 transition-transform duration-300"
        />
        <p className="mt-4">
          <b>Máquinas Semiautomáticas</b>
          <br />
          Estufa de Secagem UV
        </p>
      </div>
      <div className="text-center group">
        <img
          src={"home-grid/grid-4.jpg"}
          alt=""
          className="rounded-2xl w-72 h-72 cursor-pointer mx-auto group-hover:scale-105 transition-transform duration-300"
        />
        <p className="mt-4">
          <b>Máquinas Semiautomáticas</b>
          <br />
          Serigráfica para Galões
        </p>
      </div>
      <div className="text-center group">
        <img
          src={"home-grid/grid-5.jpg"}
          alt=""
          className="rounded-2xl w-72 h-72 cursor-pointer mx-auto group-hover:scale-105 transition-transform duration-300"
        />
        <p className="mt-4">
          <b>Máquinas Automáticas</b>
          <br />
          UV / 1 Cor
        </p>
      </div>
      <div className="text-center group">
        <img
          src={"home-grid/grid-6.jpg"}
          alt=""
          className="rounded-2xl w-72 h-72 cursor-pointer mx-auto group-hover:scale-105 transition-transform duration-300"
        />
        <p className="mt-4">
          <b>Máquinas Automáticas</b>
          <br />
          Cilíndrica UV / 2 Cores
        </p>
      </div>
    </div>
  );
}
