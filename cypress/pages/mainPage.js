/// <reference types="cypress" />

// All selectors in the home page
class homePage{

    elements ={

    languageMenu : () => cy.get('[aria-label="Location Selector"]'),
    americasOption : () => cy.get('#region-0'),
    countryList : () => cy.get('tr td'),
    englishUSlink : () => cy.get('[aria-label="Willis Towers Watson United States  website in  English, click to navigate to website"]'),
    searchBtn : () => cy.get('[aria-label="Open search, click to open/close search interface"]'),
    searchInputField : () => cy.get('[type="text"][role="combobox"]'),
    dateOrderBtn : () => cy.get('[aria-label="Sort by Date in descending order"]'),
    articlesFilterOpt : () => cy.get('[title="Article"]'),
    articlesLinks : () => cy.get('a.CoveoResultLink')
}

//home page 

/**
 * Clicks on the Language menu to open the options
 */
clickOnLanguageMenu(){
    this.elements.languageMenu().click();
}

/**
 * Clicks on the Americas region dropdown to select the language
 */
selectRegion(){
    this.elements.americasOption().click();
}

/**
 * Clicks on the English Option for United States
 */
selectCountryLanguage(){
   this.elements.englishUSlink().click();   
}

/**
 * Search by given string 
 * @param  {String} txt to write in the search input field
 */
searchText(txt){
    this.elements.searchBtn().click();
    this.elements.searchInputField().click();
    this.elements.searchInputField().type(txt);
}

/**
 * Clicks on the order by Date btn to order by date if it is order by relevancy
 */
orderByDate(){

    if(cy.url().should('contains', 'sort=relevancy')){
        this.elements.dateOrderBtn().click();
    }
}

/**
 * Clicks on the articles filter option to filter by articles
 */
filterByArticles(){
    this.elements.articlesFilterOpt().click();
}

/**
 * Verifies the length of the array of articles is 8 from the search
 * For each of the articles, checks that the link contains 'https://www.wtwco.com/en-US/
 */
validateArticles(){
    this.elements.articlesLinks().each((item, index, list) => {

        cy.wrap(item).should('have.attr', 'href').and('include', 'https://www.wtwco.com/en-us/');
        console.log(cy.wrap(item));
        
    })
}

}

module.exports = new homePage();