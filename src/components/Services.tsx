import { Code2, Workflow, Bot, Send, Smartphone, Plug } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Desenvolvimento de Software",
    description: "Aplicações web e mobile personalizadas, APIs robustas e sistemas completos para o seu negócio.",
    tags: ["React & Next.js", "Node.js & Python", "Banco de Dados", "APIs REST"],
  },
  {
    icon: Workflow,
    title: "Automação com n8n",
    description: "Fluxos automatizados que conectam seus sistemas, eliminam tarefas repetitivas e aumentam a produtividade.",
    tags: ["Integração de Sistemas", "Automação de Processos", "Webhooks", "Scheduled Tasks"],
  },
  {
    icon: Bot,
    title: "Bots Inteligentes",
    description: "Bots inteligentes para Instagram, WhatsApp, Telegram que atendem clientes 24/7.",
    tags: ["Instagram DM Bot", "WhatsApp Business", "Telegram Bot", "Respostas Automáticas"],
  },
  {
    icon: Send,
    title: "Disparo em Massa WhatsApp",
    description: "Envio de mensagens em massa segmentadas, campanhas de marketing e notificações para sua base de contatos.",
  },
  {
    icon: Smartphone,
    title: "Aplicativos Mobile",
    description: "Desenvolvimento de apps nativos e híbridos para iOS e Android.",
    tags: ["React Native", "Flutter", "Apps Nativos", "Publicação na Store"],
  },
  {
    icon: Plug,
    title: "Integrações & APIs",
    description: "Conecte suas ferramentas e sistemas através de integrações personalizadas.",
    tags: ["APIs Customizadas", "Integrações CRM", "Sincronização de Dados", "Webhooks"],
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluções completas de tecnologia para automatizar e escalar seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-6 rounded-xl bg-card glow-border hover:glow-box transition-all duration-500 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              {service.tags && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
