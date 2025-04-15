import {
  Flame,
  ChefHat,
  Code,
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

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
    description: "Perfekt marmoriertes Premium-Ribeye",
    details: {
      origin: "Black Angus Rinder von Premium-Farmen",
      weight: "300g pro Portion",
      preparation:
        "28 Tage trocken gereift, gewürzt mit unserer Gewürzmischung",
      servingTemp: "Serviert medium-rare, sofern nicht anders gewünscht",
      pairings: ["Gegrilltes Gemüse", "Ofenkartoffeln", "Rotweinsauce"],
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
    description: "Zarte, vom Knochen fallende Schweinerippchen",
    details: {
      origin: "Premium-Schweinefleisch von ausgewählten Farmen",
      weight: "500g pro Portion",
      preparation: "6 Stunden langsam geräuchert mit Hickoryholz",
      servingTemp: "Heiß serviert mit BBQ-Sauce",
      pairings: ["Krautsalat", "Maiskolben", "Mac and Cheese"],
      nutritionalInfo: {
        protein: "45g",
        fat: "38g",
        calories: "520 kcal",
      },
    },
  },
  {
    id: "Lammkoteletts",
    name: "Lammkoteletts",
    price: 27.99,
    image:
      "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    description: "Premium Lammkoteletts aus Neuseeland",
    details: {
      origin: "Weide-Lamm aus Neuseeland",
      weight: "250g pro Portion",
      preparation: "In Kräutern und Knoblauch mariniert, perfekt gegrillt",
      servingTemp: "Medium serviert mit Minzsauce",
      pairings: ["Geröstetes Gemüse", "Minzsauce", "Griechischer Salat"],
      nutritionalInfo: {
        protein: "42g",
        fat: "32g",
        calories: "480 kcal",
      },
    },
  },
  {
    id: "BBQ Hähnchenflügel",
    name: "BBQ Hähnchenflügel",
    price: 15.99,
    image:
      "https://images.unsplash.com/photo-1527477396000-e27163b481c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    description: "Rauchige, knusprige Hähnchenflügel",
    details: {
      origin: "Freilandhuhn",
      weight: "400g pro Portion (8–10 Stück)",
      preparation: "24 Stunden mariniert, geräuchert und gegrillt",
      servingTemp: "Heiß serviert mit Sauce nach Wahl",
      pairings: ["Blauschimmelkäse-Dip", "Selleriestangen", "Ranch-Dressing"],
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
    description: "Langsam geräuchertes Premium-Rinderbruststück",
    details: {
      origin: "Premium-Rindfleisch von ausgewählten Farmen",
      weight: "350g pro Portion",
      preparation: "12 Stunden mit Eichenholz geräuchert",
      servingTemp: "Heiß serviert mit BBQ-Sauce",
      pairings: ["Baked Beans", "Kartoffelsalat", "Eingelegtes Gemüse"],
      nutritionalInfo: {
        protein: "48g",
        fat: "36g",
        calories: "520 kcal",
      },
    },
  },
  {
    id: "Premium Würstchen",
    name: "Premium Würstchen",
    price: 14.99,
    image:
      "https://images.unsplash.com/photo-1597733336794-12d05021d510?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    description: "Handgemachte Auswahl an Mischwürstchen",
    details: {
      origin: "Handgefertigt aus hochwertigen Fleischstücken",
      weight: "300g pro Portion (4–5 Stück)",
      preparation: "Perfekt gegrillt",
      servingTemp: "Heiß serviert mit Senf",
      pairings: ["Sauerkraut", "Gegrillte Zwiebeln", "Senfauswahl"],
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
    role: "Chefköch",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80",
    icon: <ChefHat className="h-6 w-6 text-orange-500" />,
    description:
      "Anas kreiert einzigartige Marinaden und sorgt dafür, dass jedes Gericht ein kulinarisches Erlebnis wird. Sein Kreativität macht unser Grillangebot besonders.",
  },
];

export const contactData = {
  title: "Kontakt & Standort",
  description:
    "Besuchen Sie uns in unserem Hauptquartier oder kontaktieren Sie uns für weitere Informationen über unseren BBQ-Service.",
  phone: {
    label: "Telefon",
    value: "+49 162 7468061",
    href: "tel:+491234567890",
    icon: <Phone className="w-5 h-5 text-orange-600" />,
  },
  email: {
    label: "Email",
    value: "info@grillshulle.de",
    href: "mailto:info@grillshulle.de",
    icon: <Mail className="w-5 h-5 text-orange-600" />,
  },
  address: {
    label: "Adresse",
    lines: ["Heuweg 7", "33181 Bad Wünnenberg", "NRW Deutschland"],
    icon: <MapPin className="w-5 h-5 text-orange-600" />,
  },
  socials: [
    {
      name: "Facebook",
      url: "https://facebook.com",
      icon: <Facebook className="w-5 h-5 text-orange-600" />,
    },
    {
      name: "Instagram",
      url: "https://instagram.com",
      icon: <Instagram className="w-5 h-5 text-orange-600" />,
    },
  ],
  copyright: `© ${new Date().getFullYear()} Michas Grillshülle. Alle Rechte vorbehalten.`,
};
export const priceCalculatorData = {
  label0: "  Preisrechner",

  label1: "  Anzahl der Personen",
  label2: "Personen",
  label3: "  Basispreis pro Person",
  label4: "Preis pro Person:",
  label5: "Rabattvorteil:",
  label6: "günstiger",
  label7: "Warenkorb",
};
export const navbarLabels = {
  brand: "Michas Grillshülle",
  navLinks: {
    home: "Home",
    catalog: "Fleischauswahl",
    about: "Über Uns",
  },
  cartButton: "Warenkorb",
};
export const quoteDrawerData = {
  button: "Warenkorb",
  emptyMessage: "Ihr Essensbestellung Cost ist leer",

  drawer: {
    title: "Ihr Essensbestellung Cost",
    closeLabel: "Schließen",
  },

  confirmation: {
    title: "Ihre Kalkulation ist abgeschlossen!",
    message: `Die Berechnung für Ihre Essensbestellung wurde erfolgreich durchgeführt.
Die PDF-Datei mit Ihrer Kalkulation wurde heruntergeladen.
Bei Fragen stehen wir Ihnen gerne zur Verfügung.`,
    productListTitle: "Ihre Essensbestellung Cost:",
    totalLabel: "Gesamtpreis:",
    autoCloseNote:
      "Diese Seite schließt sich automatisch in wenigen Sekunden...",
  },

  form: {
    peopleCountLabel: "Anzahl der Personen",
    nameLabel: "Name",
    emailLabel: "Email",
    submitButton: "Berechnen",
    totalPriceLabel: "Ihre Gesamtkosten:",
  },

  pdf: {
    title: "Warenkorb",
    name: "Name",
    email: "Email",
    peopleCount: "Anzahl der Personen",
    date: "Erstellungsdatum",
    tableHead: ["Produkt", "Anzahl", "Original Preis", "Sie sparen"],
    totalLabel: "Gesamtpreis",
  },
};
export const catalogLabels = {
  pageTitle: "Fleischauswahl",
  searchPlaceholder: "Fleisch suchen...",

  filter: {
    title: "Filter",
    categories: "Kategorien",
    priceRange: "Preisbereich",
    priceMinLabel: "€0",
    priceMaxLabel: "€50",
  },

  card: {
    button: "In den Warenkorb",
  },

  categories: ["Beef", "Steak", "Lamm", "Hähnchen", "Würst"],
};
export const homePageLabels = {
  hero: {
    title: "🔥 Veranstalte die perfekte Grillparty",
    subtitle: "Wir bringen das Fleisch, du bringst die Leute!",
    description:
      "Premium zubereitetes Fleisch für dein nächstes Treffen. Je mehr Leute du mitbringst, desto weniger zahlt jeder. Frisch gegrillt, perfekt gewürzt, bereit zum Genießen!",
    cta: "Unsere Auswahl entdecken",
  },

  features: {
    quality: {
      title: "Premium-Qualität",
      text: "Über 20 Sorten perfekt gegrilltes Premium-Fleisch",
    },
    preparation: {
      title: "Fachmännische Zubereitung",
      text: "Gewürzt von professionellen BBQ-Köchen",
    },
    fresh: {
      title: "Frisch & Heiß",
      text: "Heiß geliefert und sofort servierbereit",
    },
  },

  calculator: {
    title: "Berechne deinen Party-Preis",
    description:
      "Erhalte ein Sofortangebot für deine Gruppe. Je mehr Personen mitmachen, desto besser wird der Preis! Jede Person erhält eine großzügige 500g-Portion gemischtes Premium-Fleisch.",
    minPeople: "Mindestens 5 Personen erforderlich",
    pricingNote: "Wir verkaufen Speisen zu verschiedenen Preisen",
  },
};
export const meatDetailsLabels = {
  notFound: {
    title: "Produkt nicht gefunden",
    back: "Zurück zur Übersicht",
  },
  backToCatalog: "Zurück zur Übersicht",
  quality: "Premium Qualität",
  pricePerPortion: "pro Portion",
  sections: {
    preparation: "Zubereitung",
    pairings: "Perfekte Beilagen",
    nutrition: "Nährwertangaben",
  },
  nutritionLabels: {
    protein: "Protein",
    fat: "Fett",
    calories: "Kalorien",
  },
  addToCart: "In den Warenkorb",
};
