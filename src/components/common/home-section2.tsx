import Image from "next/image";

export default function HomeSection2() {
  return (
    <section className="w-2/3 mx-auto flex flex-row items-center my-20 gap-20">
      <div className="w-1/2">
        <h2 className="text-2xl font-bold">Plástico Brasil 2025</h2>
        <h4 className="font-bold">
          Presença com soluções inovadoras em automação serigráfica
        </h4>
        <p className="mt-6 text-justify">
          A Deccore Serigrafia, referência nacional na fabricação e reforma de
          máquinas serigráficas automáticas, está participando da edição 2025 da
          Plástico Brasil {`-`} Feira Internacional do Plástico, que acontece
          entre os dias 24 e 28 de março, no São Paulo Expo.
          <br />
          <br />
          Com uma trajetória marcada pela excelência técnica e foco em inovação,
          a Deccore leva ao evento suas soluções em automação serigráfica,
          desenvolvidas para atender empresas que buscam modernizar seus
          processos com equipamentos de alta produtividade, precisão e
          confiabilidade.
          <br />
          <br />
          Durante os cinco dias da feira, o público poderá conhecer de perto os
          diferenciais das máquinas automáticas da Deccore, criadas para
          otimizar os processos de impressão serigráfica nos mais diversos tipos
          de aplicações industriais. A empresa também apresenta seu serviço de
          reforma e modernização de equipamentos, uma alternativa eficiente para
          quem deseja atualizar sua linha de produção com excelente
          custo-benefício.
          <br />
          <br />
          “A Plástico Brasil é uma grande vitrine para o setor, e para nós da
          Deccore, é uma oportunidade de mostrar ao mercado o nosso compromisso
          com o desenvolvimento de soluções sob medida para a indústria. Estamos
          prontos para atender os desafios dos nossos clientes com tecnologia,
          qualidade e suporte técnico especializado”, afirma a equipe técnica da
          empresa.
          <br />
          <br />A participação da Deccore na feira reforça sua posição como
          parceira estratégica para empresas que desejam investir em automação e
          melhoria contínua, contribuindo para o avanço da impressão serigráfica
          no Brasil. Profissionais do setor, compradores e interessados em
          inovação são convidados a visitar o estande da empresa, conferir as
          novidades e conversar com a equipe técnica.
        </p>
      </div>
      <div className="w-1/2 flex justify-center">
        <Image
          src={"/section2/home-7.jpg"}
          alt={"/section2/home-7.jpg"}
          width={800}
          height={600}
          className="w-full h-full rounded-sm"
        />
      </div>
    </section>
  );
}