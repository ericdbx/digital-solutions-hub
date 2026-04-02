import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(185_80%_50%_/_0.08)_0%,_transparent_70%)]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glow-border bg-secondary/50 mb-8">
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">Automação & Desenvolvimento</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          Transforme sua empresa com{" "}
          <span className="text-gradient glow-text">automação inteligente</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Desenvolvimento de software, automações com n8n, bots para redes sociais e 
          disparo em massa no WhatsApp. Soluções sob medida para escalar seu negócio.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-6 font-semibold group">
            Solicitar Orçamento
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6 glow-border hover:bg-primary/10">
            Ver Serviços
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
