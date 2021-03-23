import React from 'react'
import styled from 'styled-components';
import {Flex} from '../../components/Layout';
import config from '../../config/site.json'

const Style = styled(Flex)` 
  height:50px;
  border-radius:15px;
  padding:30px;
  background-color:${config.colors[3]};
  overflow:hidden;

  * {
    white-space:nowrap;
    font-family:'Fjalla One';
  }

  //* Side Cookie Image
  > figure{
    height:250%;
    width:150px;
    background-position:center;
    background-size:cover;
    margin-left:-80px;
  }

  //* Name + Order Count
  > article{
    //* Name
    > h3{
      text-transform:uppercase;
    }
    
  }

  //* Price Tag
  > h1{
    position:relative;

    sup{ 
      position:absolute;
      top:1px;
      right:-14px;
      font-size:${config.sizes.headers[3]};
    }

  }

  //* Media Queries
  @media (max-width:500px){
    padding:25px;

    //* Cookie Image
    > figure{
      display:none;
    }

    //* Name & Order Count
    > article{
      margin-left:-12px;
    }
  }
  
`

const Purchase = props => {
  const {product,price,amount} = props
  return (
    <Style a='center' j='space-between' g='10px'>
      <figure style={{backgroundImage:`url(${product.imageUrl})`}}/>
      <article>
        <h3>{product.name}</h3>
        <h5>x {amount} Orders</h5>
      </article>
      <h1>{price*amount}<sup>$</sup></h1>
    </Style>
  )
}

Purchase.style = Style

export default Purchase