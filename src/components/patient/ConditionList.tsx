import { Badge } from "@/components/ui/badge";

export const ConditionList = ({ conditions }: { conditions: string[] }) => {
  return (
    <div className="mb-6">
      <h3 className="text-sm font-semibold text-orange-700 dark:text-orange-400 uppercase tracking-wider mb-3">
        Condições de Saúde
      </h3>
      <div className="flex flex-wrap gap-2">
        {conditions.map((condition) => (
          <Badge 
            key={condition} 
            variant="secondary"
            className="bg-orange-100 text-orange-800 hover:bg-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:hover:bg-orange-900/50 py-1.5 px-3"
          >
            {condition}
          </Badge>
        ))}
      </div>
    </div>
  );
};
