import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="p-12 rounded-2xl glow-border glow-box bg-card relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(185_80%_50%_/_0.06)_0%,_transparent_60%)]" />
          <div className="relative z-10">
            <MessageCircle className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para <span className="text-gradient">automatizar</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
              Entre em contato e descubra como podemos transformar seus processos com tecnologia.
            </p>
            <Button size="lg" className="text-lg px-8 py-6 font-semibold group">
              Fale Comigo no WhatsApp
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
