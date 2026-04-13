import { Pill, Syringe, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface MedListProps {
  medications: { name: string; dosage: string }[];
  insulins: { name: string; dosage: string[] }[];
  correctionTable: { range: string; dose: string }[];
}

export const MedicationList = ({ medications, insulins, correctionTable }: MedListProps) => {
  return (
    <div className="space-y-6">
      {/* Comprimidos */}
      <section>
        <h3 className="text-sm font-semibold text-orange-700 dark:text-orange-400 uppercase tracking-wider mb-4 flex items-center gap-2">
          <Pill className="w-4 h-4" /> Uso Contínuo
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {medications.map((med, idx) => (
            <Card key={idx} className="bg-white dark:bg-zinc-900 border-orange-100 dark:border-zinc-800 shadow-sm transition-all hover:shadow-md">
              <CardContent className="p-4">
                <div className="font-semibold text-zinc-900 dark:text-zinc-100">{med.name}</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{med.dosage}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Insulina */}
      <section className="bg-orange-50/50 dark:bg-orange-950/10 p-5 rounded-xl border border-orange-100 dark:border-orange-900/30">
        <h3 className="text-sm font-semibold text-orange-700 dark:text-orange-400 uppercase tracking-wider mb-4 flex items-center gap-2">
          <Syringe className="w-4 h-4" /> Insulinas
        </h3>
        <div className="space-y-3">
          {insulins.map((ins, idx) => (
            <div key={idx} className="bg-white dark:bg-zinc-900 p-4 rounded-lg border-l-4 border-orange-400 dark:border-orange-600 shadow-sm">
              <div className="font-bold text-orange-800 dark:text-orange-300 mb-2">{ins.name}</div>
              <ul className="space-y-1">
                {ins.dosage.map((dose, idose) => (
                  <li key={idose} className="text-sm text-zinc-700 dark:text-zinc-300 flex items-start gap-2">
                    <span className="text-orange-400 mt-0.5">•</span> {dose}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tabela de Correção */}
        <div className="mt-6 bg-white dark:bg-zinc-900 rounded-lg overflow-hidden border border-orange-200 dark:border-orange-900/50 shadow-sm">
          <div className="bg-orange-500 dark:bg-orange-700 px-4 py-2.5 text-white text-sm font-semibold flex items-center gap-2">
            <Zap className="w-4 h-4 text-orange-100" /> Tabela de Correção
          </div>
          <div className="divide-y divide-orange-100 dark:divide-zinc-800">
            {correctionTable.map((corr, idx) => (
              <div key={idx} className="flex justify-between p-3 text-sm hover:bg-orange-50 dark:hover:bg-zinc-800/50 transition-colors">
                <span className="text-zinc-600 dark:text-zinc-400">{corr.range}</span>
                <span className="font-bold text-orange-700 dark:text-orange-400">{corr.dose}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
