import styled from 'styled-components';
import config from '../../../../config/site.json'

const Style = styled.div`
  background-color:${config.colors[4]};
  position:relative;
  padding:15px;
  box-sizing:border-box;
  border-radius:10px; 
  width:313px; 
  ${props=>props.fill&&`width:100%;`}

  & ~ & {
    margin-top:10px;
  }
`

export default Style