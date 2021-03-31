import types from './types';
import {ResetCart} from '../cart/actions'
import inspector from 'schema-inspector'
import {order as orderSchema} from '../../../config/schemas'

/**
 * Create A New Order
 * @param {{
 *  user:string,
 *  email:string,
 *  cart:object,
 *  address:{
 *    city:string,
 *    state:string,
 *    street:string,
 *    zip:string
 *  },
 *  payment:{
 *    client_secret:string,
 *    status:string
 *  }
 * }} order Order Info
 * @param  {...Function} callbacks Functions Ran After Order Is Created
 */
export const CreateOrder = (order,...callbacks) => {
  return (dispatch,getState,{getFirebase}) => { 
    const firebase = getFirebase()
    const firestore = firebase.firestore(); 

    //* Sanitize Order
    const sanitizedOrder = inspector.sanitize(orderSchema, {
      ...order,
      onCreated: Date.now(),
    }).data

    //* Add Order To Database
    firestore.collection('orders').add(sanitizedOrder)
    
    //* Update User
    .then((docRef)=>{
      firestore.collection('users').doc(sanitizedOrder.user).update({
        orders:firebase.firestore.FieldValue.increment(1),
        name:order.name,
        lastStreet:sanitizedOrder.address.street,
        lastCity:sanitizedOrder.address.city,
        lastState:sanitizedOrder.address.state
      })
    })

    //* Dispatch Actions
    .then((docRef)=>dispatch(ResetCart()))
    .then((docRef)=>dispatch({type:types.CREATE_ORDER}))
    .catch(err=>dispatch({type:types.CREATE_ORDER_ERROR,err}))

    //* Run All Callbacks
    .then(docRef=>{for(let i = 0; i < callbacks.length; i++){callbacks[i](docRef.id)}})
  }
}

/**
 * Complete Order Marking It As Delivered
 * @param {string} id Order Id
 * @param  {...Function} callbacks Functions Ran After Order Is Created
 */
export const FulfilOrder = ({id,user},callbacks) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    const firestore = firebase.firestore()

    //* Sanitize Update
    const sanitizedUpdate = inspector.sanitize(orderSchema,{
      onDelivered: Date.now()
    }).data 

    //* Update Order
    firestore.collection('orders').doc(id).update(sanitizedUpdate) 

    //* Dispatch Actions
    .then(()=>{dispatch({type:types.FULFIL_ORDER})}) 
    .catch( err => {dispatch({type:types.FULFIL_ORDER_ERROR})})

    //* Run All Callbacks
    .then(docRef=>{for(let i = 0; i < callbacks.length; i++){callbacks[i](docRef)}})

  }
} 