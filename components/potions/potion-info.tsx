import {
  PotionHeader,
  PotionInfoCard,
  PotionStats,
} from '@/components/potions/potion-common';
import { PotionType } from '@/types/github';
import { CalendarIcon, CodeIcon } from 'lucide-react';

interface PotionInfoType {
  potion: PotionType;
}

export default function PotionInfo({ potion }: PotionInfoType) {
  const title = 'Potion Details';
  const subTitle = 'Discover the magical properties of this enchanted brew';
  const {
    name,
    owner,
    description,
    stargazers_count,
    forks_count,
    potionEffect,
    topics,
    language,
    updated_at,
    magicalType,
  } = potion;
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-2 text-4xl font-bold text-purple-200">{title}</h1>
        <p className="text-purple-300/70">{subTitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/** Left Column */}
        <div className="md:col-span-1">
          <div
            className={`p-6 rounded-2xl border border-magic-purple/20 h-full potion-${magicalType}`}
          >
            <PotionHeader name={name} owner={owner} size="medium" />

            <div className="space-y-4">
              <PotionInfoCard title="Effect">
                <p>{potionEffect}</p>
              </PotionInfoCard>

              <PotionInfoCard title="Github Stats">
                <PotionStats stars={stargazers_count} forks={forks_count} />
              </PotionInfoCard>

              <PotionInfoCard title="Language">
                <div className="flex items-center gap-2">
                  <CodeIcon className="h-4 w-4 text-green-400" />
                  <span>{language}</span>
                </div>
              </PotionInfoCard>

              <PotionInfoCard title="Last Updated">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="h-4 w-4 text-purple-400" />
                  <span>
                    {new Date(updated_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>
              </PotionInfoCard>
            </div>
          </div>
        </div>
        {/** Right Column */}
      </div>
    </main>
  );
}
