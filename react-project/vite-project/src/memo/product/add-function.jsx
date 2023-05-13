export const isMatchingCharacter = (str, char) => {
  if (!str) return false;
  str = str.toLowerCase();
  char = char.toLowerCase();
  return str.match(char);
};
