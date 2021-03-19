import React from 'react';
import Page from '../components/Page'
import {Flex, Grid} from '../components/Layout';
import config from '../config/site.json'
import {List,Cards} from '../components/Ecommerce/Products'
import Cookies from '../assets/cookies.jpg';
import Cookie1 from '../assets/cookie1.png';
import Cookie2 from '../assets/cookie2.png'; 
import {FirestoreAdaptor} from '../components/General';
import {useSelector} from 'react-redux';

const Home= props => { 
  const products = useSelector(state => state.firestore.data.products)

  console.log(products)

  return (
    <Page 
      wrapper={props=>(
        <Flex center style={{margin:'55px'}}>
          <Flex center d='column' g='30px'>
            {props.children}
          </Flex>
        </Flex>
      )} 
    > 
      <FirestoreAdaptor queries={['products']}>
        <List
          wrapper={props=>(
            <Flex a='flex-start' j='center' g='25px' wrap='wrap' style={{width:'fit-content'}}>
              {props.children}
            </Flex>
          )}
          card={Cards.Cookie}
          products={products&&Object.values(products)}
        />
      </FirestoreAdaptor>
    </Page>
  )
};

Home.path='/'

export default Home;