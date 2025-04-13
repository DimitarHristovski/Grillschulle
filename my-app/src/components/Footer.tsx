import { MapContainer } from './MapContainer';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white mt-16">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Map Section */}
          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            <MapContainer />
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Kontakt & Standort</h3>
              <p className="text-gray-600 mb-6">
                Besuchen Sie uns in unserem Hauptquartier oder kontaktieren Sie uns für weitere Informationen über unseren BBQ-Service.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-orange-100 p-2 rounded-full">
                  <Phone className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="font-semibold">Telefon</p>
                  <a href="tel:+491234567890" className="text-orange-600 hover:text-orange-700">
                    +49 123 456 7890
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-orange-100 p-2 rounded-full">
                  <Mail className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:info@grillshulle.de" className="text-orange-600 hover:text-orange-700">
                    info@grillshulle.de
                  </a>
                </div>
              </div>

              <div>
                <p className="font-semibold mb-2">Adresse</p>
                <p className="text-gray-600">
                  Grillstraße 123<br />
                  10115 Berlin<br />
                  Deutschland
                </p>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="font-semibold mb-4">Folgen Sie uns</h4>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-100 p-2 rounded-full hover:bg-orange-200 transition-colors"
                >
                  <Facebook className="w-5 h-5 text-orange-600" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-100 p-2 rounded-full hover:bg-orange-200 transition-colors"
                >
                  <Instagram className="w-5 h-5 text-orange-600" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Michas Grillshülle. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}