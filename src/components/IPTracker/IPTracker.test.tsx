import React from "react";
import { render, fireEvent, waitFor, findByText } from "@testing-library/react";
import { useQuery } from "@tanstack/react-query"; // Mock this if necessary
import IPTracker from "./IPTracker";

jest.mock("@tanstack/react-query", () => ({
  useQuery: jest.fn(),
}));

describe("IPTracker", () => {
  const mockData = {
    location: {
      lat: 40.7128,
      lng: -74.006,
      city: "London",
      timezone: "-05:00",
    },
    ip: "192.168.1.1",
    isp: "Google inc",

    // Add other necessary properties for your IPData type
  };

  beforeEach(() => {
    (useQuery as jest.Mock).mockReturnValue({ data: mockData });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders IPTracker component with initial IP address", async () => {
    const initialIpAddress = "192.168.1.1";
    const { getByText, findByText } = render(
      <IPTracker initialIpAddress={initialIpAddress} />
    );
    expect(await findByText(`${initialIpAddress}`)).toBeInTheDocument();

    expect(await findByText("London")).toBeInTheDocument();

    expect(await findByText("Google inc")).toBeInTheDocument();

    expect(await findByText("UTC -05:00")).toBeInTheDocument();
  });

  it("updates IP address on search click", async () => {
    const { getByPlaceholderText, getByText } = render(
      <IPTracker initialIpAddress="" />
    );
    const searchInput = getByPlaceholderText(
      "Search for any IP address or domain"
    );
    const searchButton = getByText("search");

    fireEvent.change(searchInput, { target: { value: "8.8.8.8" } });
    fireEvent.click(searchButton);

    await waitFor(() => {
      expect(useQuery).toHaveBeenCalledWith({
        queryKey: ["ipquery8.8.8.8"],
        queryFn: expect.any(Function),
      });
    });
  });
});
