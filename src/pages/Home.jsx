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
      <Page.Header/>
      <Page.Body center style={{padding:'55px'}}>
        <FirestoreAdaptor queries={['products']}>
          <List
            card={Cookie}
            items={products}
          />
        </FirestoreAdaptor>
      </Page.Body>
      <Page.Footer/>
    </Page>
  );
};

Home.path='/';

export default Home;