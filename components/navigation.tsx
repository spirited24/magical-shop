import { SparklesIcon } from "lucide-react";
import Link from "next/link";

export default function Navigation() {
  return (
    <header className="container mx-auto py-4 flex justify-between items-center relative">
      {/* Animated cosmic gradient border */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-blue-500 via-cyan-400 via-pink-500 via-violet-600 to-purple-500 bg-[length:200%_100%] animate-[gradient_3s_ease-in-out_infinite]"></div>
      
      {/* Subtle cosmic glow effect */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/30 via-blue-400/30 via-cyan-300/30 via-pink-400/30 to-transparent blur-sm animate-[gradient_8s_ease-in-out_infinite] bg-[length:200%_100%]"></div>
       */}
      <Link href="/" className="flex items-center gap-2 mb-5">
        <SparklesIcon className="h-6 w-6" />
        <span className="font-bold text-xl text-magic-purple">Magical Shop</span>
      </Link>

      <Link href="/mystery-potion">
        <p className="px-4 py-2 rounded-lg bg-secondary font-sans text-magic-blue italic hover:bg-secondary/80 transition-colors">
          Mystery Potion 🧪
        </p>
      </Link>
      
    </header>
  );
}