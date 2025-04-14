import { team } from "../data/Data";
export default function About() {
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
            <i className="mb-2">{member.icon}</i>
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <p className="text-orange-500 font-medium mb-2">{member.role}</p>
            <p className="text-gray-600 text-sm">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
