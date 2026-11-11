import { images } from "@/data/images";

export type Treatment = {
  id: string;
  number: string;
  name: string;
  description: string;
  image: string;
};

const meta: Omit<Treatment, "image">[] = [
  {
    id: "botox",
    number: "01",
    name: "Botox",
    description: "Suavização de linhas de expressão preservando sua identidade.",
  },
  {
    id: "preenchimento",
    number: "02",
    name: "Preenchimento",
    description: "Volume e contorno com resultados sutis e elegantes.",
  },
  {
    id: "microvasos",
    number: "03",
    name: "Microvasos",
    description: "Tratamento de vasinhos para uma pele mais uniforme e delicada.",
  },
  {
    id: "capilar",
    number: "04",
    name: "Capilar",
    description: "Cuidados especializados para a saúde e beleza dos seus cabelos.",
  },
  {
    id: "tratamento-capilar",
    number: "05",
    name: "Tratamento Capilar",
    description: "Protocolos personalizados para fortalecimento e vitalidade capilar.",
  },
  {
    id: "harmonizacao-facial",
    number: "06",
    name: "Harmonização Facial",
    description: "Equilíbrio e proporção para realçar seus traços com naturalidade.",
  },
  {
    id: "harmonizacao-glutea",
    number: "07",
    name: "Harmonização Glútea",
    description: "Contorno e volume com resultados naturais e seguros.",
  },
];

export const treatments: Treatment[] = meta.map((m, idx) => ({
  ...m,
  image: images.treatments[idx],
}));
