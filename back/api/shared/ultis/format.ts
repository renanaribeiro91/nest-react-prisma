export const formatString = (item: number | string): number => {
  const formattedItem = String(item).replace(/-/g, '');
  return Number(formattedItem);
};

export const formatBirthdate = (birthdate:Date) => {
  const date = new Date(birthdate);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return new Date(year, month - 1, day);
};
