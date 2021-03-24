import config from '../../../../config/site.json'

export default Object.freeze({
  iconStyle: "solid",
  style: {
    base: {
      backgroundColor:config.colors[4],
      iconColor: config.colors[5],
      color: config.colors[5],
      fontWeight: 500,
      fontFamily: config.fonts[0],
      fontSize: config.sizes.p,
      fontSmoothing: "antialiased",
      ":-webkit-autofill": {
        color: config.colors[5],
        backgroundColor:'rgb(232, 240, 254)'
      },
      "::placeholder": {
        color: `${config.colors[5]}ac`
      }
    },
    invalid: {
      iconColor: config.colors[2],
      color: config.colors[2]
    },
    
  }
})