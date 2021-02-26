import React from 'react' 
import styled from 'styled-components';
import {Flex,Grid} from '../Layout';
import Header from './Header'
import Footer from './Footer'

export const Style = styled(Flex) `
  min-height:100vh;

  // Content Grid Wrapper
  > ${Grid}{
    padding:0 20%;
  }

  // Main Content Wrapper
  .main-content-wrapper{
    height:100%;
    flex-grow:1;
  }
`

const Layout = props => {
  return(
    <Style d='column' j='space-between'>
      <Header/>
      <div className='main-content-wrapper'>
        {props.children}
      </div>
      <Footer/>
    </Style>
  )
}

export default Layout
