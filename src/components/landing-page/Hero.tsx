import { Send } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="min-h-screen w-full bg-white relative flex items-center justify-center overflow-hidden">
      {/* Grid Background - Smaller grid squares */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)] [background-size:20px_20px]"></div>

      {/* Bottom Fade Effect */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-white via-transparent h-full"></div>

      {/* Background Images */}
      <img
        src="/images/chat-bubble.png"
        alt="Chat Bubble"
        className="absolute left-16 top-24 w-20 opacity-60 rotate-[-15deg]"
      />
      <img
        src="/images/person.png"
        alt="Person"
        className="absolute left-24 bottom-32 w-20 opacity-80 rotate-[10deg]"
      />
      <img
        src="/images/send.png"
        alt="Send Arrow"
        className="absolute right-28 top-24 w-20 opacity-60 rotate-[20deg]"
      />
      <img
        src="/images/idea.png"
        alt="Idea Bulb"
        className="absolute right-10 bottom-32 w-20 opacity-70 rotate-[-10deg]"
      />

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-y-6 w-full">
          <h1 className="font-semibold text-6xl tracking-tight text-center">
            Connect with your community
          </h1>
          <p className="text-xl max-w-4xl text-center">
            Welcome to our real-time chat app, where users can connect,
            collaborate, and engage.
          </p>
          <Link
            href="https://kumochat.vercel.app"
            className="rounded-lg py-2 px-4 bg-orange-100 text-orange-500 font-medium hover:bg-orange-500 hover:text-white transition duration-300 flex items-center gap-x-2"
          >
            Get Started <Send size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
