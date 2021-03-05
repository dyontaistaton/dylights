import React from 'react' 
import styled from 'styled-components';
import {default as CardStyle} from './Style';

const Style = styled(CardStyle)`
  width:250px;
  height:fit-content;

  // Product Image
  > figure{
    min-height:200px;
    border-radius:36px 36px 0 0;
    background-size:cover;
    background-position:center;
  }

  // Product Text Info
  > article{
    padding:15px;
    box-sizing:border-box;
  }
`

const Small = (props) => {
  const {children} = props;
  return (
    <Style>
      <figure style={{backgroundImage:`url(https://www.ecotextile.com/images/stories/2020/June/Gucci.jpg)`}}/>
      <article>
        <h3>Cookie</h3>
        <h5>20$</h5>
      </article>
    </Style>
  )
}

export default Small;