import React from 'react';
import styled from 'styled-components';
import Markdown from 'markdown-to-jsx'

export const Style = styled.div `

`

const Paragraph = props => {
  return (
    <Style>
      <Markdown
        options={{
          wrapper:'article'
        }}
      >
        {props.children}
      </Markdown>
    </Style>
  )
}

export default Paragraph