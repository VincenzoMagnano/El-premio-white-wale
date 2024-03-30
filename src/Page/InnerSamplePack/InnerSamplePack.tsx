import React from 'react'
import { useProducts } from '../../Components/Hooks/useProducts'
import Cards from '../../Components/Cards/Cards';
import './InnerSamplePack.css'
const InnerSamplePack = () => {
    const { products, setProducts } = useProducts('http://localhost:3001/products');
  return (
    <div className='back-des'>
        <h2 className="my-5 text-des2">Our Products</h2>
        
       <div className="container container-fluid d-flex flex-wrap justify-content-center ">
        {
          products.map((product, index) => {
            return (
                
              <Cards item={product} index={index} setProducts={setProducts}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default InnerSamplePack
