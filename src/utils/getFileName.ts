const MAX_NUM_OF_CHARS = 26;

export const getFileName = (data: null | FileList) => {
  if (!data?.length) return;

  const name = data[0].name;

  if (name.length <= MAX_NUM_OF_CHARS) return name;

  const start = name.slice(0, MAX_NUM_OF_CHARS / 2);
  const end = name.slice(name.length - MAX_NUM_OF_CHARS / 2);

  return `${start}...${end}`;
};
