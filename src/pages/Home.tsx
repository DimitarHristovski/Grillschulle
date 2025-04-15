import {
  Calculator,
  UtensilsCrossed,
  Users,
  ChefHat,
  Clock,
  Truck,
} from "lucide-react";
import { Link } from "react-router-dom";
import PriceCalculator from "../components/quote/PriceCalculator";

export default function Home() {
  return (
    <div>
      <div
        className="relative bg-cover bg-center py-32"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-3xl text-center mx-auto text-white">
            <h1 className="text-5xl font-bold mb-6">
              🔥 Veranstalte die perfekte Grillparty
            </h1>
            <p className="text-2xl mb-8">
              Wir bringen das Fleisch, du bringst die Leute!
            </p>
            <p className="text-lg mb-12 text-gray-200">
              Premium zubereitetes Fleisch für dein nächstes Treffen. Je mehr
              Leute du mitbringst, desto weniger zahlt jeder. Frisch gegrillt,
              perfekt gewürzt, bereit zum Genießen!
            </p>
            <Link
              to="/catalog"
              className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors text-xl"
            >
              Unsere Auswahl entdecken
            </Link>
          </div>
        </div>
      </div>

      <div className="py-16 container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <UtensilsCrossed className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Premium-Qualität</h3>
            <p className="text-gray-600">
              Über 20 Sorten perfekt gegrilltes Premium-Fleisch{" "}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <ChefHat className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Fachmännische Zubereitung
            </h3>
            <p className="text-gray-600">
              Gewürzt von professionellen BBQ-Köchen
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Clock className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frisch & Heiß</h3>
            <p className="text-gray-600">
              Heiß geliefert und sofort servierbereit
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6">
              Berechne deinen Party-Preis
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Erhalte ein Sofortangebot für deine Gruppe. Je mehr Personen
              mitmachen, desto besser wird der Preis! Jede Person erhält eine
              großzügige 500g-Portion gemischtes Premium-Fleisch.
            </p>
            <div className="flex items-center gap-4 mb-6">
              <Users className="w-6 h-6 text-orange-500" />
              <span className="text-gray-700">
                Mindestens 5 Personen erforderlich
              </span>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <Truck className="w-6 h-6 text-orange-500" />
              <span className="text-gray-700">
                Wir verkaufen Speisen zu verschiedenen Preisen{" "}
              </span>
            </div>
          </div>
          <div className="flex-1">
            <PriceCalculator />
          </div>
        </div>
      </div>
    </div>
  );
}
