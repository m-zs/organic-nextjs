export const getPathValue = <T extends object>({
  key,
  defaultValue,
  object,
}: {
  key: string;
  defaultValue?: string;
  object: T;
}): string => {
  const result: string | undefined = key
    .split(".")
    .reduce((a, c) => a?.[c], object as any);

  return result || defaultValue || key;
};
