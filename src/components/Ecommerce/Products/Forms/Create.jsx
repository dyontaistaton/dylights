import React from 'react';
import {Modal,Input,File} from '../../../Form';
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
        <File autoComplete='off' name='image' label='Image' accepts='image/*' />
        <Input autoComplete='off' name='name' label='Name' type='text' />
        <Input autoComplete='off' name='price' label='Price' type="number" />
        <Input autoComplete='off' name='count' label='Count' type="number" />
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