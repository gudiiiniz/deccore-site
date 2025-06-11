import Image from "next/image";

export default function HomeSection3() {
  return (
    <section className="w-2/3 mx-auto flex flex-row items-start justify-between my-40 gap-20">
      <div className="w-1/2">
        <h2 className="text-2xl font-bold">
          Deccore Serigrafia em Constante Inovação:
        </h2>
        <h4 className="font-bold">
          Explorando Novas Parcerias e Tecnologias na NPE 2024 em Orlando
        </h4>
        <p className="mt-6 text-justify">
          Nossa diretoria representada por: Rogério Cunha e Renan Cunha, está
          marcando presença na NPE2024 The Plastics Show, um dos eventos mais
          emblemáticos do setor de plásticos, realizado em Orlando, Flórida,
          EUA. Este evento internacional serve como um palco crucial para a
          exploração de novas tecnologias e o estabelecimento de parcerias
          estratégicas que podem revolucionar o mercado de máquinas automáticas
          serigráficas.
          <br />
          <br />
          Com um foco contínuo em inovação e qualidade, nossa equipe está
          ativamente engajada com tecnologia e especialistas do setor para
          trazer conhecimentos e soluções que possam elevar ainda mais a
          eficiência e a precisão de nossos produtos. A participação no evento
          sublinha nosso compromisso não apenas com o crescimento da Deccore
          Serigrafia, mas também com o avanço do setor como um todo.
          <br />
          <br />
          Ao explorar as novidades apresentadas no evento, buscamos incorporar
          avanços tecnológicos que garantam a nossos clientes acesso às mais
          recentes e eficazes soluções em serigrafia automática.
        </p>
      </div>
      <div className="w-1/2">
        <Image
          src={"/section3/home-8.png"}
          alt={"/section3/home-8.png"}
          width={800}
          height={600}
          className="w-full h-full rounded-sm"
        />
      </div>
    </section>
  );
}
