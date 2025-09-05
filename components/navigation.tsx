import { SparklesIcon } from "lucide-react";
import Link from "next/link";

export default function Navigation() {
  return (
    <header className="container mx-auto py-4 flex justify-between items-center border-b border-border">
      <Link href="/" className="flex items-center gap-2">
        <SparklesIcon className="h-6 w-6" />
        <span className="font-bold text-xl text-magic-purple">Zodiac Shop</span>
      </Link>

      <Link href="/mystery-potion">
        <p className="px-4 py-2 rounded-lg bg-secondary font-sans text-magic-blue italic hover:bg-secondary/80 transition-colors">
          Mystery Potion 🧪
        </p>
      </Link> 
    </header>
  );
}
