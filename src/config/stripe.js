import {loadStripe} from '@stripe/stripe-js'

const publicKey = 'pk_live_51IYwqKHDzbecu5pZXsOif9JPlRQTcjXpmQ207AXBXyV5TzHCqAo7gO6SLHxUs9QsD8lwsmr2LFvECzbOgccxGBu500X9SKyZKf'

export default loadStripe(publicKey)