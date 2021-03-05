import React from 'react' 
import styled from 'styled-components';
import {Flex,Grid} from '../Layout';
import Header from './Header'
import Footer from './Footer'
import {If} from '../Logic'

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
      <If value={props.wrapper} Else={(
          <If value={props.noWrapper} Else={(
            <div className='main-content-wrapper'>
              {props.children}
            </div>
          )}>
            {props.children}
          </If>
        )}>
          <>{props.wrapper&&props.wrapper({children:props.children})}</>
        </If>
      <Footer/>
    </Style>
  )
}

export default Layout
