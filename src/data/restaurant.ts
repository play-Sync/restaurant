// src/lib/data/restaurant.ts
export const restaurantInfo = {
  name: "Thali & Tales",
  tagline: "Where Culinary Art Meets Timeless Elegance",
  description:
    "An intimate dining experience celebrating the finest seasonal ingredients, crafted with passion and precision.",
  established: "2018",
  address: {
    street: "Bagmati Corridor Rd",
    city: "Gokarneshwor",
    state: "Kathmandu",
    zip: "44600",
    neighborhood: "",
  },
  phone: "+1 (212) 555-0127",
  email: "reservations@maisonverve.com",
  hours: [
    { day: "Monday", hours: "Closed" },
    { day: "Tuesday", hours: "6:00 PM - 10:00 PM" },
    { day: "Wednesday", hours: "6:00 PM - 10:00 PM" },
    { day: "Thursday", hours: "6:00 PM - 10:00 PM" },
    { day: "Friday", hours: "5:30 PM - 11:00 PM" },
    { day: "Saturday", hours: "5:30 PM - 11:00 PM" },
    { day: "Sunday", hours: "5:00 PM - 9:00 PM" },
  ],
  social: {
    instagram: "https://instagram.com/maisonverve",
    facebook: "https://facebook.com/maisonverve",
  },
  reservationUrl: "#contact",
};

export const chefInfo = {
  name: "Élise Beaumont",
  title: "Executive Chef & Founder",
  bio: "With over two decades of culinary mastery spanning three continents, Chef Élise Beaumont brings an unparalleled vision to Maison Verve. Trained at Le Cordon Bleu Paris and having helmed kitchens at Michelin-starred establishments in Lyon and Tokyo, she crafts each dish as a testament to her philosophy: honoring tradition while embracing innovation.",
  philosophy:
    "Every ingredient tells a story. My role is simply to let that story unfold on the plate, guiding it with technique and intuition honed over years of devotion to this craft.",
  image: "/images/chef.jpg",
  accolades: [
    "James Beard Award Nominee, 2023",
    "Two Michelin Stars",
    "Best New Restaurant, NYT, 2019",
  ],
};

export const signatureDishes = [
  {
    id: "foie-gras",
    name: "Foie Gras Torchon",
    description:
      "House-cured foie gras with Sauternes gelée, brioche toast, and aged balsamic pearls",
    price: 48,
    category: "Appetizer",
    image: "/images/dishes/foie-gras.jpg",
    gradient:
      "from-amber-900/80 via-amber-800/60 to-stone-900/40",
    tags: ["Signature", "Chef's Selection"],
  },
  {
    id: "lobster",
    name: "Butter-Poached Lobster",
    description:
      "Maine lobster with champagne beurre blanc, caviar, and spring vegetables",
    price: 89,
    category: "Main",
    image: "/images/dishes/lobster.jpg",
    gradient:
      "from-rose-900/80 via-rose-800/60 to-stone-900/40",
    tags: ["Signature"],
  },
  {
    id: "wagyu",
    name: "A5 Wagyu Tenderloin",
    description:
      "Japanese Wagyu with black truffle jus, bone marrow crust, and pomme purée",
    price: 165,
    category: "Main",
    image: "/images/dishes/wagyu.jpg",
    gradient:
      "from-red-900/80 via-red-800/60 to-stone-900/40",
    tags: ["Premium", "Signature"],
  },
  {
    id: "risotto",
    name: "Black Truffle Risotto",
    description:
      "Carnaroli rice with Périgord truffle, aged Parmigiano-Reggiano, and truffle essence",
    price: 72,
    category: "Main",
    image: "/images/dishes/risotto.jpg",
    gradient:
      "from-stone-800/80 via-stone-700/60 to-amber-900/40",
    tags: ["Vegetarian", "Signature"],
  },
  {
    id: "duck",
    name: "Roasted Duck Breast",
    description:
      "Moulard duck with cherry gastrique, foie gras mousse, and wild mushrooms",
    price: 68,
    category: "Main",
    image: "/images/dishes/duck.jpg",
    gradient:
      "from-orange-900/80 via-orange-800/60 to-stone-900/40",
    tags: ["Chef's Selection"],
  },
  {
    id: "chocolate",
    name: "Valrhona Chocolate Soufflé",
    description:
      "Dark chocolate soufflé with crème anglaise and gold leaf",
    price: 24,
    category: "Dessert",
    image: "/images/dishes/chocolate.jpg",
    gradient:
      "from-amber-950/80 via-amber-900/60 to-stone-900/40",
    tags: ["Signature", "Must Order"],
  },
];

