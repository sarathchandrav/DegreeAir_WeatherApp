import React from 'react';
import styled from 'styled-components';

const ToggleBtn = styled.a`
display: none;
cursor: pointer;
&:focus {
    outline: none;
}
@media (max-width: 766px) {
    display: inline;
  }
`


const ResponsiveBtn = props => {
    //if(props.className === "ResponsiveBtn")
    return(
        <ToggleBtn className="toc item" onClick={props.click}>
           <i className="sidebar icon"></i>
        </ToggleBtn>
    )
}


export default ResponsiveBtn;