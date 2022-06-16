import React from 'react';
import {Modal,Input,File, Textarea} from '../../../Form';
import {Dynamic} from '../../../Button';
import {Flex} from '../../../Layout';
import {FaStroopwafel} from 'react-icons/fa';

const Create=props => {
  const {render,onSubmit,resetForm,loading,completed}=props;

  return (
    <Modal
      render={render}
      form={{
        initialValues: {
          name: '',
          price: '',
          count: '',
          imageFile: '', 
          description:''
        },
        onSubmit,
        resetForm
      }}
    >
      <Modal.Header>
        <hgroup>
          <h3>Create</h3>
          <h5>New Product</h5>
        </hgroup>
        
      </Modal.Header>
      <Modal.Body>
        <File autocomplete='off' name='image' label='Image' accepts='image/*' />
        <Input autocomplete='off' name='name' label='Name' type='text' />
        <Input autocomplete='off' name='price' label='Price' type="number" />
        <Input autocomplete='off' name='count' label='Count' type="number" />
        <Textarea autocomplete='off' name='description' label='description'/>
      </Modal.Body>
      <Modal.Footer
        render={({onHide}) => (
          <Dynamic size="large" width='100%' label='Create' loading={loading} />
        )}
      />
      <Modal.Splash completed={completed}>
        <Flex center d='column'>
          <FaStroopwafel size='125px' />
          <h3>Created</h3>
          <h5>New Product</h5>
        </Flex>
      </Modal.Splash>
    </Modal>
  );
};

export default Create;