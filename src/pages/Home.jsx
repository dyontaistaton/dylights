import React from 'react';
import Page from '../components/Page';
import {Flex} from '../components/Layout';
import {List,Cookie} from '../components/Ecommerce/Products';
import {FirestoreAdaptor} from '../components/General';
import {useSelector} from 'react-redux';

const Home=props => {
  const products=useSelector(state => state.firestore.data.products);

  return (
    <Page
      wrapper={props => (
        <Flex center style={{margin: '55px'}}>
          <Flex center d='column' g='30px'>
            {props.children}
          </Flex>
        </Flex>
      )}
    >
      <FirestoreAdaptor queries={['products']}>
        <List
          wrapper={props => (
            <Flex a='flex-start' j='center' g='55px' wrap='wrap' style={{width: 'fit-content'}}>
              {props.children}
            </Flex>
          )}
          card={Cookie}
          products={products&&products}
        />
      </FirestoreAdaptor>
    </Page>
  );
};

Home.path='/';

export default Home;