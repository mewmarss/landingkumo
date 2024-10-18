import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center justify-between sticky top-0 left-0 z-50 bg-white/20 backdrop-blur-xl">
      <Link className="flex items-center justify-center" href="#">
        <Image src="/images/logo.png" alt="Logo" width={60} height={60} />
        <span className="ml-2 text-2xl font-bold text-orange-500">Kumo</span>
      </Link>
      <nav className="flex justify-between gap-6 ml-10">
        <Link
          className="text-lg font-medium hover:underline underline-offset-4 decoration-orange-500 decoration-4"
          href="#"
        >
          Home
        </Link>
        <Link
          className="text-lg font-medium hover:underline underline-offset-4 decoration-orange-500 decoration-4"
          href="#"
        >
          About
        </Link>
        <Link
          className="text-lg font-medium hover:underline underline-offset-4 decoration-orange-500 decoration-4"
          href="#"
        >
          Features
        </Link>
        <Link
          className="text-lg font-medium hover:underline underline-offset-4 decoration-orange-500 decoration-4"
          href="#"
        >
          Contact
        </Link>
      </nav>
      <div className="flex justify-between gap-4">
        <Link
          href="https://kumochat.vercel.app"
          className="bg-gray-200 shadow text-black p-2 px-3 rounded-lg hover:bg-orange-500 hover:text-white transition-colors"
        >
          Login
        </Link>
        <Link
          href="https://kumochat.vercel.app"
          className="bg-orange-500 shadow text-white p-2 px-3 rounded-lg hover:bg-gray-700 transition-colors"
        >
          Sign up
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
