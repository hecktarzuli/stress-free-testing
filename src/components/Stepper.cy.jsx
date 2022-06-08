import Stepper from './Stepper.vue'

const textSelector = '[data-testid=counter]'
const incrementSelector = '[data-testid=increment]'
const decrementSelector = '[data-testid=decrement]'

describe('<Stepper />', () => {
  it('renders', () => {
    cy.mount(Stepper)
      .get(decrementSelector)
      .click()
      .get(textSelector)
      .should('contain.text', '0')
   // cy.get(textSelector).should('contain.text', '0')
   // cy.get(incrementSelector).click()
   // cy.get(textSelector).should('contain.text', '1')
   // cy.get(decrementSelector).click().click()
  //  cy.get(textSelector).should('contain.text', '-1')
  })

  it('min prop works', () => {
    cy.mount(Stepper, {
      props:{
        min: 2,
      }
    })
    .get(textSelector)
  })

  it('max value has default 3', () => {
    cy.mount(Stepper)
    .get(incrementSelector)
    .click()
    .click()
    .click()
    .click()
    .get(textSelector)
    .should('contain.text', '3')
  })

    it.only('emits stuff', () => {
      const onChangeSpy = cy.spy().as('onChange')
    
      cy.mount(Stepper, {
        props: {
          onChange: onChangeSpy
        }
    })
      .get(incrementSelector)
      .click()
      .click()
      .get('@onChange')
      .should('have.been.calledWith', 2)
    })
})

//