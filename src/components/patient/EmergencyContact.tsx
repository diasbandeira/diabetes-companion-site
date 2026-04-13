import { PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactProps {
  data: {
    name: string;
    phone: string;
    formattedPhone: string;
  };
}

export const EmergencyContact = ({ data }: ContactProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-t border-orange-100 dark:border-zinc-800 pb-safe z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] pt-4">
      <div className="max-w-xl mx-auto flex items-center justify-between gap-4">
        <div className="hidden sm:block">
          <p className="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wider font-semibold">Contato de Emergência</p>
          <p className="font-bold text-zinc-900 dark:text-zinc-100">{data.name}</p>
        </div>
        
        <Button 
          asChild 
          size="lg" 
          className="w-full sm:w-auto flex-1 sm:flex-none uppercase font-bold tracking-wide bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
        >
          <a href={`tel:${data.formattedPhone}`}>
            <PhoneCall className="w-5 h-5 mr-2 animate-pulse" />
            Ligar para Emergência
          </a>
        </Button>
      </div>
    </div>
  );
};
