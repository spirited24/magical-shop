import { FlameIcon, SnowflakeIcon, SparklesIcon, ZapIcon } from "lucide-react";

export const MAGICAL_TYPES = [
  {
    id: "fire",
    value: "🔥",
    label: "Fire-type",
    icon: <FlameIcon className="text-element-fire" />,
  },
  {
    id: "ice",
    value: "🧊",
    label: "Ice-type",
    icon: <SnowflakeIcon className="text-element-ice" />,
  },
  {
    id: "electric",
    value: "⚡️",
    label: "Electric-type",
    icon: <ZapIcon className="text-element-electric" />,
  },
  {
    id: "all",
    value: "✨",
    label: "All Types",
    icon: <SparklesIcon className="text-magic-purple" />,
  },
];
