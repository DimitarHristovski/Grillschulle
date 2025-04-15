import { MapContainer } from "../map/MapContainer";
import { contactData } from "../../data/Data";

export default function Footer() {
  return (
    <footer className="bg-white mt-16">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            <MapContainer />
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">{contactData.title}</h3>
              <p className="text-gray-600 mb-6">{contactData.description}</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-orange-100 p-2 rounded-full">
                  {contactData.phone.icon}
                </div>
                <div>
                  <p className="font-semibold">{contactData.phone.label}</p>
                  <a
                    href={contactData.phone.href}
                    className="text-orange-600 hover:text-orange-700"
                  >
                    {contactData.phone.value}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-orange-100 p-2 rounded-full">
                  {contactData.email.icon}
                </div>
                <div>
                  <p className="font-semibold">{contactData.email.label}</p>
                  <a
                    href={contactData.email.href}
                    className="text-orange-600 hover:text-orange-700"
                  >
                    {contactData.email.value}
                  </a>
                </div>
              </div>

              <div>
                <p className="font-semibold mb-2">
                  {contactData.address.label}
                </p>
                <p className="text-gray-600">
                  {contactData.address.lines.map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="font-semibold mb-4">Folgen Sie uns</h4>
              <div className="flex gap-4">
                {contactData.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-100 p-2 rounded-full hover:bg-orange-200 transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-gray-500">
          <p>{contactData.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
