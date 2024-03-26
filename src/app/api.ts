export const ipQuery = async ({
  ipAddress,
}: {
  ipAddress: string;
}): Promise<IPData> => {
  const response = await fetch(`/api?ipAddress=${ipAddress}`);

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
