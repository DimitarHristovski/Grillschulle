import { Flame, ChefHat, Code } from "lucide-react";

export interface MeatItem {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  details?: {
    origin?: string;
    weight?: string;
    preparation?: string;
    servingTemp?: string;
    pairings?: string[];
    nutritionalInfo?: {
      protein?: string;
      fat?: string;
      calories?: string;
    };
  };
}

export const meatItems: MeatItem[] = [
  {
    id: "premium-ribeye",
    name: "Premium Ribeye Steak",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    description: "Perfectly marbled, premium cut ribeye",
    details: {
      origin: "Black Angus cattle from premium farms",
      weight: "300g per portion",
      preparation:
        "Dry-aged for 28 days, seasoned with our signature spice blend",
      servingTemp: "Served medium-rare unless specified otherwise",
      pairings: ["Grilled vegetables", "Roasted potatoes", "Red wine sauce"],
      nutritionalInfo: {
        protein: "56g",
        fat: "42g",
        calories: "600 kcal",
      },
    },
  },
  {
    id: "baby-back-ribs",
    name: "Baby Back Ribs",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    description: "Tender, fall-off-the-bone pork ribs",
    details: {
      origin: "Premium pork from selected farms",
      weight: "500g per portion",
      preparation: "Slow-smoked for 6 hours with hickory wood",
      servingTemp: "Served hot with BBQ sauce",
      pairings: ["Coleslaw", "Corn on the cob", "Mac and cheese"],
      nutritionalInfo: {
        protein: "45g",
        fat: "38g",
        calories: "520 kcal",
      },
    },
  },
  {
    id: "lamb-chops",
    name: "Lamb Chops",
    price: 27.99,
    image:
      "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    description: "Premium New Zealand lamb chops",
    details: {
      origin: "New Zealand grass-fed lamb",
      weight: "250g per portion",
      preparation: "Marinated in herbs and garlic, grilled to perfection",
      servingTemp: "Served medium with mint sauce",
      pairings: ["Roasted vegetables", "Mint sauce", "Greek salad"],
      nutritionalInfo: {
        protein: "42g",
        fat: "32g",
        calories: "480 kcal",
      },
    },
  },
  {
    id: "bbq-chicken-wings",
    name: "BBQ Chicken Wings",
    price: 15.99,
    image:
      "https://images.unsplash.com/photo-1527477396000-e27163b481c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    description: "Smoky, crispy chicken wings",
    details: {
      origin: "Free-range chicken",
      weight: "400g per portion (8-10 pieces)",
      preparation: "Marinated for 24 hours, smoked and grilled",
      servingTemp: "Served hot with choice of sauce",
      pairings: ["Blue cheese dip", "Celery sticks", "Ranch dressing"],
      nutritionalInfo: {
        protein: "38g",
        fat: "28g",
        calories: "420 kcal",
      },
    },
  },
  {
    id: "beef-brisket",
    name: "Beef Brisket",
    price: 22.99,
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    description: "Slow-smoked premium beef brisket",
    details: {
      origin: "Premium beef from selected farms",
      weight: "350g per portion",
      preparation: "Smoked for 12 hours with oak wood",
      servingTemp: "Served hot with BBQ sauce",
      pairings: ["Baked beans", "Potato salad", "Pickled vegetables"],
      nutritionalInfo: {
        protein: "48g",
        fat: "36g",
        calories: "520 kcal",
      },
    },
  },
  {
    id: "premium-sausages",
    name: "Premium Sausages",
    price: 14.99,
    image:
      "https://images.unsplash.com/photo-1597733336794-12d05021d510?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    description: "Artisanal mixed sausage selection",
    details: {
      origin: "Handcrafted using premium cuts",
      weight: "300g per portion (4-5 pieces)",
      preparation: "Grilled to perfection",
      servingTemp: "Served hot with mustard",
      pairings: ["Sauerkraut", "Grilled onions", "Mustard selection"],
      nutritionalInfo: {
        protein: "32g",
        fat: "28g",
        calories: "380 kcal",
      },
    },
  },
];

export interface Team {
  name: string;
  role: string;
  image: string;
  icon: any;
  description: string;
}
export const team: Team[] = [
  {
    name: "Michael ",
    role: "Inhaber & Grillmeister",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80",
    icon: <Flame className="h-6 w-6 text-orange-500" />,
    description:
      "Mit über 15 Jahren Erfahrung bringt Micha Leidenschaft und Geschmack auf den Grill. Er gründete Michas Grillshülle mit dem Ziel, beste Qualität und herzlichen Service zu bieten.",
  },
  {
    name: "Anas",
    role: "Chefköchin",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80",
    icon: <ChefHat className="h-6 w-6 text-orange-500" />,
    description:
      "Anas kreiert einzigartige Marinaden und sorgt dafür, dass jedes Gericht ein kulinarisches Erlebnis wird. Sein Kreativität macht unser Grillangebot besonders.",
  },
  {
    name: "Dimitar.",
    role: "Web Entwickler",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80",
    icon: <Code className="h-6 w-6 text-orange-500" />,
    description:
      "Dimitar ist verantwortlich für die Entwicklung dieser Plattform. Mit Fokus auf Benutzerfreundlichkeit sorgt er dafür, dass Ihr Grill-Erlebnis bereits beim Buchen beginnt.",
  },
];
