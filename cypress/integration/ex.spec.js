describe('My First Test',function(){
	it('Does not do much', function(){
		expect(true).to.equal(true)
	})
})	
describe('outline',function(){
	it('outline', function(){
		cy.viewport(1440,800)
		
		cy.visit('http://localhost/a/Index.html');
		cy.get('body').click(460,310);
		//cy.contains('Color the shapes')
		//cy.wait(1000);
		
	})
})
/*describe('My First Test', function() {
  it('finds the content "game"', function() {
    cy.visit('http://localhost/a/Index.html') 
    cy.contains('startGame') // kiểm tra xem trên trang có từ `hype` nào không
  })
})*/