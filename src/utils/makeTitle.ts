export const makeTitle = (title: string, isSiteName = true) => {
  return isSiteName ? title + " - Разминка" : title;
};
