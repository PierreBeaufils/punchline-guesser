export const filterByDifficulty = (array, param) => {
  const result = array.filter((item) => item.difficulty.name === param);
  return result.length;
};

export const filterByArtist = (array, artist) => {
  const result = array.filter((item) => item.good_answer.name === artist);
  return result.length;
};
