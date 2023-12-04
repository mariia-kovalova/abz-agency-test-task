const maxNumOfChars = 34;

export const textNormalize = (text: string) => {
  if (text.length <= maxNumOfChars) return text;
  return `${text.slice(0, maxNumOfChars)}...`;
};
