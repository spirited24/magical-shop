export type GithubRepo = {
  id: number;
  name: string;
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  owner: {
    login: string;
    avatar_url: string;
  };
  language: string;
  updated_at: string;
};

export type MagicalType = "fire" | "ice" | "electric" | "all";

export interface PotionType extends GithubRepo {
  potionEffect: string;
  magicalType: MagicalType;
}
