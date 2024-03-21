
import {  styled } from '@pigment-css/react';
import { headers } from "next/headers";

const MainWrapper = styled('main')({
  background: "url('/pattern-bg-mobile.png') no-repeat",
  height: "100%",
  "@media (min-width: 375px)": {
    background: "url('/pattern-bg-desktop.png') no-repeat",
  },
});

export default function Home() {
  const ip = headers().get("x-forwarded-for") || "not found";
  return (
    <MainWrapper>
     <p>{ip}</p>
    </MainWrapper>
  );
}
