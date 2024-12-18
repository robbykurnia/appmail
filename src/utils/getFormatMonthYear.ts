const getFormatMonthYear = (monthIndex: number, year: number) => {
  const date = new Date(year, monthIndex);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  }).format(date);
};

export default getFormatMonthYear;
