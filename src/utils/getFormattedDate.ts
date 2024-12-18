const getFormattedDate = (date: Date) => {
  const formatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  });
  return formatter.format(date); // output => Dec 5
};

export default getFormattedDate;
