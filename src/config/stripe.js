import {loadStripe} from '@stripe/stripe-js'

const publicKey = 'pk_test_51IYwqKHDzbecu5pZGprsdjGb3dcrr8BkMRN8Whl2cqG25PcSgm0GrHuGweFU4rhwH1J8hlX5ZYRMUgsyVzAUyxpY0029uTqrTS'

export default loadStripe(publicKey)