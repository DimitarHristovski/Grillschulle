import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { meatItems } from "../data/Data";
import { useQuoteStore } from "../store/useQuoteStore";

export default function Catalog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const addItem = useQuoteStore((state) => state.addItem);

  const categories = ["Beef", "Pork", "Lamb", "Chicken", "Sausages"];

  const filteredItems = meatItems.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice =
      item.price >= priceRange[0] && item.price <= priceRange[1];
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.some((cat) =>
        item.name.toLowerCase().includes(cat.toLowerCase())
      );
    return matchesSearch && matchesPrice && matchesCategory;
  });

  return (
    <div className="pt-24">
      {/* Filter Button */}
      <div className="fixed bottom-24 right-6 z-40">
        <button
          onClick={() => setIsFilterOpen(true)}
          className="bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition-colors"
        >
          <SlidersHorizontal className="w-6 h-6" />
        </button>
      </div>

      {/* Filter Drawer */}
      {isFilterOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl">
            <div className="p-6 h-full overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Filter</h2>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-3">Kategorien</h4>
                  {categories.map((category) => (
                    <label
                      key={category}
                      className="flex items-center gap-2 mb-3 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedCategories([
                              ...selectedCategories,
                              category,
                            ]);
                          } else {
                            setSelectedCategories(
                              selectedCategories.filter((c) => c !== category)
                            );
                          }
                        }}
                        className="rounded text-orange-500 focus:ring-orange-500"
                      />
                      {category}
                    </label>
                  ))}
                </div>

                <div>
                  <h4 className="font-medium mb-3">Preisbereich</h4>
                  <div className="space-y-3">
                    <input
                      type="range"
                      min="0"
                      max="50"
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([priceRange[0], Number(e.target.value)])
                      }
                      className="w-full h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>€{priceRange[0]}</span>
                      <span>€{priceRange[1]}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-6">
        {/* Main Content */}
        <div className="w-full">
          {/* Search Bar */}
          <div className="relative mb-8">
            <input
              type="text"
              placeholder="Fleisch suchen..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link to={`/catalog/${item.id}`}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                </Link>
                <div className="p-6">
                  <Link to={`/catalog/${item.id}`}>
                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                  </Link>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-orange-600">
                      €{item.price}
                    </span>
                    <button
                      className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                      onClick={() => {
                        addItem(item);
                      }}
                    >
                      Zum Angebot
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
