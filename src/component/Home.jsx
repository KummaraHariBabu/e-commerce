import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductCard from '../Helper/ProductCard'
import {ProductContext} from '../ProductContext'

function Home(props) {
  const context = useContext(ProductContext)
  const [productsData] = context.productApi.products.value || []
  const navigate = useNavigate();
  useEffect(() => {
    if(!localStorage.getItem('token')){
        // navigate('/login')
        navigate('/')

    }
  }, [])
  
  return (
    <div className="container">

        <div className="row">

          {
            productsData.length === 0 ? (
              <div className="col-md-12">
                <div className="row text-center">
                  <h5 className="text-secondary display-5">No Products Found</h5>
                </div>
              </div>
            ) : (
                    <div className="col-md-12 text-center">
                      <h5 className="display-5 text-success">Featured Products</h5>
                    </div>
                )
          }

        </div>

        <div className="row">
          {
            productsData && productsData.map((item,index) => {
              return <ProductCard key={index} {...item} /> 
            })
          }
        </div>
      </div>
   
  )
}

export default Home
