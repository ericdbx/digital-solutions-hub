import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { useEffect, useState } from "react";

import heroImg1 from "@/assets/hero-carousel-1.jpg";
import heroImg2 from "@/assets/hero-carousel-2.jpg";
import heroImg3 from "@/assets/hero-carousel-3.jpg";

const images = [heroImg1, heroImg2, heroImg3];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Background carousel */}
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt=""
          width={1920}
          height={1080}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === current ? "opacity-30" : "opacity-0"
          }`}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/70" />

      {/* Glow effects */}
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

      {/* Carousel indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? "bg-primary w-6" : "bg-muted-foreground/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
