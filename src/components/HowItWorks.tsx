const steps = [
  { number: "01", title: "Análise", description: "Entendemos seu negócio e identificamos oportunidades de automação." },
  { number: "02", title: "Planejamento", description: "Criamos a estratégia e arquitetura ideal para sua solução." },
  { number: "03", title: "Desenvolvimento", description: "Construímos e testamos sua solução com qualidade e agilidade." },
  { number: "04", title: "Entrega & Suporte", description: "Implantamos e acompanhamos os resultados com suporte contínuo." },
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Como <span className="text-gradient">Funciona</span>
          </h2>
          <p className="text-muted-foreground text-lg">Processo simples e transparente</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative text-center">
              <div className="text-5xl font-bold text-primary/20 mb-4">{step.number}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 w-8 h-px bg-primary/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
