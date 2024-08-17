export const environmentBool = (key: string) => {
  return ["true", "1", "yes"].includes(import.meta.env[key]);
};
