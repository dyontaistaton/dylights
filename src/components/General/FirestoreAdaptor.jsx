import {useFirestoreConnect} from 'react-redux-firebase';
import PropTypes from 'prop-types'; 

const FirestoreAdaptor=props => {
  const {queries}=props;
  useFirestoreConnect(queries);
  return props.children;
}; 

FirestoreAdaptor.propTypes = {
  /** Firestore Queries To Be Ran */
  queries: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.object)
  ])
}

export default FirestoreAdaptor;