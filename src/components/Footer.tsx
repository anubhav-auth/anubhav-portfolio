
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="text-gradient text-lg font-bold mb-2">Portfolio</p>
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          
          <div className="mt-6 md:mt-0">
            <Button 
              onClick={scrollToTop}
              className="group bg-white/5 hover:bg-white/10 text-white border border-white/10"
            >
              Back to Top
              <ArrowUp className="ml-2 h-4 w-4 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
