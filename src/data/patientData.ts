export interface PatientData {
  name: string;
  dob: string;
  bloodType: string;
  conditions: string[];
  emergencyContact: {
    name: string;
    phone: string;
    formattedPhone: string;
  };
  hypoglycemia: {
    action: string;
    mildSymptoms: string[];
    severeSymptoms: string[];
  };
  medications: {
    name: string;
    dosage: string;
  }[];
  insulins: {
    name: string;
    dosage: string[];
  }[];
  correctionTable: {
    range: string;
    dose: string;
  }[];
}

export const patientData: PatientData = {
  name: "Flávia Modesto Sousa Dias",
  dob: "10/12/1987",
  bloodType: "A+",
  conditions: ["Diabetes Mellitus Tipo 1", "Hipertensão", "Glaucoma"],
  emergencyContact: {
    name: "André Dias",
    phone: "(31) 99274-7344",
    formattedPhone: "+5531992747344"
  },
  hypoglycemia: {
    action: "Em casos de hipoglicemia (baixa de açúcar no sangue) consuma algo com açúcar rapidamente.",
    mildSymptoms: [
      "Físicos: Tremores, suores, calafrios, suor frio, palpitações (coração acelerado), fome, náuseas, palidez, formigamento nos lábios/língua/bochechas.",
      "Mentais/Emocionais: Irritabilidade, nervosismo, ansiedade, dificuldade de concentração, confusão, mau humor, sonolência.",
      "Neurológicos: Dor de cabeça, tontura, vertigem, fraqueza, falta de coordenação motora."
    ],
    severeSymptoms: [
      "Visão turva ou embaçada.",
      "Fala arrastada.",
      "Dificuldade para ficar de pé ou andar.",
      "Sonolência extrema, desmaio (perda de consciência).",
      "Convulsões."
    ]
  },
  medications: [
    { name: "Metildopa 500 mg", dosage: "1 comprimido de 8 em 8 horas" },
    { name: "Atorvastatina 10 mg", dosage: "1 comprimido à noite" },
    { name: "Glifage XR 500 mg", dosage: "Tomar 02 comprimidos após o jantar" },
    { name: "Timolol 0,5%", dosage: "1 gota em cada olho de 12 em 12 horas" }
  ],
  insulins: [
    { 
      name: "Insulina Glargina", 
      dosage: ["Aplicar 22 unidades pela manhã"] 
    },
    { 
      name: "Insulina Lispro", 
      dosage: [
        "Aplicar 09 UI - 15 minutos antes do café",
        "Aplicar 08 UI - 15 minutos antes do almoço",
        "Aplicar 04 UI - 15 minutos antes do jantar"
      ] 
    }
  ],
  correctionTable: [
    { range: "180 a 220 mg/dL", dose: "+ 4 UI" },
    { range: "221 a 260 mg/dL", dose: "+ 6 UI" },
    { range: "261 a 300 mg/dL", dose: "+ 8 UI" },
    { range: "Acima de 300 mg/dL", dose: "+ 10 UI" }
  ]
};
