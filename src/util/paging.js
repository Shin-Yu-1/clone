export const paging = ({ arr, size, page }) => {
  const startIndex = (page - 1) * size;
  const endIndex = startIndex + size;

  return arr.slice(startIndex, endIndex);
};
