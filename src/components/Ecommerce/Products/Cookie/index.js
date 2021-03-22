import React from 'react'
import Card from './Card'
import {AddToCart} from '../Forms' 
import {AddToCart as addToCart} from '../../../../redux/ecommerce/cart/actions'
import {useDispatch} from 'react-redux';

const Cookie = props => {
  const {product,key} = props;
  const dispatch = useDispatch()

  const [loading, setLoading] = React.useState(false);
  const [completed, setCompleted] = React.useState(false);

  //* When User Wants To Add Cookie To Cart
  const handleSubmit = (values,actions) => { 
    const {amount} = values;
    setLoading(true);
    
    dispatch(addToCart({
      product:key,
      amount,
      price:product.price
    },()=>{
      setLoading(false)
      setCompleted(true) 

      setTimeout(()=>{
        actions.resetForm()
        setCompleted(false)
      },3000) 

    }))

  }

  return (
    <AddToCart
      loading={loading}
      completed={completed}
      product={product}
      onSubmit={handleSubmit}
      render={({
        handleToggle
      })=>(
        <Card
          product={product}
          onClick={handleToggle}
        />
      )}
    />
  )
}

export default Cookie