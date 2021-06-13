class HomePage {
    static pageContent() {
        return cy.get("app-layer-base");
    }

    static travelFilter() {
        return cy.get("div.uitk-tabs-container");
    }

    static navigationHeader() {
        return cy.get(".header-region.no-stripe");
    }

    static headerLogo() {
        return cy.get(".header-logo");
    }

    static moreTravelButton() {
        return cy.get('.global-navigation-nav-button');
    }

    static moreTravelMenu() {
        return cy.get('#gc-custom-header-tool-bar-shop-menu > div');
    }

    static menuItem() {
        return cy.get('.uitk-list-item');
    }

    static languageButton() {
        return cy.get('#secondaryNav > button');
    }

    static languageSettingPanel() {
        return cy.get('.uitk-dialog-content-wrapper');
    }

    static supportButton() {
        return cy.get('support-cs-button');
    }

    static signInButton() {
        return cy.get('gc-custom-header-nav-bar-acct-menu');
    }

    static signInPanel() {
        return cy.get('uitk-menu-container uitk-menu-open');
    }

    static signInPanelButton() {
        return cy.get('link-header-account-signin');
    }

    static createAccountButton() {
        return cy.get('link-header-account-signup');
    }
}

export { HomePage };