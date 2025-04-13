import { MAGICAL_TYPES } from "./constants";

export const getMagicalTypeIcon = (magicalType: string) => {
  return MAGICAL_TYPES.filter((type) => magicalType === type.id)[0].icon;
};

export const getFilterPillColor = (id: string) => {
  return id === "fire"
    ? "from-element-fire/20"
    : id === "ice"
    ? "from-element-ice/20"
    : id === "electric"
    ? "from-element-electric/20"
    : "from-magic-purple/20";
};

const isDev = process.env.NODE_ENV === "development";

export const ORIGIN_URL = isDev
  ? "http://localhost:3001"
  : "https://open-source-spirit-shop.vercel.app";
