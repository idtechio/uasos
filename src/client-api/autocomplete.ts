type Response = {
  predictions: { structured_formatting: { main_text: string } }[];
};

export const fetchAutocomplete = async (query: string) => {
  const res = await fetch(
    `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&key=${process.env.GOOGLE_API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Couldn't fetch autocomplete data, try again later.");
  }

  const body: Response = await res.json();

  return body;
};
