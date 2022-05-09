//? 2 Words Title
const shorten = (nameShorter) => {
  const split = nameShorter.split(" ");
  const [first, second] = split;
  let newSplit = `${first} ${second}`;
  if (second === "-") {
    return (newSplit = `${first}`);
  }
  return newSplit;
};

//? For Increase Vs Add_Item Dispatchers
const isInCard = (state, id) => {
  const result = !!state.selectedItems.find((item) => item.id === id);
  return result;
};

//? For Decrease Vs Remove Dispatchers + Counter
const remover = (state, id) => {
  const hasIt = state.selectedItems.findIndex((item) => item.id === id);
  if (hasIt === -1) {
    return false;
  } else {
    return state.selectedItems[hasIt].quantity;
  }
};

const useTitle = (title) => {
  document.title = `Online Shop | ${title}`;
};

export { shorten, isInCard, remover, useTitle };
