import * as React from "react";
import { styled } from "@pigment-css/react";

const Form = styled("form")`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  @media (min-width: 768px) {
    gap: 32px;
  }
`;

const InputContainer = styled("div")`
  display: flex;
  width: 100%;
  height: 58px;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0px 50px 50px -25px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  padding: 18px 0 18px 24px;

  button,
  input {
    border: none;
    background-color: inherit;
  }

  button {
    margin-left: auto;
    margin-top: -18px;
    border-radius: 15px;
    :hover {
      cursor: pointer;
      * {
        fill: #3f3f3f;
      }
    }
  }

  input {
    width: 100%;
    color: #2c2c2c;
    font-size: 1.1rem;
    line-height: normal;
    outline: none;
  }

  @media (min-width: 768px) {
    width: 555px;
  }
`;

const VisuallyHiddenSpan = styled("span")`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1;
  overflow: hidden;
  padding: 0;
  position: absolute;
  whitespace: nowrap;
  width: 1px;
`;

function SearchForm({
  ipAddress,
  handleInputChange,
  handleSearchClick,
}: {
  ipAddress: string;
  handleInputChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchClick: () => void;
}) {
  return (
    <Form
      onSubmit={(evt) => {
        evt.preventDefault();
        handleSearchClick();
      }}
    >
      <h1>
        <label htmlFor="IpInput">IP Address Tracker</label>
      </h1>
      <InputContainer>
        <input
          id="IpInput"
          onChange={handleInputChange}
          value={ipAddress}
          placeholder="Search for any IP address or domain"
          pattern="(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)_*(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)_*){3}"
        />
        <button type="submit">
          <VisuallyHiddenSpan>search</VisuallyHiddenSpan>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="58"
            height="58"
            viewBox="0 0 58 58"
            fill="none"
          >
            <path
              d="M0 0H43C51.2843 0 58 6.71573 58 15V43C58 51.2843 51.2843 58 43 58H0V0Z"
              fill="black"
            />
            <path d="M26 23L32 29L26 35" stroke="white" strokeWidth="3" />
          </svg>
        </button>
      </InputContainer>
    </Form>
  );
}

export default SearchForm;
