import purchase from './purchase'

export default Object.freeze({
  type:'object',
  strict:true,
  properties:{
    purchases:{type:'array', items:purchase},
    totalCost:{type:'number',gt:0},
    totalAmount:{type:'number',gt:0}
  }
})
