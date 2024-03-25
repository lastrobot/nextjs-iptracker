import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("./IPMapper"), {
  ssr: false,
  loading: () => <p>loading..</p>,
});

export default function LazyIPMapper(props: {
  coords: { lat: number; lng: number };
}) {
  return <MapComponent {...props} />;
}
