import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, Clock, UtensilsCrossed, Scale } from "lucide-react";
import { meatItems } from "../data/Data";
import { useQuoteStore } from "../store/useQuoteStore";

export default function MeatDetails() {
  const { id } = useParams();
  const item = meatItems.find((item) => item.id === id);
  const addItem = useQuoteStore((state) => state.addItem);

  if (!item) {
    return (
      <div className="pt-24 container mx-auto px-6">
        <h2 className="text-2xl font-bold">Produkt nicht gefunden</h2>
        <Link to="/catalog" className="text-orange-500 hover:text-orange-600">
          Zurück zur Übersicht
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 container mx-auto px-6">
      <Link
        to="/catalog"
        className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 mb-8"
      >
        <ArrowLeft className="w-5 h-5" />
        Zurück zur Übersicht
      </Link>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <img
            src={item.image}
            alt={item.name}
            className="w-full rounded-lg shadow-lg"
          />

          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="bg-orange-50 p-4 rounded-lg text-center">
              <Star className="w-6 h-6 text-orange-500 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Premium Qualität</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg text-center">
              <Clock className="w-6 h-6 text-orange-500 mx-auto mb-2" />
              <p className="text-sm text-gray-600">
                {item.details?.preparation}
              </p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg text-center">
              <Scale className="w-6 h-6 text-orange-500 mx-auto mb-2" />
              <p className="text-sm text-gray-600">{item.details?.weight}</p>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-4">{item.name}</h1>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-3xl font-bold text-orange-600">
              €{item.price}
            </span>
            <span className="text-gray-500">pro Portion</span>
          </div>

          <p className="text-gray-700 mb-8">{item.description}</p>

          {item.details && (
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Zubereitung</h3>
                <p className="text-gray-700">{item.details.preparation}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Perfekte Beilagen
                </h3>
                <ul className="grid grid-cols-2 gap-4">
                  {item.details.pairings?.map((pairing, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <UtensilsCrossed className="w-5 h-5 text-orange-500" />
                      {pairing}
                    </li>
                  ))}
                </ul>
              </div>

              {item.details.nutritionalInfo && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Nährwertangaben
                  </h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-orange-50 p-4 rounded-lg text-center">
                      <p className="text-sm text-gray-600">Protein</p>
                      <p className="font-bold text-orange-600">
                        {item.details.nutritionalInfo.protein}
                      </p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg text-center">
                      <p className="text-sm text-gray-600">Fett</p>
                      <p className="font-bold text-orange-600">
                        {item.details.nutritionalInfo.fat}
                      </p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg text-center">
                      <p className="text-sm text-gray-600">Kalorien</p>
                      <p className="font-bold text-orange-600">
                        {item.details.nutritionalInfo.calories}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          <button
            onClick={() => addItem(item)}
            className="w-full mt-8 bg-orange-500 text-white py-4 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            In den Warenkorb{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
