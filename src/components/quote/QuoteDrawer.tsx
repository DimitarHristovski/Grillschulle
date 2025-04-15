import {
  ShoppingBag,
  X,
  Minus,
  Plus,
  Trash2,
  Users,
  CheckCircle,
} from "lucide-react";
import { useQuoteStore } from "../../store/useQuoteStore";
import { useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

declare module "jspdf" {
  interface jsPDF {
    lastAutoTable: {
      finalY: number;
    };
  }
}

export default function QuoteDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  const [showConfirmation, setShowConfirmation] = useState(false);
  const {
    items,
    removeItem,
    updateQuantity,
    getTotalPrice,
    peopleCount,
    clearQuote,
    getOriginalPrice,
    getDiscountedPrice,
    getSavedAmount,
  } = useQuoteStore();
  const quoteData = {
    customerInfo: { name, email },
    items,
    peopleCount,
    date,
    totalPrice: getTotalPrice(),
  };
  console.log(quoteData);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const generatedDate = new Date().toLocaleDateString("de-DE", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
    });

    // Generate PDF
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Warenkorb", 14, 22);

    doc.setFontSize(12);
    doc.text(`Name: ${name}`, 14, 32);
    doc.text(`Email: ${email}`, 14, 40);
    doc.text(`Anzahl der Personen: ${peopleCount}`, 14, 48);
    doc.text(`Erstellungsdatum: ${generatedDate}`, 14, 56);

    autoTable(doc, {
      startY: 64,
      head: [["Produkt", "Anzahl", "Original Preis", "Sie sparen"]],
      body: items.map((item) => [
        item.name,
        item.quantity.toString(),
        `€${(item.quantity * item.price).toFixed(2)}`,
        ` €${getSavedAmount().toFixed(2)}`,
      ]),
    });

    const finalY = doc.lastAutoTable.finalY || 100;

    doc.setFontSize(14);
    doc.text(`Gesamtpreis: €${getTotalPrice().toFixed(2)}`, 14, finalY + 10);

    //doc.save(`Warenkorb-${name || "kunde"}.pdf`);
    const blob = doc.output("blob");
    const generatedUrl = URL.createObjectURL(blob);

    // Save for fallback link
    setPdfUrl(generatedUrl);

    // Create and trigger download
    const link = document.createElement("a");
    link.href = generatedUrl;
    link.download = `Warenkorb-${generatedDate}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Delay revocation to avoid "check internet" errors
    setTimeout(() => {
      URL.revokeObjectURL(generatedUrl);
    }, 3000); // gives browser time to download

    // Show confirmation
    setShowConfirmation(true);

    // Reset after 45 seconds
    setTimeout(() => {
      clearQuote();
      setIsOpen(false);
      setName("");
      setEmail("");
      setShowConfirmation(false);
    }, 60000);
  };
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
              {showConfirmation ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
                  <CheckCircle className="w-16 h-16 text-green-500 mb-6" />
                  <h2 className="text-2xl font-bold mb-4">
                    Ihre Kalkulation ist abgeschlossen!
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Die Berechnung für Ihre Essensbestellung wurde erfolgreich
                    durchgeführt. <br />
                    Die PDF-Datei mit Ihrer Kalkulation wurde heruntergeladen.{" "}
                    <br />
                    Bei Fragen stehen wir Ihnen gerne zur Verfügung.
                  </p>

                  <div className="bg-gray-50 p-4 rounded-lg w-full mb-6">
                    <h3 className="font-semibold mb-2">
                      Ihre Essensbestellung Cost:
                    </h3>
                    <ul className="text-left space-y-2">
                      {items.map((item) => (
                        <li key={item.id} className="flex justify-between">
                          <span>{item.name}</span>
                          <span>x{item.quantity}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="border-t mt-4 pt-4 flex justify-between font-bold">
                      <span>Gesamtpreis:</span>
                      <span className="text-orange-600">
                        €{getTotalPrice().toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">
                    Diese Seite schließt sich automatisch in wenigen Sekunden...
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">
                      Ihr Essensbestellung Cost
                    </h2>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  {items.length === 0 ? (
                    <div className="flex-1 flex items-center justify-center text-gray-500">
                      Ihr Essensbestellung Cost ist leer
                    </div>
                  ) : (
                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-col h-full"
                    >
                      <div className="flex-1 overflow-y-auto">
                        <div className="space-y-4 mb-6">
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
                                    type="button"
                                    onClick={() =>
                                      updateQuantity(
                                        item.id,
                                        Math.max(0, item.quantity - 1)
                                      )
                                    }
                                    className="p-1 hover:bg-gray-200 rounded"
                                  >
                                    <Minus className="w-4 h-4" />
                                  </button>
                                  <span className="w-8 text-center">
                                    {item.quantity}
                                  </span>
                                  <button
                                    type="button"
                                    onClick={() =>
                                      updateQuantity(item.id, item.quantity + 1)
                                    }
                                    className="p-1 hover:bg-gray-200 rounded"
                                  >
                                    <Plus className="w-4 h-4" />
                                  </button>
                                </div>
                              </div>
                              <button
                                type="button"
                                onClick={() => removeItem(item.id)}
                                className="text-red-500 hover:text-red-700"
                              >
                                <Trash2 className="w-5 h-5" />
                              </button>
                            </div>
                          ))}
                        </div>

                        <div className="space-y-4 mb-6">
                          <div className="flex items-center gap-2 bg-orange-50 p-4 rounded-lg">
                            <Users className="w-5 h-5 text-orange-500" />
                            <span>Anzahl der Personen: {peopleCount}</span>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Name
                            </label>
                            <input
                              type="text"
                              required
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Email
                            </label>
                            <input
                              type="email"
                              required
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="border-t pt-4 space-y-4">
                        <div className="flex justify-between items-center font-bold text-lg">
                          <span>Ihre Gesamtkosten:</span>
                          <span className="text-orange-600">
                            €{getTotalPrice().toFixed(2)}
                          </span>
                        </div>
                        <button
                          type="submit"
                          className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                        >
                          Berechnen{" "}
                        </button>
                      </div>
                    </form>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
