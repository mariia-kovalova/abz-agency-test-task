const MAX_NUM_OF_CHARS = 34;

export const textNormalize = (text: string) => {
  if (text.length <= MAX_NUM_OF_CHARS) return text;
  return `${text.slice(0, MAX_NUM_OF_CHARS)}...`;
};
