import * as React from "react";
import { styled } from "@pigment-css/react";
import { IPData } from "@/app/api";

const BoxWrapper = styled("div")`
  position: absolute;
  margin: 0 auto;
  right: 32px;
  left: 32px;
  top: 150px;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 0px 50px 50px -25px rgba(0, 0, 0, 0.1);
  z-index: 100;

  @media (min-width: 768px) {
    max-width: 1110px;
    height: 161px;
    top: 215px;
  }
`;
const List = styled("ul")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 0px 50px 50px -25px rgba(0, 0, 0, 0.1);
  list-style-type: none;
  padding: 16px;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7px;
  }

  h2 {
    color: #2c2c2c;
    font-size: 0.65rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.458px;
    text-transform: uppercase;
    opacity: 0.4987;
  }

  p {
    color: #2c2c2c;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    letter-spacing: -0.179px;
    text-align: center;
  }

  @media (min-width: 992px) {
    height: 100%;
    flex-direction: row;
    justify-content: space-evenly;

    h2 {
      font-size: 0.75rem;
    }

    p {
      font-size: 1.6rem;
    }

    li {
      position: relative;
      max-width: 270px;
      gap: 13px;

      &::after {
        position: absolute;
        top: 5px;
        top: -9px;
        right: -45px;
        content: "";
        width: 1px;
        height: 75px;
        opacity: 0.15;
        background: #000;
      }

      &:last-child {
        &::after {
          display: none;
        }
      }
    }
  }
`;

function InfoBox({ data }: { data: IPData | undefined }) {
  if (!data) return null;

  return (
    <BoxWrapper>
      <List>
        <li>
          <h2>IP Address</h2>
          <p>{data.ip}</p>
        </li>
        <li>
          <h2>Location</h2>
          <p>{data.location.city}</p>
        </li>
        <li>
          <h2>Timezone</h2>
          <p>{`UTC ${data.location.timezone}`}</p>
        </li>
        <li>
          <h2>ISP</h2>
          <p>{data.isp}</p>
        </li>
      </List>
    </BoxWrapper>
  );
}

export default InfoBox;
