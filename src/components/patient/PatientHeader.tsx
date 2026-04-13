import { Activity, Droplet } from "lucide-react";
import type { PatientData } from "@/data/patientData";

export const PatientHeader = ({ data }: { data: PatientData }) => {
  return (
    <div className="relative overflow-hidden rounded-t-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 shadow-md dark:from-orange-600 dark:to-orange-800">
      <div className="relative z-10 text-center space-y-2">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
          {data.name}
        </h1>
        <p className="text-orange-100/90 text-sm md:text-base font-medium">
          Cartão de Informações Médicas
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
          <div className="flex items-center gap-2 bg-black/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
            <Activity className="h-4 w-4" />
            <span>Nasc: {data.dob}</span>
          </div>
          <div className="flex items-center gap-2 bg-black/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
            <Droplet className="h-4 w-4 text-red-300" />
            <span>Sangue: {data.bloodType}</span>
          </div>
        </div>
      </div>
      
      {/* Decorative background shapes for the premium feel */}
      <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-white/10 blur-xl"></div>
      <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-black/10 blur-xl"></div>
    </div>
  );
};
