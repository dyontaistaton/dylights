import {loadStripe} from '@stripe/stripe-js'

const publicKey = 'pk_test_51HcHMtKnUTYIhGZpaLRWOR1dDVUX25hO4b9BBtCrUlv62Wqtnr1ADLwzR1RRj43hySYlyXC6ChuMP5gRdwnmrGw900AwSMRuyQ'

export default loadStripe(publicKey)