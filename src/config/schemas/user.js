export default Object.freeze({
  type:'object',
  strict:true,
  properties:{
    id:{type:'string'},
    email:{type:'string',pattern:'email'},
    orders:{type:'number',def:0},
    phone:{type:'string',exec:(schema,value)=>{
      const numbersOnly = value.replace(/(\D)/g, '');
      const match = numbersOnly.match(/(\d{3})(\d{3})(\d{4})/)
      if(match){return `(${match[0]})-${match[1]}-${match[2]}`}
      return null // TODO THROW ERROR
    }},
    type:{type:'string',rules:['trim','lower'],def:'user'}
  }
})
