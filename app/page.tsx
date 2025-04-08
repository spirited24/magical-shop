import { fetchPotions } from "@/lib/github";

export default async function Home() {
  const data = await fetchPotions();

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-linear-to-r from-magic-light-purple via-magic-purple to-magic-pink">
          Open Source Spirit Shop
        </h1>
        <p className="text-lg text-foreground/80">
          Discover magical potions brewed from the powers of popular open-source
          tools
        </p>
        {JSON.stringify(data, null, 2)}
      </div>
    </main>
  );
}
