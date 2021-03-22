import types from './types';
import inspector from 'schema-inspector'
import {purchase as purchaseSchema,cart as cartSchema} from '../../../config/schemas'

/** 
 * Add Products To Session Cart
 * @param {Object} purchase array of products being added to cart 
 * @param {...Function} callbacks Callback Functions Ran After Purchase Is Added To Cart
 */
export const AddToCart = (purchase,...callbacks) => {
  return (dispatch,getState) => {
    let {purchases,totalCost,totalAmount} = getState().cart; 

    //* Sanitize Purchase
    const sanitizedPurchase = inspector.sanitize(purchaseSchema,purchase).data

    //* Get New Totals
    const newTotalCost = totalCost + sanitizedPurchase.cost*sanitizedPurchase.amount
    const newTotalAmount = totalAmount + sanitizedPurchase.amount

    //* Get New Purchase List
    const newPurchaseList = [...purchases, sanitizedPurchase] 

    //* Sanitize New Cart
    const sanitizedCart = inspector.sanitize(cartSchema, {
      purchases:newPurchaseList,
      totalCost:newTotalCost,
      totalAmount:newTotalAmount
    }).data

    //* Run Dispatch Actions
    dispatch({type:types.ADD_TO_CART,payload:sanitizedCart})

    //* Run All Callbacks
    for(let i=0;i<callbacks.length;i++){callbacks[i]()}
  }
}

/**
 * Remove Product From Session Cart Using Cart Purchases Index
 * @param {number} index Index Of Purchase Being Removed
 */
export const RemoveFromCart = index => {
  return (dispatch,getState) => {
    const {purchases,totalAmount,totalCost} = getState()

    //* Get Purchase Being Removed
    const removedPurchase = purchases[index];

    //* Remove Purchase From Purchases
    purchases.splice(index,1)

    //* Get New Totals
    const newTotalCost = totalCost - removedPurchase.cost * removedPurchase.amount
    const newTotalAmount = totalAmount - removedPurchase.amount

    //* Get Sanitized New Cart
    const sanitizedCart = inspector.sanitize(cartSchema, {
      purchases,
      totalCost:newTotalCost,
      totalAmount:newTotalAmount
    })

    dispatch({type:types.REMOVE_FROM_CART,payload:sanitizedCart}) 
  }
}

/**
 * Resets Session Cart
 */
export const ResetCart = () => dispatch => dispatch({type:types.RESET_CART}) 