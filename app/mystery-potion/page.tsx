import PotionInfo from "@/components/potions/potion-info";
import { fetchRandomTrendingPotion } from "@/lib/github";
import { notFound } from "next/navigation";

export const generateMetadata = async () => {
  const potion = await fetchRandomTrendingPotion();

  return {
    title: `Mystery Potion - ${potion?.name}`,
    description: potion?.description,
    alternates: {
      canonical: `/mystery-potion`,
    },
  };
};

export default async function MysteryPotion() {
  const potion = await fetchRandomTrendingPotion();

  if (!potion) {
    notFound();
  }

  return <PotionInfo potion={potion} />;
}
