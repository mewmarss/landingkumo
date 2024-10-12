import { Cloud } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center justify-between sticky top-0 left-0 z-50 bg-gray-950/20 backdrop-blur-xl">
      <Link className="flex items-center justify-center" href="#">
        <Cloud className="h-10 w-10 text-purple-600" />
        <span className="ml-2 text-2xl font-bold text-purple-600">Kumo</span>
      </Link>
      <nav className="flex justify-between gap-6 ml-10">
        <Link
          className="text-lg font-medium hover:underline underline-offset-4 decoration-purple-600 decoration-4"
          href="#"
        >
          Home
        </Link>
        <Link
          className="text-lg font-medium hover:underline underline-offset-4 decoration-purple-600 decoration-4"
          href="#"
        >
          About
        </Link>
        <Link
          className="text-lg font-medium hover:underline underline-offset-4 decoration-purple-600 decoration-4"
          href="#"
        >
          Features
        </Link>
        <Link
          className="text-lg font-medium hover:underline underline-offset-4 decoration-purple-600 decoration-4"
          href="#"
        >
          Contact
        </Link>
      </nav>
      <div className="flex justify-between gap-4">
        <button className="bg-white text-black p-2 px-3 rounded-lg hover:bg-purple-600 hover:text-white transition-colors">
          Login
        </button>
        <button className="bg-gray-800/60 p-2 px-3 rounded-lg hover:bg-gray-700 transition-colors">
          Sign up
        </button>
      </div>
    </header>
  );
};

export default Navbar;
