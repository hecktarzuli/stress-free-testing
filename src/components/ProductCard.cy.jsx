import ProductCard from './ProductCard.vue'

// A Vite-specific parameter to resolve the url of your image.
import TypewriterUrl from '../assets/typewriter.jpg?url'

const img = {
  alt: 'A vintage typewriter on a white background.',
  src: TypewriterUrl,
}

const description = `Vintage Typewriter to post awesome stories about UI design and webdev.`
const price = '$49.50'
const additional = 'Eligible for Shipping To Mars or somewhere else.'
const rating = 4.67

describe('<ProductCard />', () => {
  beforeEach(() => {
    cy.mount(
      <ProductCard
        class="m-2"
        img={img}
        description={description}
        price={price}
        additional={additional}
        rating={rating}
      />,
    )
  })

  it.only('mounts', () => {})

 // cy.viewPort(200,200) to test a different device size

  it.only('renders the price', () => {
    cy.findByText(price).should('be.visible') // findByText uses Testing Library plugin
  })

  it.only('renders the image', () => {
    //cy.mount().get('img').should('exist')
  })

  it('renders the rating', () => {})
  it('has a watch button', () => {})
  it('the product watch buton is not selected by default', () => {})
  
  it.skip('renders a description', () => {
    // You can either try out Testing Library (I suggest cy.findByText)
    // Or, you can add data-testid selectors inside of the ProductCard.
  })

  it.skip('...', () => {
    // What other features does this ProductCard have?
  })

})
