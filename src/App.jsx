import { useState } from 'react'
import { products as productsObject } from './data/products'
import ImgNotSelected from './components/imgNotSelected'
import ImgContainer from './components/ImgContainer'

function App() {
  const [products, setProducts] = useState(productsObject)
  const [activeProduct, setActiveProduct] = useState(
    products.find((item) => item.isActive)
  )
  function handleProductSelect(id) {
    const selectedProduct = productsObject.find((item) => item.id == id )
    selectedProduct.isActive = true
    setActiveProduct(selectedProduct)
    const notSelectedProducts = productsObject.filter(
      (item) => item.id !== id
    ).map((item) => {
      return {
        ...item,
        isActive: false
      }
    })
    
   

  }

 
  return (
    <>
      <main className='container'>
        {
          activeProduct ? <><img src={activeProduct.thumbnail} alt={activeProduct.name} /></> : <ImgNotSelected />
        }
        <ImgContainer products={products} handleProductSelect={handleProductSelect} />
      </main>
    </>
  )
}

export default App
