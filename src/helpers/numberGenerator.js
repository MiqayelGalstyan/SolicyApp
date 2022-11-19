export const generateUniqueNumber = (num) => {
  const min = 1;
  const max = 1000;
  return (
    Math.floor(Math.random() * max - min + Math.floor(Math.random())) -
    Math.floor(Math.random() * (max - min + 1)) +
    num
  );
};
