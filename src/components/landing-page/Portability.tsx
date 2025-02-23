import Iphone15Pro from '../magicui/iphone-15-pro';

const Portability = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-col max-w-5xl gap-y-16 text-center mx-auto">
        <div className="flex flex-col gap-y-4">
          <h1 className="text-4xl font-semibold">
            Work Anywhere, Connect Anytime
          </h1>
          <h2 className="text-lg max-w-4xl mx-auto">
            Access Kumo on any device—seamlessly switch between mobile and
            desktop. Stay connected through email and chat, all in one place.
          </h2>
        </div>
        <div className="flex items-center justify-between bg-gray-50 rounded-xl p-4">
          <div className="flex flex-col gap-y-12">
            <div className="group hover:bg-orange-100 hover:cursor-pointer transition duration-300 rounded-lg bg-gray-100 px-4 py-4 flex flex-col gap-y-2 text-left">
              <h1 className="group-hover:text-orange-500">
                Cross-Platform Access
              </h1>
              <p className="max-w-xl">
                Use Kumo on mobile and desktop via the web, giving you the
                flexibility to work anytime, anywhere without limitations.
              </p>
            </div>
            <div className="group hover:bg-orange-100 hover:cursor-pointer transition duration-300 rounded-lg bg-gray-100 px-4 py-4 flex flex-col gap-y-2 text-left">
              <h1 className="group-hover:text-orange-500">
                Integrated Communication
              </h1>
              <p className="max-w-xl">
                Connect seamlessly with people through email and real-time chat,
                keeping your conversations and collaborations in one place.
              </p>
            </div>
            <div className="group hover:bg-orange-100 hover:cursor-pointer transition duration-300 rounded-lg bg-gray-100 px-4 py-4 flex flex-col gap-y-2 text-left">
              <h1 className="group-hover:text-orange-500">
                No Downloads Needed
              </h1>
              <p className="max-w-xl">
                Simply open your browser, log in, and start working instantly—no
                installations, no setup, just pure productivity.
              </p>
            </div>
          </div>

          <div className="mx-auto">
            <Iphone15Pro
              src="/images/mobile.png"
              className="w-full h-[400px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portability;
