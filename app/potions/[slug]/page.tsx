import { fetchPotion } from "@/lib/github";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const popularRepos = [
    "facebook/react",
    "tailwindlabs/tailwindcss",
    "nodejs/node",
    "vercel/next.js",
    "typescript/TypeScript",
  ];
  return popularRepos.map((repo) => ({
    slug: repo.replace("/", "__"),
  }));
}

export default async function PotionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const [owner, repo] = slug.split("__");

  if (!owner || !repo) {
    notFound();
  }

  const potion = await fetchPotion(owner, repo);

  return <div>My Post: {JSON.stringify(potion)}</div>;
}
