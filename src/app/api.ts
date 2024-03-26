export const ipQuery = async ({
  ipAddress,
}: {
  ipAddress: string;
}): Promise<IPData> => {
  const response = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=at_3nA087vzqULdT8EgTufcItAjtiCJd&ipAddress=${ipAddress}`
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

export type IPData = {
  ip: string;
  isp: string;
  location: {
    country: string;
    region: string;
    city: string;
    lat: number;
    lng: number;
    timezone: string;
    geonameId: string;
  };
};
