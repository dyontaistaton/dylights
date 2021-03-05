import React from 'react';
import Page from '../components/Page'
import {Flex} from '../components/Layout'
import {List, Cookie} from '../components/Ecommerce/Products'
import Cookie1 from '../assets/cookie1.png';
import Cookie2 from '../assets/cookie2.png'; 

const Home= props => {
  return (
    <Page>
      <List
        wrapper={props=>(
          <Flex wrap='wrap' gap='20px' grow fill a='flex-start' j='center'>
            {props.children}
          </Flex>
        )}
        card={Cookie}
        products={[
          {
            amount:'16',
            name:"Chaco Chip",
            image:"https://images.squarespace-cdn.com/content/v1/5e7cadfe1e5cbd08267c630d/1587414678149-7BLWIPRP8ACLJYKFOH8H/ke17ZwdGBToddI8pDm48kGS78un_bcNZLY1QrfTmegV7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTm-jXTMTrB0PefGktXgwZ9-ke3MC6jkwzRBcsdm5TVy4ARQWVfRtMAsNtzm-EqKefv/THE+PLEASE+%26+THANK+YOU+COOKIE",
            price:8
          },
          {
            amount:'4',
            name:"Dubble Dark",
            image:Cookie1,
            price:10
          },
          {
            amount:'10',
            name:"Lava Chip",
            image:Cookie2,
            price:15
          },
          {
            amount:'16',
            name:"Chaco Chip",
            image:"https://images.squarespace-cdn.com/content/v1/5e7cadfe1e5cbd08267c630d/1587414678149-7BLWIPRP8ACLJYKFOH8H/ke17ZwdGBToddI8pDm48kGS78un_bcNZLY1QrfTmegV7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTm-jXTMTrB0PefGktXgwZ9-ke3MC6jkwzRBcsdm5TVy4ARQWVfRtMAsNtzm-EqKefv/THE+PLEASE+%26+THANK+YOU+COOKIE",
            price:8
          },
          {
            amount:'4',
            name:"Dubble Dark",
            image:Cookie1,
            price:10
          },
          {
            amount:'10',
            name:"Lava Chip",
            image:Cookie2,
            price:15
          },
          {
            amount:'16',
            name:"Chaco Chip",
            image:"https://images.squarespace-cdn.com/content/v1/5e7cadfe1e5cbd08267c630d/1587414678149-7BLWIPRP8ACLJYKFOH8H/ke17ZwdGBToddI8pDm48kGS78un_bcNZLY1QrfTmegV7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTm-jXTMTrB0PefGktXgwZ9-ke3MC6jkwzRBcsdm5TVy4ARQWVfRtMAsNtzm-EqKefv/THE+PLEASE+%26+THANK+YOU+COOKIE",
            price:8
          },
          {
            amount:'4',
            name:"Dubble Dark",
            image:Cookie1,
            price:10
          },
          {
            amount:'10',
            name:"Lava Chip",
            image:Cookie2,
            price:15
          },
        ]}
      />
    </Page>
  )
};

export default Home;