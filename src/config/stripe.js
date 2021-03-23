import {loadStripe} from '@stripe/stripe-js'

const publicKey = 'pk_live_51HcHMtKnUTYIhGZpGd5z3kkTNhikvq9G416JooPAKbEkRI8uHZiTKevDF2TjEzLB42iYJ9HWYIydeuPWZK4lk0T200yiVeeDK7'

export default loadStripe(publicKey)