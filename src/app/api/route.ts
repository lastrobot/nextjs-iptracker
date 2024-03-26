export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const ipAddress = searchParams.get("ipAddress");

  const response = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.IPI_API_KEY}&ipAddress=${ipAddress}`
  );

  const data = await response.json();

  return Response.json({ ...data });
}
