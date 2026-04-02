import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-bold text-xl">
          <Zap className="w-6 h-6 text-primary" />
          <span className="text-gradient">AutoDev</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Home</a>
          <a href="#servicos" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Serviços</a>
          <a href="#como-funciona" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Como Funciona</a>
          <a href="#contato"><Button size="sm">Contato</Button></a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border px-4 py-4 flex flex-col gap-4">
          <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors" onClick={() => setOpen(false)}>Home</a>
          <a href="#servicos" className="text-muted-foreground hover:text-foreground transition-colors" onClick={() => setOpen(false)}>Serviços</a>
          <a href="#como-funciona" className="text-muted-foreground hover:text-foreground transition-colors" onClick={() => setOpen(false)}>Como Funciona</a>
          <a href="#contato" onClick={() => setOpen(false)}><Button size="sm" className="w-fit">Contato</Button></a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
