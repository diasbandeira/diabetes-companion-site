import { patientData } from "@/data/patientData";
import { PatientHeader } from "@/components/patient/PatientHeader";
import { ConditionList } from "@/components/patient/ConditionList";
import { HypoglycemiaGuide } from "@/components/patient/HypoglycemiaGuide";
import { MedicationList } from "@/components/patient/MedicationList";
import { EmergencyContact } from "@/components/patient/EmergencyContact";

const Index = () => {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 pb-24 font-sans selection:bg-orange-200 selection:text-orange-900">
      <main className="max-w-xl mx-auto pt-4 px-4 sm:pt-8 sm:px-6">
        
        {/* Main Card Container */}
        <div className="bg-white dark:bg-zinc-900/50 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800/50 overflow-hidden backdrop-blur-xl transition-all duration-300">
          
          <PatientHeader data={patientData} />

          <div className="p-5 sm:p-7">
            <ConditionList conditions={patientData.conditions} />
            
            <HypoglycemiaGuide data={patientData.hypoglycemia} />
            
            <MedicationList 
              medications={patientData.medications}
              insulins={patientData.insulins}
              correctionTable={patientData.correctionTable}
            />
          </div>

        </div>

        <p className="text-center text-xs text-zinc-400 dark:text-zinc-500 mt-6 mb-8 px-4">
          Este cartão contém informações médicas importantes. Mantenha sempre consigo.
        </p>

      </main>

      <EmergencyContact data={patientData.emergencyContact} />
    </div>
  );
};

export default Index;
