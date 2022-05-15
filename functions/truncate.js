export const truncateText = (text, chars) => {
  const trimmedText = text.substr(0, chars);

  trimmedText = trimmedText.substr(
    0,
    Math.min(trimmedText.length, trimmedText.lastIndexOf(' '))
  );

  return trimmedText;
};
