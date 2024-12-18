const getFormattedDate = (date: Date) => {
  const formatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  });
  return formatter.format(date); // Format seperti Dec 5
};

export default getFormattedDate;
