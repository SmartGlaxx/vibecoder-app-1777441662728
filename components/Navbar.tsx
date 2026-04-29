import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-indigo-600">SimpleSite</Link>
        <div className="space-x-6">
          <Link href="/" className="text-gray-700 hover:text-indigo-600 transition">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-indigo-600 transition">About</Link>
          <Link href="/services" className="text-gray-700 hover:text-indigo-600 transition">Services</Link>
          <Link href="/portfolio" className="text-gray-700 hover:text-indigo-600 transition">Portfolio</Link>
          <Link href="/contact" className="text-gray-700 hover:text-indigo-600 transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
}