import React from 'react';
import styled from 'styled-components';
import {FaPlus} from 'react-icons/fa';
import {Icon} from '../../../components/Button';
import {Flex} from '../../../components/Layout';
import {Forms, Cards} from '../../../components/Ecommerce/Products'
import {CreateProduct} from '../../../redux/ecommerce/products/actions'
import List from './List'
import {useDispatch} from 'react-redux'; 

const Style = styled.div`
  > ${List.style} > *:not(:last-child){
    margin-bottom:15px;
  }
`

const Products = props => {
  const dispatch = useDispatch() 
  const [loading, setLoading] = React.useState(false); 
  const [completed, setCompleted] = React.useState({
    create:false
  })

  //* When Create Form Is Submitted
  const handleCreateSubmit = (values,action) => {
    setLoading(true)
    action.resetForm()
    dispatch(CreateProduct(values,()=>{
      setLoading(false) 
      setCompleted({
        ...completed,
        create:true
      })
      setTimeout(()=>{
        setCompleted({
          ...completed,
          create:false
        })
      },3000)
    }))
  }
  
  return (
    <Style>
      <Flex>
        <h1>Products</h1>
        <Forms.Create 
          onSubmit={handleCreateSubmit} 
          loading={loading}
          completed={completed.create}
          render={({handleToggle})=>(
            <Icon icon={FaPlus()} data-title='Create Product' size='small' onClick={handleToggle} type='button'/>
          )}
        />
      </Flex>
      <List/>
    </Style>
  )
}

export default Products;