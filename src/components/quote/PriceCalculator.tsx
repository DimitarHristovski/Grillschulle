import { useState } from "react";
import { Calculator } from "lucide-react";
import { useQuoteStore } from "../../store/useQuoteStore";
import { priceCalculatorData } from "../../data/Data";

export default function PriceCalculator() {
  const { peopleCount, setPeopleCount } = useQuoteStore();
  const [basePricePerPerson, setBasePricePerPerson] = useState(1);

  const calculateDiscountedPrice = (count: number) => {
    if (count >= 40) return basePricePerPerson * 0.75;
    if (count >= 30) return basePricePerPerson * 0.85;
    if (count >= 20) return basePricePerPerson * 0.9;
    if (count >= 10) return basePricePerPerson * 0.95;
    return basePricePerPerson;
  };

  const pricePerPerson = calculateDiscountedPrice(peopleCount);
  const totalPrice = pricePerPerson * peopleCount;

  const savingsPercent = Math.round(
    ((basePricePerPerson - pricePerPerson) / basePricePerPerson) * 100
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
      <div className="flex items-center gap-2 mb-4">
        <Calculator className="w-6 h-6 text-orange-500" />
        <h3 className="text-xl font-bold">{priceCalculatorData.label0}</h3>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {priceCalculatorData.label1}
        </label>
        <input
          type="range"
          min="10"
          max="50"
          value={peopleCount}
          onChange={(e) => setPeopleCount(Number(e.target.value))}
          className="w-full h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="text-center mt-2 text-2xl font-bold text-orange-600">
          {peopleCount} {priceCalculatorData.label2}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {priceCalculatorData.label3} (€)
        </label>
        <input
          type="number"
          min={0.01}
          step={0.01}
          value={basePricePerPerson}
          onChange={(e) => setBasePricePerPerson(Number(e.target.value))}
          className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:ring-orange-500 focus:border-orange-500"
        />
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center border-b pb-2">
          <span>{priceCalculatorData.label4}</span>
          <span className="font-semibold">
            <span className="line-through text-gray-400 mr-1">
              €{basePricePerPerson.toFixed(2)}
            </span>
            <span className="text-green-700">€{pricePerPerson.toFixed(2)}</span>
          </span>
        </div>

        {savingsPercent > 0 && (
          <div className="flex justify-between items-center  pb-2 text-green-600 font-semibold">
            <span>{priceCalculatorData.label5}</span>
            <span>
              {savingsPercent}% {priceCalculatorData.label6}
            </span>
          </div>
        )}

        {/*<div className="flex justify-between items-center text-lg font-bold">
          <span>Gesamtpreis:</span>
          <span className="text-orange-600">€{pricePerPerson.toFixed(2)}</span>
        </div>*/}
      </div>

      <button
        className="w-full mt-6 bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
        onClick={() => {
          document
            .querySelector(".fixed.bottom-6.right-6")
            ?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        }}
      >
        {priceCalculatorData.label7}
      </button>
    </div>
  );
}
