import PropTypes from 'prop-types'

export const If=props => {
  const {value,Else}=props;
  return value? props.children? props.children:null:Else||null;
};

If.propTypes = {
   
  /** Boolean Which Determines If The Children Are Rendered Or Not */
  value: PropTypes.any,
  
  /** What is Rendered If Value Prop Is False */
  Else: PropTypes.node
}

export default If;
