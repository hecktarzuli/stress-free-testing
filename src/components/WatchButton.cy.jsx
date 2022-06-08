import WatchButton from './WatchButton.vue'

describe('<WatchButton />', () => {
  beforeEach(() => {
   
  })

  //it.only('mounts', () => {})

  it.only('renders the text', () => {
    cy.mount(
        <WatchButton
          class="m-2"
        />,
      )  
    cy.get('button').should('have.text', 'Watch')
  })

  it.only('has a sku', () => {
      cy.mount(WatchButton, {
          props: {
            sku: '123',
          }
          
    })
      cy.get('button[data-sku="123"]')
      .invoke('attr', 'data-sku')
      .should('equal', '123')
  })

  it.only('emits when clicked', () => {
      cy.mount(WatchButton, {
          
      }
  })


})
