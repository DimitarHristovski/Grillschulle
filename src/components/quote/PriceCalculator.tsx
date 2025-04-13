import { useState } from 'react';
import { Calculator } from 'lucide-react';

export default function PriceCalculator() {
  const [people, setPeople] = useState(15);
  
  const calculatePrice = (count: number) => {
    if (count <= 5) return 20;
    if (count <= 15) return 15;
    return 12;
  };

  const pricePerPerson = calculatePrice(people);
  const totalPrice = people * pricePerPerson;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
      <div className="flex items-center gap-2 mb-4">
        <Calculator className="w-6 h-6 text-orange-500" />
        <h3 className="text-xl font-bold">Price Calculator</h3>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Number of People
        </label>
        <input
          type="range"
          min="5"
          max="50"
          value={people}
          onChange={(e) => setPeople(Number(e.target.value))}
          className="w-full h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="text-center mt-2 text-2xl font-bold text-orange-600">
          {people} People
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex justify-between items-center border-b pb-2">
          <span>Price per Person:</span>
          <span className="font-semibold">€{pricePerPerson}</span>
        </div>
        <div className="flex justify-between items-center text-lg font-bold">
          <span>Total Price:</span>
          <span className="text-orange-600">€{totalPrice}</span>
        </div>
      </div>
      <button className="w-full mt-6 bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
        Get Your Quote Now
      </button>
    </div>
  );
}