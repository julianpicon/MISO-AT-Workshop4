var MAX_EVENTS = 10;

var events = [
    randomClickLink, 
    randomClickButton, 
    randomTypeText, 
    randomSelect
];

describe('Los estudiantes under crazy a monkeys aaa:D', function() {
    it('visits los estudiantes and execute: clicks or select combobox', function() {
        cy.visit('https://losestudiantes.co');
        cy.contains('Cerrar').click();
        cy.wait(1000);
        randomEvent(MAX_EVENTS);
    })
});

function randomEvent(maxEvents){
  if(maxEvents>0){
       events[getRandomInt(0, events.length)]();
       var nextTotalEvents = maxEvents-1;
       cy.wait(1000);
       randomEvent(nextTotalEvents); //Llamado recursivo hasta que no hayan mas eventos.
  }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

function randomClickLink() {
    console.log('Random Link');
    cy.get('a').then($links => {
        var randomLink = $links.get(getRandomInt(0, $links.length));
        if(!Cypress.dom.isHidden(randomLink)) {
            cy.wrap(randomLink).click({force: true});
        }
    });
}

function randomClickButton() {
    console.log('Random Button');
    cy.get('button').then($buttons => {
        var randomButton = $buttons.get(getRandomInt(0, $buttons.length));
        if(!Cypress.dom.isHidden(randomButton)) {
            cy.wrap(randomButton).click({force: true});
        }
    });
}

function randomTypeText() {
    console.log('Random Input text');
    cy.get('input').then($inputs => {
        var randomInput = $inputs.get(getRandomInt(0, $inputs.length));
        if(!Cypress.dom.isHidden(randomInput)) {
            cy.wrap(randomInput).click({force: true}).type("test random typing");
        }
    });
}

function randomSelect() {
    console.log('Random Select');
    cy.get('select').then($selects => {
        var selectRandom = $selects.get(getRandomInt(0, $selects.length));
        if(!Cypress.dom.isHidden(selectRandom)) {
            var optionRandom = selectRandom.options[getRandomInt(0,selectRandom.options.length)].value;
            cy.wrap(selectRandom).select(optionRandom, {force: true});
        }
    });
}

