export function validateAge(birthdate: Date): boolean {
  const currentDate = new Date();
  const userBirthdate = new Date(birthdate);

  const ageDiff = currentDate.getFullYear() - userBirthdate.getFullYear();

  return ageDiff > 18
}
