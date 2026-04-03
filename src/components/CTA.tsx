import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const CTA = () => {
  return (
    <section id="contato" className="py-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="p-8 md:p-12 rounded-2xl glow-border glow-box bg-card relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(185_80%_50%_/_0.06)_0%,_transparent_60%)]" />
          <div className="relative z-10">
            <MessageCircle className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Precisa de algo <span className="text-gradient">personalizado</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
              Cada negócio tem suas particularidades. Vamos conversar sobre suas necessidades e criar uma solução sob medida para você.
            </p>
            <a href="https://wa.me/5511982377723?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="lg" className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 font-semibold group w-full sm:w-auto">
                Conversar no WhatsApp
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
