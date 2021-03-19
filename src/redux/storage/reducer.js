import types from './types';

const initialState={
  isUploading:undefined, // UploadTaskSnapshot - When Currently Uploading To Storage,
  lastUploaded:undefined // UploadTaskSnapshot - After Upload Completes
}

const reducer=(state=initialState,action)=>{
  switch (action.type) {

    // Once The Upload Has Been Started
    case types.UPLOAD_STARTED: { 
      return {
        ...state,
        isUploading:action.payload
      }
    }

    // Once Upload Has Been Completed 
    case types.UPLOAD_FILE: {
      return {
        ...state,
        isUploading:undefined,
        lastUploaded:action.payload
      }
    }

    // If Error Arises, console.error it
    case types.UPLOAD_FILE_ERROR:{
      console.error(action.err)
      return state;
    }

    case types.DELETE_FILE:return state

    case types.DELETE_FILE_ERROR:{
      console.error('There was an ERROR Deleting a File')
      return state
    }

    default:{return state}
  }
}

export default reducer;