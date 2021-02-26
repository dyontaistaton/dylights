import React from 'react'
import {Helmet,HelmetProvider} from 'react-helmet-async'
import {ThemeProvider} from 'styled-components'
import Layout from './Layout'
  
export {default as Header} from './Header'
export {default as Footer} from './Footer'
export {default as Layout} from './Layout'


const Page = props => {
  return (
    <ThemeProvider theme={props.theme||{}}>
      <HelmetProvider>
        <Helmet>

        </Helmet>
        <Layout>
          {props.children}
        </Layout>
      </HelmetProvider>
    </ThemeProvider>
  )
}

export default Page;