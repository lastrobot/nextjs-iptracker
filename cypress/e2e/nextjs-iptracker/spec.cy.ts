describe("template spec", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("");
  });

  it("uses default IP to get location data", () => {
    cy.get("[data-test=info-location]").should("have.text", "Glenmont");
    cy.get("[data-test=info-ip]").should("have.text", "8.8.8.8");
    cy.get("[data-test=info-isp]").should("have.text", "Google LLC");
    cy.get("[data-test=info-timezone]").should("have.text", "UTC -04:00");
  });

  it("triggers new search when ip typed and search button clicked", () => {
    const newIpAddress = "114.56.77.89";
    cy.get("[data-test=input-ipaddress]").clear();
    cy.get("[data-test=input-ipaddress]").type(`${newIpAddress}`);
    cy.get("[data-test=btn-search]").click();

    cy.get("[data-test=info-location]").should("have.text", "Oak Hill");
    cy.get("[data-test=info-ip]").should("have.text", "114.56.77.89");
    cy.get("[data-test=info-isp]").should("have.text", "Amazon.com, Inc.");
    cy.get("[data-test=info-timezone]").should("have.text", "UTC -04:00");
  });

  it("triggers new search when ip typed and search button clicked", () => {
    const newIpAddress = "77.156.123.120";
    cy.get("[data-test=input-ipaddress]").clear();
    cy.get("[data-test=input-ipaddress]").type(`${newIpAddress}{enter}`);

    cy.get("[data-test=info-location]").should("have.text", "Amiens");
    cy.get("[data-test=info-ip]").should("have.text", "77.156.123.120");
    cy.get("[data-test=info-isp]").should(
      "have.text",
      "Societe Francaise Du Radiotelephone - SFR SA"
    );
    cy.get("[data-test=info-timezone]").should("have.text", "UTC +01:00");
  });

  it("triggers validation message if new IP address is invalid", () => {
    const newIpAddress = "1277.156.123.120";
    cy.get("[data-test=input-ipaddress]").clear();
    cy.get("[data-test=input-ipaddress]").type(`${newIpAddress}{enter}`);

    cy.get("input:invalid").should("have.length", 1);
    // cy.get("#IpInput").should(
    //   "have.validationMessage",
    //   "Please match the format requested."
    // );
    cy.get("#IpInput")
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
  });
});
