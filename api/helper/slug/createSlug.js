// convert a string to slug

export const createSlug = (string) => {
  const slug = string.toLowerCase().replace(/[^\w]/g, "-");

  return slug;
};
