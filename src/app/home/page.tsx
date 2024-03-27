import { headers } from "next/headers";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { ipQuery } from "../api";
import IPTracker from "@/components/IPTracker";

export default async function Home() {
  let ip = headers()
    .get("x-forwarded-for")
    ?.replace(/[^0-9.]/g, "");
  if (!ip || ip === "1" || ip === "127.0.0.1") {
    ip = "8.8.8.8";
  }

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [`ipquery${ip}`],
    queryFn: () => ipQuery({ ipAddress: ip! }),
  });

  return (
    <main>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <IPTracker initialIpAddress={ip} />
      </HydrationBoundary>
    </main>
  );
}
