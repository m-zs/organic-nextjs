export const buildBaseUrl = (url: string): string =>
  `${process.env.API_URL}/${url}`;

export const fetchFromCMS = async <T>(url: string): Promise<T> => {
  console.log(buildBaseUrl(url));

  const res = await fetch(buildBaseUrl(url), {
    headers: { Authorization: `Bearer ${process.env.API_TOKEN}` },
  });
  const data = await res.json();

  return data;
};
