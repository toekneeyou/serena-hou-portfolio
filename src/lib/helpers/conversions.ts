export const minutesToMs = (minutes: number) => {
  return minutes * 60 * 1000;
};

export const pxToRem = (px: number) => `${px / 16}rem`;
