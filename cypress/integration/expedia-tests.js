import { HomePage } from "../page-objects/homePage";

describe("Expedia Tests", () => {
    before(function() {
        cy.intercept("GET", "https://www.expedia.com/ ").as("homepage");
        cy.visit("https://www.expedia.com/", { failOnStatusCode: false });
        cy.wait("Homepage");
    });

    //   Attempt 1 to clear recaptcha, however should never be done on production
    //   it("Should clear human verification box" , () => {
    //   cy.get(".captcha-main")
    //   .should("have.attr", "href")
    //    .and("include", "challenge")
    //    .then((href) => {
    //    cy.clear();
    //    });
    //  });
    // 
    // Attempt 2 to clear recaptcha, however should never be done on production
    //   it('should clear human verifcation box', () => {
    //   cy.get{'#arkose-challenege > divinth-Child(1) > iframe'}.clear();
    //   })

    it("Should display travel filter panel", () => {
        HomePage.travelFilter().should("be.visible").should("not.be.empty");
    });

    it("Should display navigation header with content", () => {
        HomePage.navigationHeader().should("be.visible").should("not.be.empty");
    });

    it("Should have Expedia logo within header", () => {
        HomePage.headerLogo().eq(1).should("be.visible");
    });

    it("Should have More travel button and display dropdown menu when selected", () => {
        HomePage.moreTravelButton().eq(1).should("be.visible").click();
        HomePage.moreTravelMenu().should("be.visible").should("not.be.empty");
    });

    it("Should select item from More Travel menu", () => {
        HomePage.menuItem().eq(2);
        cy.location("href").should("include", "/Hotels").click();
        cy.url().should("include", "/Hotels");
    });

    it("Should display language options when button is selected", () => {
        HomePage.languageButton().should("be.visible").click();
        HomePage.languageSettingPanel().should("be.visible");
    });

    it("Should be able to select Support button", () => {
        HomePage.supportButton().should("be.visible").click();
        cy.url().should("include", "/service");
    });

    it("Should be able to select Sign In button", () => {
        HomePage.signInButton().should("be.visible").click();
        HomePage.signInPanel().should("be.visible");
        HomePage.signInPanelButton().should("be.visible").click();
        cy.url().should("include", "/user/signin");
    });

    it("Should be able to create an account", () => {
        HomePage.signInButton().click();
        HomePage.createAccountButton().should("be.visible").click();
        cy.url().should("include", "/user/createaccount");
    });

    it("Should be able to search", () => {
        cy.get("location-field-destination-dialog-trigger").click();
        cy.get("#app-layer-home-typeahead > div.uitk-dialog").type("Venice");
        cy.get("hotels-destination-result-item-button").should("be.visible");
        cy.get("uitk-card-aloha-link").click();
    });

    it("Should be able to select track your refund", () => {
        cy.get("uitk-card-aloha-link").click();
    });

    it("should be able to sign in", () => {
        cy.get("#app-layer-base > div.uitk-grid").click();
    });

    it("should be able to select region and change language", () => {
        cy.get("uitk-skip-link uitk-skip-link-is-visually-hidden").click();
    });

    it("Should be able to input flight destinations", () => {
        cy.get("uitk-tab-anchor").eq(2).click();
        cy.get("location-field-leg1-origin-dialog-trigger").click();
        cy.get("location-field-leg1-origin-dialog-input").type("Gatwick")
        cy.get("location-field-leg1-origin-results-item").eq(0).click();
        cy.get("location-field-leg1-destination-dialog-trigger").click();
        cy.get("location-field-leg1-origin-dialog-input").type("Seville")
        cy.get("location-field-leg1-destination-results").eq(0).click();
    });

    it("should be able to input flight dates", () => {
        cy.get("open-date-picker").eq(0).click();
        cy.get("uitk-date-picker-day uitk").eq(19).click();
        cy.get("apply-date-picker").click();
        cy.get("open-date-picker").eq(1).click();
        cy.get("uitk-date-picker-day uitk").eq(29).click();
        cy.get("apply-date-picker").click();
    });

    it("should be able to search", () => {
        cy.get("submit-button").click();
        cy.url().should("include", "/Flights-Search");
    });
});