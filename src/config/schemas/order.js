import cart from './cart'

export default Object.freeze({ 
  type: 'object',
  strict:true,
  properties:{
    cart,
    onCreated:{type:'number'},
    user:{type:'string'},
    address:{type:'string'}
  }
})
