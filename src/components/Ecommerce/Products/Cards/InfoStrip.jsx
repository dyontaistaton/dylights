import React from 'react' 
import styled from 'styled-components'; 
import {Button,Group,Icon} from '../../../Button';
import {Flex} from '../../../Layout';
import config from '../../../../config/site.json'
import {FaEnvelope, FaEnvelopeOpen} from 'react-icons/fa';

const Style = styled.div`
  padding:15px;
  border-radius:10px;
  background-color:${config.colors[4]};
  overflow-x:scroll; 


  >${Flex}{
    // Header Flex
    &:first-child{
      *{
        white-space:nowrap;
      }
    } 

    // Body Flex 
    &:last-child{
      transition:opacity 300ms ease;
      overflow:hidden;
      height:fit-content;

      // Product Image
      >figure{
        height:200px;
        width:100%;
        background-position:center;
        margin-top:10px;
        border-radius:15px;
      }
    }
  }

  &[data-open=false]{
    >${Flex}{

      // Body Flex
      &:last-child{
        height:0px;
        opacity:0;
      }
    }
  }
`

const InfoStrip = props => {
  const {name,price,count,imageUrl} = props.product||{};
  const [open, setOpen] = React.useState(false)

  if(!props.product){return React.Fragment}
  
  return (
    <Style data-open={open}>
      <Flex g='10px' j='space-between'>
        <Button label={name} width='100%'/>
        <Button label={`$${price}`} width='100%'/>
        <Button label={`${count}ct`} width='100%'/>
        {props.header}
        <Icon icon={open?FaEnvelopeOpen():FaEnvelope()} borderRadius='0.6em' onClick={()=>{setOpen(!open)}}/> 
      </Flex>
      <Flex>
        <figure style={{backgroundImage:`url(${imageUrl})`}}/>
      </Flex>
    </Style>
  )
}

export default InfoStrip;