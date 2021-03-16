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
  const {style, noHeader, noFooter, children, noWrapper, wrapper, footer, header} = props; 

  return(
    <Style d='column' j='space-between' style={style}>
      <If value={!noHeader&&!header}>
        <Header/>
      </If>
      <If value={header}>
        {header&&header({})}
      </If>
      <If value={wrapper} Else={(
        <If value={noWrapper} Else={(
          <div className='main-content-wrapper'>
            {children}
          </div>
        )}>
          {children}
        </If>
      )}>
        <>{wrapper&&wrapper({children:children})}</>
      </If>
      <If value={!noFooter&&!footer}>
        <Footer/>
      </If>
      <If value={footer}>
        {footer&&footer({})}
      </If>
    </Style>
  )
}

export default Layout
