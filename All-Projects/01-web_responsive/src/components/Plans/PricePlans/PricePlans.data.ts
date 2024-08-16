import { PricesPlansData } from "./PricePlanes.type";

export const dataPricePlans: PricesPlansData = [
  {
    id: 0,
    name: "Started",
    description: "lorem ipsum",
    primary: true,
    prices: [
      {
        id: 0,
        name: "/mes",
        price: "50$",
      },
      {
        id: 1,
        name: "/anual",
        price: "550$",
      },
    ],
    features: [
      {
        id: 0,
        name: "lorem ipsum mckmk",
        active: true,
      },
      {
        id: 1,
        name: "lorem ipsum ",
        active: false,
      },
      {
        id: 2,
        name: "lorem ipsum mckmk",
        active: false,
      },
      {
        id: 3,
        name: "lorem  mckmk",
        active: true,
      },
      {
        id: 4,
        name: "lorem ipsum mckmk",
        active: false,
      },
    ],
  },
  {
    id: 1,
    name: "Professional",
    description: "lorem ipsum",
    primary: false,
    prices: [
      {
        id: 0,
        name: "/mes",
        price: "60$",
      },
      {
        id: 1,
        name: "/anual",
        price: "650$",
      },
    ],
    features: [
      {
        id: 0,
        name: "lorem ipsum mckmk",
        active: true,
      },
      {
        id: 1,
        name: "lorem ipsum ",
        active: true,
      },
      {
        id: 2,
        name: "lorem ipsum mckmk",
        active: true,
      },
      {
        id: 3,
        name: "lorem  mckmk",
        active: false,
      },
      {
        id: 4,
        name: "lorem ipsum mckmk",
        active: true,
      },
    ],
  },
  {
    id: 2,
    name: "Enterprise",
    description: "lorem ipsum",
    primary: false,
    prices: [
      {
        id: 0,
        name: "/mes",
        price: "80$",
      },
      {
        id: 1,
        name: "/anual",
        price: "720$",
      },
    ],
    features: [
      {
        id: 0,
        name: "lorem  mckmk",
        active: true,
      },
      {
        id: 1,
        name: "lorem ipsum mckmk",
        active: true,
      },
      {
        id: 2,
        name: "lorem mckmk",
        active: true,
      },
      {
        id: 3,
        name: "lorem ipsum ",
        active: true,
      },
      {
        id: 4,
        name: "lorem ipsum mckmk",
        active: false,
      },
    ],
  },
];
