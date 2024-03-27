import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchForm from "./SearchForm";

describe("SearchForm", () => {
  const mockHandleInputChange = jest.fn();
  const mockHandleSearchClick = jest.fn();

  beforeEach(() => {});

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the form with the provided IP address", () => {
    const ipAddress = "192.168.1.1";
    const { getByLabelText, getByPlaceholderText } = render(
      <SearchForm
        ipAddress={ipAddress}
        handleInputChange={mockHandleInputChange}
        handleSearchClick={mockHandleSearchClick}
      />
    );

    const ipInput = getByPlaceholderText("Search for any IP address or domain");
    expect(ipInput).toHaveValue(ipAddress);

    const label = getByLabelText("IP Address Tracker");
    expect(label).toBeInTheDocument();
  });

  it("calls handleInputChange when the input value changes", () => {
    const { getByPlaceholderText } = render(
      <SearchForm
        ipAddress=""
        handleInputChange={mockHandleInputChange}
        handleSearchClick={mockHandleSearchClick}
      />
    );

    const ipInput = getByPlaceholderText("Search for any IP address or domain");
    fireEvent.change(ipInput, { target: { value: "8.8.8.8" } });

    expect(mockHandleInputChange).toHaveBeenCalledWith(expect.any(Object));
    expect(mockHandleInputChange).toHaveBeenCalledTimes(1);
  });

  it("calls handleSearchClick when the form is submitted", () => {
    const { getByRole } = render(
      <SearchForm
        ipAddress="192.161.23.45"
        handleInputChange={mockHandleInputChange}
        handleSearchClick={mockHandleSearchClick}
      />
    );

    const submitButton = getByRole("button", { name: "search" });
    fireEvent.submit(submitButton);

    expect(mockHandleSearchClick).toHaveBeenCalled();
    expect(mockHandleSearchClick).toHaveBeenCalledTimes(1);
  });
});
