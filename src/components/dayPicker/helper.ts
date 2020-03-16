
export const getDateCharLang = () => {
  const MONTHS = [
    `1`,
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    `7`,
    `8`,
    `9`,
    `10`,
    `11`,
    `12`
  ];
  const WEEKDAYS_LONG = [
    "sun",
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat"
  ];
  const WEEKDAYS_SHORT = [
    "sun",
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat"
  ];
  return { WEEKDAYS_SHORT, WEEKDAYS_LONG, MONTHS };
};
