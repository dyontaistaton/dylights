import Base from './Base'

const generic_decline = props => Base({...props})

const incorrect_number = props => Base({
  title:'Incorrect Number',
  subtitle:'The card number is incorrect',
  description:'Try again using the correct card number.',
  ...props  
})

const incorrect_cvc = props => Base({
  title:'Incorrect CVC',
  subtitle:'The cvc number is incorrect',
  description:'Try again using the correct cvc number.',
  ...props
})

const insufficient_funds = props => Base({
  title:'Insufficient Funds',
  subtitle:'The card has insufficient funds',
  description:'Use an alternative payment method.',
  ...props
})

const card_not_supported = props => Base({
  title:'Card Not Supported',
  subtitle:'The card does not support this type of purchase.',
  description:'Contact your card issuer to make sure your card can be used to make this type of purchase.',
  ...props
})

export default Object.freeze({
  generic_decline,
  incorrect_number,
  incorrect_cvc,
  insufficient_funds,
  card_not_supported, 
  Base
}) 

