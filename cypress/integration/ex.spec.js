describe('outline',function(){
	before(() => {
		cy.viewport(1440,800)
		cy.visit('https://bingo213.github.io/Phaser---CNPM/');
		cy.wait(1000);
	})
	it('Visit Game1', function(){
		cy.get('body').click(460, 310);
		cy.wait(2000);

		//click BACK button
		cy.get('body').click(170, 70);
		cy.wait(2000);
	})
	it('Visit Game2', function(){
		cy.get('body').click(740, 310);
		cy.wait(2000);

		//click BACK button
		cy.get('body').click(170, 70);
		cy.wait(2000);
	})
	it('Visit Game3', function(){
		cy.get('body').click(1020, 310);
		cy.wait(2000);

		//click BACK button
		cy.get('body').click(170, 70);
		cy.wait(2000);
	})
	it('Visit Game4', function(){
		cy.get('body').click(1300, 310);
		cy.wait(2000);

		//click BACK button
		cy.get('body').click(170, 70);
		cy.wait(2000);
	})
	it('Visit Game5', function(){
		cy.get('body').click(460, 570);
		cy.wait(2000);

		//click BACK button
		cy.get('body').click(170, 70);
		cy.wait(2000);
	})
})
