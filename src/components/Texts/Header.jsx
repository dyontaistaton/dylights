import React from 'react'

const Header = props => {
  const {children, size} = props;

  const HeaderType = `h${size||1}` 
  
  return (
    <HeaderType>{children}</HeaderType>
  )
}

export default Header;