import React from 'react';
import {Button,Icon as IconButton, Toggle, ToggleGroup, IconToggle} from '../components/Button';
import {ankh} from '../components/Svg';
import { css } from '@emotion/css';
import {Form, Select,Input,Textarea,Toggle as ToggleField, IconToggle as IconToggleField, ToggleGroup as ToggleGroupField, File as FileField} from '../components/Form';
import {Flex,Table} from '../components/Layout';
import {Header} from '../components/Texts';

const Home= props => {
  const columns = React.useMemo(()=>[
    {
      Header:'Name',
      columns:[
        {Header:'First',accessor:'firstName'},
        {Header:'Last',accessor:'lastName'}
      ]
    },
    {
      Header:'Contacts',
      columns:[
        {Header:'Phone',accessor:'phone'},
        {Header:'Email',accessor:'email'},
        {Header:'Discord',accessor:'discord'}
      ]
    }
  ],[]) 
  const data = React.useMemo(()=>[
    {
      firstName:'Dyontai',
      lastName:'Staton',
      phone:'502-705-6330',
      email:'dyontai@gmail.com',
      discord:'@RARE'
    },
    {
      firstName:'Kimberly',
      lastName:'Gutierrez',
      phone:'502-996-2757',
      email:'kim@gmail.com',
      discord:'@Kim21'
    }
  ], [])
  return (
    <div className={css`
      padding:20px;
      & > *+*{
        margin-block-start:0.5em;
      }
    `}>
      <Header size={1}>WebBase<sup>H1</sup></Header>
      <p>Light-weight & Stable Foundation for <strong>StatonFoundation</strong><sup>Paragraph</sup></p> 
      <br/>
      <hr/> 
      <h4>Buttons<sup>H4</sup></h4>
      <Flex a='center' j='space-around'>
        <Button size='larger' label='Button'/>
        <Button size='large' label='Button'/>
        <Button label='Button'/>
        <Button size='small' label='Button'/>
        <Button size='smaller' label='Button'/>
      </Flex>
      <br/>
      <hr/> 
      <h4>Icon Buttons<sup>H4</sup></h4>
      <Flex a='center' j='space-around'>
        <IconButton size='larger' icon={ankh()} data-title="Every"/>
        <IconButton size='large' icon={ankh()} data-title="Element"/>
        <IconButton icon={ankh()} data-title="Can"/>
        <IconButton size='small' icon={ankh()} data-title="Have"/>
        <IconButton size='smaller' icon={ankh()} data-title="Tooltips"/>
      </Flex>
      <br/>
      <hr/> 
      <h4>Toggles<sup>H4</sup></h4>
      <Flex a='center' j='space-around'>
        <IconToggle size='larger' icon={ankh()}/>
        <IconToggle size='large' icon={ankh()}/>
        <IconToggle icon={ankh()}/>
        <IconToggle size='small' icon={ankh()}/>
        <IconToggle size='smaller' icon={ankh()}/>
      </Flex>
      <br/>
      <Flex a='center' j='space-around'>
        <Toggle size='larger' label='Toggle'/>
        <Toggle size='large' label='Toggle'/>
        <Toggle label='Toggle'/>
        <Toggle size='small' label='Toggle'/>
        <Toggle size='smaller' label='Toggle'/>
      </Flex>
      <br/>
      <hr/> 
      <h4>Toggle Group<sup>H4</sup></h4>
      <Flex a='center' j='space-around'>
        <ToggleGroup size='large'>
          <Toggle label='Toggle'/>
          <Toggle label='Toggle'/>
          <Toggle label='Toggle'/>
          <Toggle label='Toggle'/>
          <Toggle label='Toggle'/>
        </ToggleGroup>
      </Flex>
      <br/>
      <hr/> 
      <h4>Forms & Fields<sup>H4</sup></h4>
      <Form 
        initialValues={{
          input:'',
          select:'',
          textarea:'',
          toggle:[],
          toggleGroup:'',
          file:undefined
        }}
        onSubmit={(values)=>{
          alert(values)
        }}
        
      >
        <Flex a='flex-start' j='space-around'>
          <div>
            <h5>Text Fields<sup>H5</sup></h5>
            <Input size='text' name='input' label='Input'/>
            <Select name='select' label='Select' options={['Option #1', 'Option #2', 'Option #3']}/>
            <Textarea name='textarea' label='Textarea'/>
          </div>
          <div>
            <h5>File Field<sup>H5</sup></h5>
            <FileField name='file' label='Input'/>
          </div>
          <div>
            <h5>Toggle Fields<sup>H5</sup></h5>
            <ToggleField name='toggle[0]' label='Toggle Field' size='small'/>
            <ToggleField name='toggle[1]' label='Toggle Field' size='small'/>
            <ToggleField name='toggle[2]' label='Toggle Field' size='small'/>
            <Flex a='center' j='space-around'>
              <IconToggleField name='toggle[3]' title='Icon Toggle Field'/>
              <IconToggleField name='toggle[4]' title='Icon Toggle Field'/>
              <IconToggleField name='toggle[5]' title='Icon Toggle Field'/> 
            </Flex>
          </div>
          <div>
            <h5>Toggle Group<sup>H5</sup></h5>
            <ToggleGroupField
              name='toggleGroup'
              toggles={[
                {value:'Toggle'},
                {value:'IconToggle', type:'icon'}
              ]}
            />
          </div>
        </Flex>
      </Form>
      <br/>
      <hr/>
      <h4>Table<sup>H4</sup></h4>
      <Table
        columns={columns}
        data={data}
      />
      <br/>
      <hr/>
      <br/>
    </div> 
  );
};

export default Home;