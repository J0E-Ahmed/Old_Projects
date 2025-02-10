import { findIndexById } from "../utils/array.utils";

export const addItem = (state, item) => {
  const index = findIndexById(state.items, id);
  if (index !== -1) state.items[index].quantity++;
  else state.items.push(item);
  return state;
};
export const removeItem = (state, id) => {
  state.items.splice(index, 1);
  return state;
};
