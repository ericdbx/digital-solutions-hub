import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-bold">
          <Zap className="w-5 h-5 text-primary" />
          <span className="text-gradient">AutoDev</span>
        </div>
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} AutoDev. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
