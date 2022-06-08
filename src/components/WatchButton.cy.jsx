import WatchButton from './WatchButton.vue'

describe('<WatchButton />', () => {
  beforeEach(() => {
   
  })

  //it.only('mounts', () => {})

  it('initial state Watch', () => {
    cy.mount(
        <WatchButton
          class="m-2"
        />,
      )  
    cy.get('button').should('have.text', 'Watch')
  })

  it('clicked changes state', () => {
      cy.mount(<WatchButton/>)
      .get('button')
      .should('have.text', 'Watch')
      .click()
      .should('have.text', 'Watched')
  })



})
