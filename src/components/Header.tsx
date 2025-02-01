
import Link from 'next/link';
import '@/style/globals.css';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-2">
      <nav className="container mx-auto flex justify-between items-center h-full">
        {/* Logo sulla sinistra */}
        <div className="flex items-center">
          {/* <Image src="/logo.png" alt="Macelleria Paiano Logo" width={40} height={40} /> */}
          <span className="ml-2 text-lg font-semibold text-gray-800">Macelleria Paiano</span>
        </div>

        {/* Navigazione minimale */}
        <ul className="flex gap-4 text-sm font-medium text-gray-600">
          <li>
            <Link href="/" className="hover:text-red-600 transition-colors">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-red-600 transition-colors">IL Team</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-red-600 transition-colors">Contattaci</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;