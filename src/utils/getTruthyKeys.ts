export const getTruthyKeys = (obj: object) => {
  return Object.keys(
    Object.fromEntries(Object.entries(obj).filter(([_, o]) => o))
  ).map((item) => item.toLocaleLowerCase());
};
