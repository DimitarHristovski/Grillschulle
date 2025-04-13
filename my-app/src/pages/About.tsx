import { Flame, ChefHat, Code } from "lucide-react";

export default function About() {
  const team = [
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

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-10">Unser Team</h1>
      <div className="grid gap-10 md:grid-cols-3">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full object-cover mb-4 shadow-sm"
            />
            <div className="mb-2">{member.icon}</div>
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <p className="text-orange-500 font-medium mb-2">{member.role}</p>
            <p className="text-gray-600 text-sm">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
