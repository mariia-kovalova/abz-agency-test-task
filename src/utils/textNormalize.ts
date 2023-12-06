export const textNormalize = (text: string, max: number) => {
  return `${text.slice(0, max)}...`;
};
