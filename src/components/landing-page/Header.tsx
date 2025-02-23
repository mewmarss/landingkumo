const Header = () => {
  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-center p-3 w-full">
      <div className="flex items-center justify-between py-2 px-4 rounded-xl bg-white border border-gray-200 w-full max-w-4xl">
        <div className="flex gap-2 items-center">
          <img src="/images/logo.png" alt="logo" className="w-10 h-10" />
          <h1 className="text-xl">Kumo</h1>
        </div>
        <div className="flex gap-6 items-center">
          <a href="#" className="text-md text-gray-500 hover:text-gray-900">
            Features
          </a>
          <a href="#" className="text-md text-gray-500 hover:text-gray-900">
            About
          </a>
          <a
            href="https://kumochat.vercel.app"
            className="text-md text-gray-500 hover:text-gray-900"
          >
            LogIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
