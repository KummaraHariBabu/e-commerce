import React, { useContext, useEffect} from 'react'
import Category from '../Helper/Category'
import {ProductContext} from '../ProductContext'
import { useNavigate } from 'react-router-dom'

function Categories() {
    const context = useContext(ProductContext)
    const [categoryData] = context.categoryApi.category || []  
    const navigate = useNavigate();

    useEffect(() => {
      if(!localStorage.getItem('token')){
          navigate('/login')
      }
    }, [])
  return (
    <div className="container">

      <div className="row">
          {
            categoryData.length === 0 ? (
              <div className="col-md-12">
                <div className="row text-center">
                  <h5 className="text-secondary display-5">No Categories Found</h5>
                </div>
              </div>
            ) : (
              <div className="col-md-12 text-center">
                <h5 className="display-5 text-success">Categories</h5>
              </div>
              )
          }
      </div>


        <div className="row">
          {
            categoryData.map((item,index) => {
              return <Category key={index} value={item} />
            })
          }
        </div>
    </div>
  )
}

export default Categories
