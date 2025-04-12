import { ShoppingBag, X, Minus, Plus, Trash2 } from 'lucide-react';
import { useQuoteStore } from '../store/useQuoteStore';
import { useState } from 'react';

export default function QuoteDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const { items, removeItem, updateQuantity, getTotalPrice, peopleCount } = useQuoteStore();

  return (
    <>
      {/* Quote Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition-colors z-50"
      >
        <ShoppingBag className="w-6 h-6" />
        {items.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">
            {items.length}
          </span>
        )}
      </button>

      {/* Drawer */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="absolute right-0 top-0 h-full w-full md:w-96 bg-white shadow-xl">
            <div className="p-6 h-full flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Your Quote</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {items.length === 0 ? (
                <div className="flex-1 flex items-center justify-center text-gray-500">
                  Your quote is empty
                </div>
              ) : (
                <>
                  <div className="flex-1 overflow-y-auto space-y-4">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold">{item.name}</h3>
                          <p className="text-orange-600 font-bold">
                            €{item.price}
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <button
                              onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                              className="p-1 hover:bg-gray-200 rounded"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 hover:bg-gray-200 rounded"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4 mt-4 space-y-4">
                    <div className="flex justify-between items-center text-sm text-gray-600">
                      <span>Number of People:</span>
                      <span>{peopleCount}</span>
                    </div>
                    <div className="flex justify-between items-center font-bold text-lg">
                      <span>Total:</span>
                      <span className="text-orange-600">€{getTotalPrice().toFixed(2)}</span>
                    </div>
                    <button
                      onClick={() => {
                        // Handle quote submission
                        alert('Thank you for your quote request! We will contact you shortly.');
                        setIsOpen(false);
                      }}
                      className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                    >
                      Submit Quote Request
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}