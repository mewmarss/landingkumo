const Footer = () => {
  return (
    <footer className="w-full max-w-5xl mx-auto py-28 px-6 md:px-16 text-sm text-gray-700 mt-28">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Left Side - Branding */}
        <div className="flex flex-col gap-3">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/images/logo.png" alt="Kumo Logo" className="h-10 w-10" />
            <span className="text-xl">Kumo</span>
          </div>
          <p className="text-gray-500">© 2025 Kumo, Mumbai</p>
        </div>

        {/* Right Side - Links */}
        <div className="grid grid-cols-2 gap-x-10 gap-y-2 mt-6 md:mt-0">
          <a href="#" className="hover:underline">
            Contact Us
          </a>
          <a href="#" className="hover:underline">
            Sign Up
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <a href="#" className="hover:underline">
            Ethos
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Help
          </a>
          <a href="#" className="hover:underline">
            Acts Notices
          </a>
          <a href="#" className="hover:underline">
            Status
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
