import {
  ArrowRightLeft,
  Boxes,
  Factory,
  HandCoins,
  HeartHandshake,
  PackageCheck,
  Recycle,
  ShieldCheck,
  Target,
  Truck,
  Warehouse
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const whatsappUrl = "https://wa.me/5571999990385";
export const instagramUrl = "https://www.instagram.com/pallets_baronne";
export const instagramHandle = "@pallets_baronne";

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Serviços", href: "/servicos" },
  { label: "Contato", href: "/contato" }
];

export type Service = {
  title: string;
  detailTitle?: string;
  short: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Transporte",
    detailTitle: "Transporte de cargas",
    short: "Operações ágeis para cargas e paletes.",
    description:
      "Transporte de cargas com planejamento, pontualidade e acompanhamento para manter a sua operação em movimento.",
    icon: Truck
  },
  {
    title: "Armazenagem",
    short: "Estrutura para fluxo seguro de mercadorias.",
    description:
      "Organização e suporte para armazenagem temporária, separação e controle de volumes com foco em produtividade.",
    icon: Warehouse
  },
  {
    title: "Cross Dock",
    short: "Entrada, triagem e saída com velocidade.",
    description:
      "Processo logístico para reduzir permanência em estoque e acelerar a distribuição com mais previsibilidade.",
    icon: ArrowRightLeft
  },
  {
    title: "Fábrica de Paletes",
    short: "Produção sob demanda e padrão PBR.",
    description:
      "Fabricação de paletes com atenção ao padrão, resistência e necessidade real de cada cliente.",
    icon: Factory
  },
  {
    title: "Compra e Venda",
    detailTitle: "Compra e Venda de Paletes",
    short: "Negociação de paletes com escala.",
    description:
      "Compra e venda de paletes para empresas que precisam repor, renovar ou movimentar estoque com confiança.",
    icon: HandCoins
  },
  {
    title: "Reforma",
    detailTitle: "Reforma de Paletes",
    short: "Recuperação inteligente de paletes.",
    description:
      "Reforma de paletes para prolongar vida útil, reduzir descarte e manter a operação com melhor custo.",
    icon: Recycle
  }
];

export const values = [
  {
    title: "Missão",
    text: "Oferecer soluções de transporte e paletes com eficiência, segurança e compromisso em cada entrega.",
    icon: Target
  },
  {
    title: "Visão",
    text: "Ser referência regional em logística e paletes por qualidade operacional, atendimento e confiabilidade.",
    icon: ShieldCheck
  },
  {
    title: "Valores",
    text: "Responsabilidade, transparência, parceria, agilidade e cuidado com a operação do cliente.",
    icon: HeartHandshake
  }
];

export const timeline = [
  {
    year: "2014",
    title: "Início da operação",
    text: "A Baronne nasce com foco em atendimento próximo, transporte confiável e soluções para empresas locais."
  },
  {
    year: "2017",
    title: "Expansão logística",
    text: "A empresa amplia sua atuação com armazenagem, cross dock e rotinas mais completas de movimentação."
  },
  {
    year: "2020",
    title: "Paletes em escala",
    text: "A fabricação, compra, venda e reforma de paletes passam a compor um ecossistema integrado."
  },
  {
    year: "Hoje",
    title: "Grupo Baronne",
    text: "Uma operação madura para atender negócios que precisam de velocidade, padrão e confiança."
  }
];

export const stats = [
  {
    label: "Anos de experiência",
    value: 10,
    suffix: "",
    icon: PackageCheck
  },
  {
    label: "Paletes PBR entregues",
    value: 10000,
    prefix: "+",
    suffix: "",
    icon: Boxes
  }
];
