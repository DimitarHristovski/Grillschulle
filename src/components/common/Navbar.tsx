import { Link } from "react-router-dom";
import { Menu, Flame } from "lucide-react";
import { useState } from "react";
import { navbarLabels } from "../../data/Data";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Flame className="h-8 w-8 text-orange-500" />
            <span className="text-xl font-bold">{navbarLabels.brand}</span>
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-orange-500">
              {navbarLabels.navLinks.home}
            </Link>
            <Link to="/catalog" className="text-gray-700 hover:text-orange-500">
              {navbarLabels.navLinks.catalog}
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-orange-500">
              {navbarLabels.navLinks.about}
            </Link>

            <button
              className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
              onClick={() => {
                document
                  .querySelector(".fixed.bottom-6.right-6")
                  ?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
              }}
            >
              {navbarLabels.cartButton}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link
              to="/"
              className="block text-gray-700 hover:text-orange-500"
              onClick={() => setIsMenuOpen(false)}
            >
              {navbarLabels.navLinks.home}
            </Link>
            <Link
              to="/catalog"
              className="block text-gray-700 hover:text-orange-500"
              onClick={() => setIsMenuOpen(false)}
            >
              {navbarLabels.navLinks.catalog}
            </Link>
            <Link
              to="/about"
              className="block text-gray-700 hover:text-orange-500"
              onClick={() => setIsMenuOpen(false)}
            >
              {navbarLabels.navLinks.about}
            </Link>

            <button
              className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
              onClick={() => {
                document
                  .querySelector(".fixed.bottom-6.right-6")
                  ?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
              }}
            >
              {navbarLabels.cartButton}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
