import { PotionType } from "@/types/github";
import { PotionCard } from "./potion-card";

interface PotionGridProps {
  potions: PotionType[];
}

export function PotionGrid({ potions }: PotionGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {potions.map((potion, index) => (
        <PotionCard {...potion} key={`${potion.name}-${index}`} />
      ))}
    </div>
  );
}
