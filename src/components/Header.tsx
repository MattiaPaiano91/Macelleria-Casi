import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-2 fixed w-full z-50 shadow-md">
      <nav className="container mx-auto flex justify-between items-center h-full px-4">
        <div className="flex items-center">
          <span className="ml-2 text-lg font-semibold text-gray-800">
            Macelleria Paiano
          </span>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-4 text-sm font-medium text-gray-600">
          <li>
            <Link href="/" className="hover:text-red-600 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-red-600 transition-colors"
            >
              IL Team
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-red-600 transition-colors"
            >
              Contattaci
            </Link>
          </li>
        </ul>

        {/* Toggle Menu Mobile con CSS */}
        <input type="checkbox" id="menu-toggle" className="hidden peer" />
        <label
          htmlFor="menu-toggle"
          className="md:hidden cursor-pointer block p-2"
        >
          ☰
        </label>

        <div className="hidden peer-checked:flex flex-col absolute top-full left-0 w-full bg-white shadow-md md:hidden">
          <Link
            href="/"
            className="py-2 px-4 border-b text-gray-800 hover:text-red-600"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="py-2 px-4 border-b text-gray-800 hover:text-red-600"
          >
            IL Team
          </Link>
          <Link
            href="/contact"
            className="py-2 px-4 text-gray-800 hover:text-red-600"
          >
            Contattaci
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
