import styled from 'styled-components';
import {Header} from 'semantic-ui-react'; 

const fontSize = (size) => {
  switch(size) {
    case "large": 
      return "40px"; 
    case "small": 
      return "25px"; 
    default: 
      return "20px"; 
  }
}

export default styled(Header)`
  color: #444 !important;
  font-family: Montserrat, 'Times New Roman', Times, serif !important;  
  text-align: center; 
  /* font-size: ${props => props.large ? "30px": "18px"} !important; */
  font-size: ${props => fontSize(props.fSize) } !important; 

  `;