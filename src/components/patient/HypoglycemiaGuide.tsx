import { AlertCircle, AlertTriangle, Info } from "lucide-react";

interface HypoGuideProps {
  data: {
    action: string;
    mildSymptoms: string[];
    severeSymptoms: string[];
  };
}

export const HypoglycemiaGuide = ({ data }: HypoGuideProps) => {
  return (
    <div className="mb-6 bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 rounded-r-lg overflow-hidden shadow-sm">
      <div className="p-4 sm:p-5 border-b border-red-100 dark:border-red-900/30 bg-red-100/50 dark:bg-red-900/10">
        <div className="flex items-start gap-3 mb-2">
          <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5 shrink-0" />
          <h3 className="font-bold text-red-800 dark:text-red-300 text-sm uppercase tracking-wide">
            Atenção: Hipoglicemia (Baixa de Açúcar)
          </h3>
        </div>
        <p className="text-red-700 dark:text-red-400 text-sm font-bold pl-8">
          {data.action}
        </p>
      </div>

      <div className="p-4 sm:p-5 pl-12 space-y-5">
        <div>
          <h4 className="text-sm font-semibold text-red-800 dark:text-red-300 flex items-center gap-2 mb-2">
            <Info className="w-4 h-4 text-red-500" /> Sintomas Comuns
          </h4>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-red-700/90 dark:text-red-400/90 leading-relaxed">
            {data.mildSymptoms.map((symptom, idx) => (
              <li key={idx}>{symptom}</li>
            ))}
          </ul>
        </div>
        
        <div className="pt-2 border-t border-red-100/50 dark:border-red-900/20">
          <h4 className="text-sm font-semibold text-red-900 dark:text-red-200 flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-red-600 dark:text-red-500" /> Sintomas Graves (Emergência)
          </h4>
          <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-red-800 dark:text-red-300 font-medium">
            {data.severeSymptoms.map((symptom, idx) => (
              <li key={idx}>{symptom}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
