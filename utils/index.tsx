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
