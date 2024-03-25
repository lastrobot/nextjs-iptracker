"use client";
import * as React from "react";
import { styled } from "@pigment-css/react";
import { useQuery } from "@tanstack/react-query";
import { IPData, ipQuery } from "@/app/api";
import SearchForm from "../SearchForm";
import LazyIPMapper from "../IPMapper/LazyIPMapper";

function IPTracker({ initialIpAddress }: { initialIpAddress: string }) {
  const [ipAddress, setIpAddress] = React.useState(initialIpAddress);
  const [ipQueryField, setIpQueryField] = React.useState(initialIpAddress);

  function handleSearchClick() {
    setIpAddress(ipQueryField);
  }

  function handleInputChange(evt: React.ChangeEvent<HTMLInputElement>) {
    setIpQueryField(evt?.target.value);
  }

  const { data }: { data?: IPData } = useQuery({
    queryKey: [`ipquery${ipAddress}`],
    queryFn: () => ipQuery({ ipAddress }),
  });

  const { lat, lng } = data?.location || { lat: 51.505, lng: -0.09 };

  return (
    <>
      <Header>
        <SearchForm
          handleSearchClick={handleSearchClick}
          handleInputChange={handleInputChange}
          ipAddress={ipQueryField}
        />
      </Header>

      <LazyIPMapper coords={{ lat, lng }} />
    </>
  );
}

const Header = styled("header")({
  background: "url('/pattern-bg-mobile.png') no-repeat",
  backgroundSize: "cover",
  padding: "32px",
  height: "300px",
  "@media (min-width: 376px)": {
    background: "url('/pattern-bg-desktop.png') no-repeat",
    backgroundSize: "cover",
  },
});

export default IPTracker;
