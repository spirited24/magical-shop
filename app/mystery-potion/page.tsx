import PotionInfo from "@/components/potions/potion-info";
import { fetchRandomTrendingPotion } from "@/lib/github";
import { notFound } from "next/navigation";

export default async function MysteryPotion() {
  const potion = await fetchRandomTrendingPotion();

  if (!potion) {
    notFound();
  }

  return <PotionInfo potion={potion} />;
}
