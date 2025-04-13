import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { PotionType } from '@/types/github';
import { getMagicalTypeIcon } from '@/utils';
import Link from 'next/link';
import { PotionHeader, PotionStats } from './potion-common';

export const PotionCard = ({
  full_name,
  name,
  description,
  topics,
  owner: { login, avatar_url },
  magicalType,
  potionEffect,
  stargazers_count,
  forks_count,
}: PotionType) => {
  return (
    <Link href={`/potions/${full_name.replace('/', '__')}`}>
      <Card
        className={`potion-card relative group h-full cursor-pointer transition-all duration-300 potion-${magicalType}`}
        key={`${full_name}-${name}`}
      >
        <div className="absolute right-4 top-4 z-10">
          {getMagicalTypeIcon(magicalType)}
        </div>
        <CardHeader className="p-6 pb-0">
          <PotionHeader name={name} owner={{ login, avatar_url }} />
        </CardHeader>
        <CardContent className="p-6 pt-3">
          <p className="text-sm text-foreground/70 mt-3 mb-4 line-clamp-3 h-[3.75rem] overflow-hidden text-ellipsis">
            {description}
          </p>
          <div className="mb-4">
            <p className="text-sm flex items-center gap-1.5 mb-1 text-magic-light-purple">
              <span>✨</span>Effect: {potionEffect}
            </p>
            <PotionStats
              stars={stargazers_count}
              forks={forks_count}
              classNames="items-center text-xs text-muted-foreground"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {topics.map((topic, index) => (
              <Badge
                key={index}
                className={`text-xs px-2 py-1 bg-magic-purple/15 text-white/80 hover:bg-magic-purple/25`}
              >
                {topic}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
