const Data = [
  {
    id: 1,
    href: '#order',
    header: 'Kota Small',
    description: 'Chips, Polony & Full Vienna.',
    meta: '10.00',
  },
  {
    id: 2,
    href: '#order',
    header: 'Kota Small Meal With Special',
    description: 'Chips, Polony, Full Vienna & Special.',
    meta: '12.00',
  },
  {
    id: 3,
    href: '#order',
    header: 'Kota Medium',
    description: 'Chips, Polony, Half Russian & Half Vienna.',
    meta: '15.00',
  },
  {
    id: 4,
    href: '#order',
    header: 'Kota Medium Meal',
    description: 'Chips, Polony, Lettuce, Burger & Cheese.',
    meta: '19.00',
  },
  {
    id: 5,
    href: '#order',
    header: 'Kota Mediun Meal With Special',
    description: 'Chips, Polony, Full Russian, Special & Cheese.',
    meta: '20.00',
  },
  {
    id: 6,
    href: '#order',
    header: 'Kota Large Meal',
    description: 'Chips, Polony, Full Russian, Full Vienna & Cheese.',
    meta: '22.00',
  },
  {
    id: 7,
    href: '#order',
    header: 'Kota Extra Large With Special',
    description:
      'Chips, Polony, Lettuce, Full Russian, Full Vienna, Special & Cheese.',
    meta: '25.00',
  },
  {
    id: 8,
    href: '#order',
    header: 'Dagwood small',
    description: 'Chips, Polony, Burger, Lettuce, Onion, Tomato & Cheese.',
    meta: '20.00',
  },
  {
    id: 9,
    href: '#order',
    header: 'Dagwood Medium Meal',
    description: 'Chips, Polony, Burger, Lettuce, Onion, Tomato, Cheese & Egg.',
    meta: '23.00',
  },
  {
    id: 10,
    href: '#order',
    header: 'Dagwood Large Meal',
    description:
      'Chips, Polony, Burger, Lettuce, Onion, Tomato, Cheese, Egg & Special.',
    meta: '27.00',
  },
];

export default function StockData() {
  const displayAllData = () => Data;

  return {
    displayAllData,
  };
}
