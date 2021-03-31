import cart from './cart'

export default Object.freeze({ 
  type: 'object',
  strict:true,
  properties:{
    cart,
    onCreated:{type:'number'},
    onDelivered:{type:'number',optional:true},
    user:{type:'string', optional:'true'},
    email:{type:'string'},
    address:{
      type:'object',
      properties:{
        city:{type:'string'},
        state:{type:'string'},
        street:{type:'string'},
        zip:{type:'string'}
      }
    },
    payment:{
      type:'object',
      properties:{
        client_secret:{type:'string', alias:'clientSecret'},
        status:{type:'string'}
      }
    }
  }
})
