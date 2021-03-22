import types from './types';

/**
 * Create A New Order
 * @param {any} info Order Info
 * @param  {...Function} callbacks Functions Ran After Order Is Created
 */
export const CreateOrder = (info,...callbacks) => {
  return (dispatch,getState,{getFirebase}) => { 
    const firestore = getFirebase().firestore(); 

    // Add Order To Database
    firestore.collection('orders').add({
      ...info,
      fulfilled:false,
      verified:false,
      paid:false,
      createdOn:Date.now()
    })

    // Dispatch Actions
    .then((docRef)=>dispatch({type:types.RESET_CART}))
    .then((docRef)=>dispatch({type:types.CREATE_ORDER}))
    .catch(err=>dispatch({type:types.CREATE_ORDER_ERROR,err}))

    // Run All Callbacks
    .then(docRef=>{for(let i = 0; i < callbacks.length; i++){callbacks[i](docRef)}})
  }
}

export const VerifyOrder = ({id}) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase(); 
    const firestore = firebase.firestore()
    firestore.collection('orders').doc(id).update({
      verified:true,
      verifiedOn:Date.now()
    })
    .then(()=>{dispatch({type:types.VERIFIED_ORDER})})
    .catch(err=>{dispatch({type:types.VERIFIED_ORDER_ERROR, err})})
  }
}

export const FulfilOrder = ({id}) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    const firestore = firebase.firestore()
    firestore.collection('orders').doc(id).update({
      fulfilled:true,
      fulfilledOn:Date.now() 
    })
    .then(()=>{dispatch({type:types.FULFIL_ORDER})})
    .catch( err => {dispatch({type:types.FULFIL_ORDER_ERROR})})
  }
}

export const PayOrder = ({id}) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    const firestore = firebase.firestore();
    firestore.collection('orders').doc(id).update({
      paid:true, 
    })
    .then(()=>{dispatch({type:types.PAY_ORDER})})
    .catch( err => {dispatch({type:types.PAY_ORDER_ERROR,err})})
  }
}

export const CompleteOrder = ({id,user,order,totalCost}) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    const firestore = firebase.firestore(); 

    firestore.collection('orders').doc(id).update({
      paid:true, 
      fulfilled:true,
      fulfilledOn:Date.now()
    })
    .then(()=>{
      firestore.collection('users').doc(user).update({
        orders: firebase.firestore.FieldValue.increment(1),
        totalTransferred: firebase.firestore.FieldValue.increment(totalCost),
        lastLocation:order.address,
        lastOrderOn:Date.now()
      })
    })
    .then(()=>{dispatch({type:types.COMPLETE_ORDER})})
    .catch( err => {dispatch({type:types.COMPLETE_ORDER_ERROR, err})})
  }
}