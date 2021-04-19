const isEmpty = value => {
  return (
    value === "" ||
    value === null ||
    value === undefined ||
    (value !== null && typeof value === "object" && !Object.keys(value).length)
  );
};

export default isEmpty;
