import {
  Activity,
  FileText,
  Shield,
  Smartphone,
  Smile,
  Users,
  Video,
  Zap,
} from "lucide-react";
import Image from "next/image";

const Features = () => {
  return (
    <div className="grid gap-16 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
      <div className="flex items-center justify-center">
        <div className="relative w-[280px] h-[560px] sm:w-[320px] sm:h-[640px] md:w-[360px] md:h-[720px]">
          <Image
            src="/images/mockup1.png"
            alt="Chrono app interface"
            width={400}
            height={400}
            className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
          />
          <Image
            src="/images/mockup1.png"
            alt="Chrono app chat interface"
            width={400}
            height={400}
            className="absolute top-1/4 -right-1/4 w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center space-y-4">
        <h2 className="text-4xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
          Explore <span className="text-purple-600">Features</span>
        </h2>
        <ul className="grid gap-4 md:gap-6 text-2xl">
          <li className="flex items-center space-x-3">
            <Users className="h-5 w-5 text-purple-600" />
            <span>Connect with Friends</span>
          </li>
          <li className="flex items-center space-x-3">
            <Shield className="h-5 w-5 text-purple-600" />
            <span>Secure and Reliable</span>
          </li>
          <li className="flex items-center space-x-3">
            <Zap className="h-5 w-5 text-purple-600" />
            <span>Instant Messaging</span>
          </li>
          <li className="flex items-center space-x-3">
            <FileText className="h-5 w-5 text-purple-600" />
            <span>File Sharing</span>
          </li>
          <li className="flex items-center space-x-3">
            <Activity className="h-5 w-5 text-purple-600" />
            <span>Online Status</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Features;
