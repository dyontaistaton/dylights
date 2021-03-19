import types from './types';


/* Storage Actions */
export const UploadFile = (path, file,...callbacks) => {
  return (dispatch,getState,{getFirebase}) => {
    const firebase = getFirebase();
    const storage = firebase.storage();

    // If No File Just Call All Callbacks with False Then Return
    if(!file){
      for (let i = 0; i < callbacks.length; i++) {callbacks[i](false)}
      return
    }

    const fileType = file.type.match(/([^/]+)/)[0]
    
    // 1. Get Storage Reference
    const storageBucket = storage.ref(path||fileType+''||'/images').child((Math.floor(Math.random() * 999999) + 100000).toString());

    // 2. Being Uploading Process . . .
    const uploadTask = storageBucket.put(file);

    uploadTask.then(snapshot => {

      // 3. On Completion, Dispatch Completed Action 
      dispatch({type:types.UPLOAD_FILE,payload:snapshot})
      return snapshot;

    })

    // 5. If Error, Dispatch Error Action
    .catch(err => dispatch({type:types.UPLOAD_FILE_ERROR,err}))

    // 6. Run All Callbacks
    .then(()=>{
      for (let i = 0; i < callbacks.length; i++) {callbacks[i]()}
    })

    // 7. Return The Upload Task
    return uploadTask
  }
}

export const RemoveFile = (downloadUrl, ...callbacks) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    const storage = firebase.storage();

    // 1. Get File Reference
    const fileRef = storage.refFromURL(downloadUrl);

    // 2. Delete File
    const deletionTask = fileRef.delete()

    // 3. Run On Completion Action
    deletionTask.then(()=>dispatch({type:types.DELETE_FILE})) 

    // 5. If Error, Run Error Action
    .catch(err=>dispatch({type:types.DELETE_FILE_ERROR,err:true}))

    // 6. Run All Callbacks
    .then(()=>{
      for (let i = 0; i < callbacks.length; i++) {callbacks[i]()}
    })

    // 7. Return The Deletion Task
    return deletionTask
  }
}