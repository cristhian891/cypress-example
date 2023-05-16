/// <reference types="cypress" />

import homePage from "../pages/mainPage";

describe('WTW - Question 2', () => {

    //Method that it is executed before each test
    beforeEach(() =>{

        // Object that contains the data to be preloaded in the local storage to accept cookies
        const todos = {
            name: 'truste.eu.cookie.notice_gdpr_prefs',
            value : '0,1,2:',
            path : '/',
            expires : 1717996133099
            }
        
        const cook = {

            SC_ANALYTICS_GLOBAL_COOKIE: '00d3ab9e565940fdb67f35a799205229|True',

        }
        
        // Setting all the content to local storage to accept all GDPR preferences 
        localStorage.setItem('truste.eu.cookie.notice_gdpr_prefs', JSON.stringify(todos));
        cy.setCookie('OptanonAlertBoxClosed', '2023-10-16T11:28:49.180Z');
        cy.visit("https://www.wtwco.com/ICT");
    })

    
    it("TEST01 - Search for Articles in US-English", () =>{

        homePage.clickOnLanguageMenu();
        homePage.selectRegion();
        homePage.selectCountryLanguage();
        homePage.searchText('IFRS 17{enter}');

        cy.url().should('contain', 'search#q=IFRS' );

        // If the page is sorted by relevancy it clicks on the orderByDate option to 
        // sort it by date  
        homePage.orderByDate();

        // Verifies that the display content is order by date
        cy.url().should('contain', 'displayz45xdate%20descending')

        homePage.filterByArticles();

        // Checks for all articles in the search to contain the 'https://www.wtwco.com/en-US/'
        homePage.validateArticles();
    })
})
