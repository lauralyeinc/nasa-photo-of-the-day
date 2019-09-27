import React from "react"; 


const Title = props => {
  return (
    <div className="Photo_Title">
    <h3>{props.title}</h3>
    <h3>{props.date}</h3>
    </div>
  )
}

export default Title; 