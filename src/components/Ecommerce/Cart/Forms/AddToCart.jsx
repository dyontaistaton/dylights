import React from 'react';
import styled from 'styled-components';
import {Modal,Input,File} from '../../../Form';
import {Dynamic} from '../../../Button';
import {Flex} from '../../../Layout';
import {FaCartPlus} from 'react-icons/fa';

const Style=styled.div`
  ${Modal.Body.style}{
  
    * {
      white-space:nowrap;
    }

    >${Flex} > h3{
      position:relative;
      
      // Product Image
      >${Flex}{ 
        position:absolute;
        top:0;
        right:-20px;
        width:20px;
        height:20px;
        background-position:center;
        background-size:cover;

        > * {
          margin-left:55px;
          margin-top:7px;
        }
      }
    }
  }
`;

const AddToCart=props => {
  const {render,onSubmit,loading,completed,product}=props;
  const [curAmount,setCurAmount]=React.useState(1);

  const handleSubmit = (values,actions) => {
    //* Run Givin Function
    onSubmit(values,actions) 

    //* Reset Current Amount 
    setTimeout(()=>setCurAmount(1),1200);
  }

  return (
    <Modal
      render={render}
      form={{
        initialValues: {
          amount: 1,
        },
        onSubmit:handleSubmit,
      }}
      onChange={(value)=>setCurAmount(value.target&&value.target.value<=8&&value.target.value)}
      wrapper={Style}
    > 
      <Modal.Body>
        <Flex j='space-between' a='center' g='60px'>
          <h3>
            {product.name}
            <Flex center style={{backgroundImage: `url(${product.imageUrl})`}}>
              <div><sup>{product.count*(curAmount||1)} ct</sup></div>
            </Flex> 
          </h3>
          <h5>${product.price*(curAmount||1)}</h5>
        </Flex>
        <Input name='amount' type='number' label='Amount' fill min='1' max='8'/>
      </Modal.Body>
      <Modal.Footer
        render={() => (
          <Dynamic label='Add To Cart' loading={loading} width='100%' />
        )}
      />
      <Modal.Splash completed={completed}>
        <Flex center g='40px'>
          <hgroup>
            <h3>Added</h3>
            <h5 style={{textAlign:'center'}}>To Cart</h5>
          </hgroup>
          <FaCartPlus size='100px'/> 
        </Flex>
      </Modal.Splash>
    </Modal>
  );
};

export default AddToCart;