export default function HomeSection1() {
  return (
    <section className="w-2/3 mx-auto flex flex-row items-start justify-between my-20 gap-20">
      <div className="w-1/2">
        <h2 className="text-2xl font-bold">Sobre Nós</h2>
        <p className="mt-10 text-justify">
          A Deccore Serigrafia foi fundada no ano de 2000 como empresa de
          representações e revenda de produtos para serigrafia. Em 2014,
          transformou-se em indústria, justamente quando foi detectada, pelo seu
          proprietário, a necessidade de atender alguns clientes que precisavam
          de reforma e manutenção em suas maquinas serigráficas.
          <br />
          <br />
          Com o aumento da demanda, passamos a fabricar e fornecer peças e
          equipamentos para o mercado serigráfico em geral, e logo vimos a
          oportunidade de fabricar máquinas novas. Hoje, além de darmos
          continuidade ao nosso trabalho de assistência técnica e reforma,
          também fabricamos máquinas para diversos segmentos. A Deccore
          Serigrafia possui tecnologia e experiência comprovada no atendimento
          ao mercado serigráfico, trabalhando fortemente em Projetos Especiais e
          de Automação, conforme necessidades e desafios apresentados pelos
          nossos clientes.
          <br />
          <br />
          Nossa linha de fabricação dispõe de Máquinas Automáticas e Semi
          Automáticas, fabricação de Fornos U.V., Flamadores, Alimentadores,
          ferramentais diversos e peças em geral.
          <br />
          <br />
          Nossos colaboradores possuem longa experiência na fabricação de
          máquinas e buscamos, constantemente, atender às necessidades do
          mercado serigráfico, utilizando as mais modernas e avançadas
          tecnologias disponíveis. Estamos capacitados para desenvolver projetos
          de acordo com o perfil e a real necessidade exigida pelo segmento
          serigráficos.
          <br />
          <br />A Deccore Serigrafia é uma empresa nacional que desenvolveu alto
          nível de expertise para produzir e reformar máquinas serigráficas de
          pequeno, médio e grande porte, graças à sua metodologia de trabalho
          que possibilita total controle e acompanhamento em todas as etapas do
          processo construtivo.
        </p>
      </div>
      <div className="w-1/2">
        <div>
          <h2 className="text-2xl font-bold">Impressora 3D já em Operação!</h2>
          <p className="mt-10 text-justify">
            Estamos empolgados em anunciar que a Deccore Serigrafia agora conta
            com uma impressora 3D de última geração, já em operação em nossa
            empresa! Com esta aquisição, estamos prontos para levar nossos
            serviços a um novo patamar de inovação e personalização.
            <br />
            <br /> A nova impressora 3D nos permite criar peças e protótipos com
            alta precisão e detalhamento, atendendo às necessidades específicas
            de cada cliente. Seja para o desenvolvimento de novos produtos ou
            para a personalização de projetos existentes, estamos preparados
            para oferecer soluções únicas e criativas.
            <br />
            <br /> Convidamos você a descobrir como essa tecnologia pode
            beneficiar seu próximo projeto. Entre em contato conosco para saber
            mais sobre como podemos transformar suas ideias em realidade com a
            qualidade e excelência que você já conhece.
          </p>
        </div>
        <video className="mt-16 rounded-sm" src="/section1/home-video2.mp4"
        playsInline
        controls
        loop
        ></video>
      </div>
    </section>
  );
}
