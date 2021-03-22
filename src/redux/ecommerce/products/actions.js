import types from './types';
import {UploadFile,RemoveFile} from '../../storage/actions'

/**
 * Create A New Product 
 * @param {any} info 
 * @param  {...Function} callbacks 
 */
export const CreateProduct = (info,...callbacks) => {
  return (dispatch,getState,{getFirebase}) => {

    // Get Firebase & Firestore
    const firebase = getFirebase();
    const firestore = firebase.firestore();

    // Add Product to Database
    firestore.collection('products').add({
      ...info,
      createdOn:Date.now()
    })
    
    // Dispatch Actions
    .then(()=>dispatch({type:types.CREATE_PRODUCT}))
    .catch(err=>dispatch({type:types.CREATE_PRODUCT_ERROR}))

    // Run All Callbacks
    .then(value=>{for(let i=0;i<callbacks.length;i++){callbacks[i](value)}})

  }
}

export const UpdateProduct = (id,info,...callbacks) => {
  return (dispatch,getState,{getFirebase}) => { 

    // Get Firebase & Firestore
    const firebase = getFirebase();
    const firestore = firebase.firestore();

    // Update Product Info
    firestore.collection('products').doc(id).update({
      ...info,
      updatedOn:Date.now()
    })

    // Dispatch Actions
    .then(()=>dispatch({type:types.UPDATE_PRODUCT}))
    .catch(err=>dispatch({type:types.UPDATE_PRODUCT_ERROR,err}))

    // Run All Callbacks
    .then(value=>{for(let i=0;i<callbacks.length;i++){callbacks[i](value)}}) 
  }
}

export const RemoveProduct = (id, ...callbacks) => {
  return(dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    const firestore = firebase.firestore();

    // 1. Get Product Ref
    const productRef = firestore.collection('products').doc(id);

    // 2. Get imageUrl From Product Data
    productRef.get()
    .then(docSnapshot=>{
      const product = docSnapshot.data();
      const {imageUrl} = product;

      // 3. Delete Product Object
      productRef.delete()
      .then(()=>{

        // 4. Dispatch RemoveFile Action On Product Image
        dispatch(RemoveFile(imageUrl,()=>{

          // 5. Dispatch Completed Action
          dispatch({type:types.REMOVE_PRODUCT})
        }))
      }) 

      // 6. If Error, Dispatch Error Action
      .catch(err=>dispatch({type:types.REMOVE_PRODUCT_ERROR}))
    })
    .catch(err=>dispatch({type:types.REMOVE_PRODUCT_ERROR}))

    // 7. Run All Callbacks
    .then(()=>{
      for (let i = 0; i < callbacks.length; i++) {callbacks[i]()}
    })
  }
}

export const UpdateProductImage = (id,image,...callbacks) => {
  return(dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    const firestore = firebase.firestore();

    // 1. Begin Uploading New Image 
    const uploadTask = dispatch(UploadFile('images/',image,snapshot=>{

      // 2. Get Reference To New Image
      const newImageRef = snapshot.ref;

      // 3. Get Reference Of Old Image
      const productRef = firestore.collection('products').doc(id);
      productRef.get()
      .then(productSnapshot=>{
        const oldImageUrl = productSnapshot.data().imageUrl;
        
        // 4. Update Product Image To New Image
        newImageRef.getDownloadURL()
        .then(newImageUrl=>dispatch(UpdateProduct(id,{imageUrl:newImageUrl},()=>{
          
          // 5. Delete Old Product Image
          dispatch(RemoveFile(oldImageUrl))
          
        }))) 
      })

      // 6. Dispatch Actions
      .then(()=>dispatch({type:types.UPDATE_PRODUCT_IMAGE}))
      .catch(err=>dispatch({type:types.UPDATE_PRODUCT_IMAGE_ERROR,err}))

      // 7. Run All Callbacks
      .then(()=>{for (let i = 0; i < callbacks.length; i++) {callbacks[i]()}})
    }))

    return uploadTask
  }
}