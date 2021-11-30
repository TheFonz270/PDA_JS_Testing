describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update running total via the number buttons', () => {
    cy.get('#number1').click();
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('.display').should('contain', '123')
  })

  it('should update display with the result of arithmetical operations', () => {
    cy.get('#number1').click();
    cy.get('#operator_add').click();
    cy.get('#number6').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '7')
  })

  it('should be able to chain together multiple operations', () => {
    cy.get('#number1').click();
    cy.get('#operator_add').click();
    cy.get('#number6').click();
    cy.get('#operator-multiply').click();
    cy.get('#number7').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '49')
  })

  it('should be able to handle negative numbers (first input)', () => {
    cy.get('#operator-subtract')
    cy.get('#number5').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-2')
  })

  it('should be able to handle negative numbers (in result of calculation)', () => {
    cy.get('#number3').click();
    cy.get('#operator-subtract').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-2')
  })

  it('should be able to handle decimal numbers (first input without zero)', () => {
    cy.get('#decimal').click();
    cy.get('#number5').click();
    cy.get('.display').should('contain', '0.5')
  })

  it('should be able to handle decimal numbers (first input with zero)', () => {
    cy.get('#number0').click();
    cy.get('#decimal').click();
    cy.get('#number5').click();
    cy.get('.display').should('contain', '0.5')
  })

  it('should be able to handle decimal numbers (logic)', () => {
    cy.get('#number0').click();
    cy.get('#decimal').click();
    cy.get('#number5').click();
    cy.get('#operator_add').click();
    cy.get('#number4').click();
    cy.get('#decimal').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '4.8')
  })

  it('should be able to handle decimal numbers (multiple zeros)', () => {
    cy.get('#number0').click();
    cy.get('#decimal').click();
    cy.get('#number0').click();
    cy.get('#number5').click();
    cy.get('.display').should('contain', '0.05')
  })

  it('should be able to handle very large numbers', () => {
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-multiply').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-multiply').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '1e+30')
  })

  it('should be able to handle positive numbers', () => {
    cy.get('#number1').click();
    cy.get('#operator_add').click();
    cy.get('#number6').click();
    cy.get('#operator-multiply').click();
    cy.get('#number7').click();
    cy.get('#operator-subtract').click();
    cy.get('#number9').click();
    cy.get('#operator-divide').click();
    cy.get('#number8').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '5')
  })

  it('should be able to handle exceptional circumstances (Shows error for divide by zero)', () => {
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();   
    cy.get('.display').should('contain', 'Error')
  })

})


// 1. Do the number buttons update the display of the running total?
// 2. Do the arithmetical operations update the display with the result of the operation?
// 3. Can multiple operations be chained together?
// 4. Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?
// 5. What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a test to describe what you'd prefer to happen, 
//    and then correct the code to make that test pass (you will need to modify the Calculator model to meet this requirement).