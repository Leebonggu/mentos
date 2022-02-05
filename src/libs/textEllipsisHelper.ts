export const generateEllipsis = (str: string, length: number) => {
  return str.length > length ? `${str.substring(0, length)}...` : str;
};
