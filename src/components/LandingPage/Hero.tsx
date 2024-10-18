"use client";

import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col gap-24 ml-8">
        <span className="text-6xl transform rotate-[10deg]">🗯</span>
        <span className="text-6xl transform rotate-[-10deg] ml-10">🧑</span>
      </div>
      <div className="flex flex-col items-center justify-center space-y-10 text-center h-[91.5vh]">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            <span className="text-orange-500">Kumo</span>
            <br />{" "}
            <span className="text-5xl font-medium">
              <Typewriter
                words={[
                  "Chat effortlessly on Kumo!",
                  "Connect with friends instantly",
                  "Connect with your community",
                ]}
                loop={5}
                cursor
                cursorStyle="|"
                typeSpeed={90}
              />
            </span>
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
            Welcome to our real-time chatting application, where users can
            connect, collaborate, and engage in meaningful conversations in a
            secure and user-friendly environment.
          </p>
        </div>
        <div className="space-x-4">
          <Link
            href="https://kumochat.vercel.app"
            className="bg-orange-500 shadow text-white p-2 px-3 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Get Started
          </Link>
          <button className="bg-gray-200 shadow text-black p-2 px-3 rounded-lg hover:bg-orange-500 hover:text-white transition-colors">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-24 mr-8">
        <span className="text-6xl transform rotate-[10deg] ml-10">🔐</span>
        <span className="text-6xl transform rotate-[-10deg]">💻</span>
      </div>
    </div>
  );
};

export default Hero;
