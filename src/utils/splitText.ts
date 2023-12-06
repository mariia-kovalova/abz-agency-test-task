export const splitText = (text: string, max: number) => {
  if (text.length <= max) return text;

  const result = splitTextRecursive(text, max);

  return result;
};

function splitTextRecursive(text: string, max: number): string {
  if (text.length <= max) return text; // Base case

  const chunk = text.substring(0, max);
  const remainingText = text.substring(max);

  return `${chunk}\n${splitTextRecursive(remainingText, max)}`;
}
