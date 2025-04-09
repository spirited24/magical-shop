import { MAGICAL_TYPES } from "./constants";

export const getMagicalTypeIcon = (magicalType: string) => {
  return MAGICAL_TYPES.filter((type) => magicalType === type.id)[0].icon;
};
