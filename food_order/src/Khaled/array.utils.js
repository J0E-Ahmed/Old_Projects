export const findIndexById = (items, id) => {
  return items.findIndex((item) => item.id === id);
};
export const someById = (items, id) => {
  return items.some((item) => item.id === id);
};
