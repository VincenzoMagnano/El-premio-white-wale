import React from 'react'
import { useProducts } from '../../Components/Hooks/useProducts'
import Cards from '../../Components/Cards/Cards';

const InnerSamplePack = () => {
    const { products, setProducts } = useProducts('http://localhost:3001/products');
  return (
    <div>
       <div className="d-flex justify-content-center flex-wrap">
        
        {
          products.map((product, index) => {
            return (
                
              <Cards item={product} index={index} setProducts={setProducts} />
            )
          })
        }
      </div>
    </div>
  )
}

export default InnerSamplePack
