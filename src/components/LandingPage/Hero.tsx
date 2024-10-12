const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-10 text-center h-[91.5vh]">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
          <span className="text-purple-600">Kumo</span>
          <br />{" "}
          <span className="text-5xl font-medium">
            A Real Time Chat Platform
          </span>
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
          Welcome to our real-time chatting application, where users can
          connect, collaborate, and engage in meaningful conversations in a
          secure and user-friendly environment.
        </p>
      </div>
      <div className="space-x-4">
        <button className="bg-gray-800/60 p-3 rounded-lg hover:bg-gray-700 transition-colors">
          Get Started
        </button>
        <button className="bg-white text-black p-3 rounded-lg hover:bg-purple-600 hover:text-white transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Hero;
