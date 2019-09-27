import React from "react"; 
import styled from "styled-components";

let LinkButton = styled.button`
  width: 100px;
  height: 30px;
  background: ${props => (props.primary ? "#fff" : "#2a2223")};
  color: ${props => (props.primary ? "#2a2223" : "#fff")};
  border: 0;
  margin: 5px 10px;
  &:hover {
    background: ${props => (props.primary ? "#2a2223" : "#fff")};
    color: ${props => (props.primary ? "#fff" : "#2a2223")};
  }
`;

const LinkButton = props => {
  return (
    <button>
      {props.content}
    </button>
  )
}