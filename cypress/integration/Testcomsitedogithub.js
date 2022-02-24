// Testcomsitedogithub.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

context("Teste de clicks", ()=>{
	beforeEach( ()=>{
		cy.wait(600)
		cy.visit("https://danbenites.github.io/")
	})


	var passo;
	for (passo = 0; passo < 20; passo++) {
		it("Aleatorio",()=>{
		cy.get("#"+ Math.ceil(Math.random() * (14 - 1) + 1)).click({ force: true })
	})
	}	
})

context("Teste de clicks na Pag GA", ()=>{
	beforeEach( ()=>{
		cy.wait(600)
		cy.visit("https://danbenites.github.io/ga.html")
	})


	var passo;
	for (passo = 0; passo < 20; passo++) {
		it("Aleatorio",()=>{
		cy.get("#"+ Math.ceil(Math.random() * (14 - 1) + 1)).click({ force: true })
	})
	}	
})