export const tastingMenu = {
  title: "Dégustation",
  subtitle: "A Journey Through Seasons",
  description:
    "Our signature tasting experience showcases the finest seasonal ingredients, each course thoughtfully crafted to build upon the last.",
  price: 285,
  pairingPrice: 165,
  courses: [
    {
      course: "Amuse-Bouche",
      name: "Oyster Mignonette",
      description:
        "Kumamoto oyster, champagne mignonette, sevruga caviar",
    },
    {
      course: "First",
      name: "Seasonal Tartare",
      description:
        "Bluefin tuna, avocado mousse, wasabi tobiko, gold leaf",
    },
    {
      course: "Second",
      name: "Velouté",
      description:
        "Celery root soup, black truffle, chive oil",
    },
    {
      course: "Third",
      name: "Foie Gras",
      description:
        "Seared Hudson Valley foie gras, quince, brioche",
    },
    {
      course: "Fourth",
      name: "Poisson",
      description:
        "Wild turbot, beurre blanc, sea beans, bottarga",
    },
    {
      course: "Intermezzo",
      name: "Champagne Sorbet",
      description: "Dom Pérignon sorbet, elderflower, mint",
    },
    {
      course: "Main",
      name: "Wagyu",
      description:
        "Japanese A5 wagyu, bone marrow, seasonal vegetables",
    },
    {
      course: "Pre-Dessert",
      name: "Cheese Selection",
      description:
        "Artisanal French cheeses, honeycomb, walnut bread",
    },
    {
      course: "Dessert",
      name: "Chocolate Tasting",
      description:
        "Valrhona chocolate three ways, passion fruit, gold",
    },
    {
      course: "Mignardises",
      name: "Petit Fours",
      description:
        "House-made confections, seasonal flavors",
    },
  ],
};

export const ambienceGallery = [
  {
    id: 1,
    title: "The Main Dining Room",
    description:
      "Intimate elegance beneath hand-blown Murano chandeliers",
    image: "/images/ambience/dining-room.jpg",
    gradient:
      "from-amber-950/90 via-stone-900/50 to-transparent",
  },
  {
    id: 2,
    title: "Private Wine Cellar",
    description:
      "An exclusive space for intimate gatherings, surrounded by rare vintages",
    image: "/images/ambience/cellar.jpg",
    gradient:
      "from-stone-950/90 via-stone-900/50 to-transparent",
  },
  {
    id: 3,
    title: "The Bar",
    description:
      "Craft cocktails and fine wines in a refined atmosphere",
    image: "/images/ambience/bar.jpg",
    gradient:
      "from-amber-950/90 via-stone-900/50 to-transparent",
  },
  {
    id: 4,
    title: "Chef's Table",
    description:
      "An immersive culinary experience in the heart of our kitchen",
    image: "/images/ambience/chefs-table.jpg",
    gradient:
      "from-stone-950/90 via-stone-900/50 to-transparent",
  },
];

export const awards = [
  {
    year: "2024",
    title: "Two Michelin Stars",
    organization: "Michelin Guide",
  },
  {
    year: "2023",
    title: "Best Fine Dining NYC",
    organization: "James Beard Foundation",
  },
  {
    year: "2023",
    title: "Top 50 Restaurants",
    organization: "World's 50 Best",
  },
  {
    year: "2022",
    title: "Wine Spectator Award",
    organization: "Wine Spectator",
  },
];

export const testimonials = [
  {
    quote:
      "An extraordinary culinary journey that transcends the ordinary dining experience.",
    author: "The New York Times",
    rating: 4,
  },
  {
    quote:
      "Chef Beaumont's creations are nothing short of edible poetry.",
    author: "Food & Wine Magazine",
    rating: 5,
  },
];
