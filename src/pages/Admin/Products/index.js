import React from 'react';
import styled from 'styled-components';
import {FaPlus} from 'react-icons/fa';
import {Icon} from '../../../components/Button';
import {Flex} from '../../../components/Layout';
import {Forms, Cards} from '../../../components/Ecommerce/Products'
import {CreateProduct} from '../../../redux/ecommerce/products/actions'
import {UploadFile} from '../../../redux/storage/actions' 
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
    const {name,price,count,image} = values;
    setLoading(true)

    //* Upload Product Image
    dispatch(UploadFile(undefined,image,(snapshot)=>{
      snapshot.ref.getDownloadURL()
      .then(url=>{

        //* Create Product With Image Download Url
        dispatch(CreateProduct({
          name,
          price,
          count,
          imageUrl:url
        },()=>{
          setLoading(false) 
          setCompleted({
            ...completed,
            create:true
          })
          action.resetForm()
          setTimeout(()=>{
            setCompleted({
              ...completed,
              create:false
            })
          },3000)
        }))
      })
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