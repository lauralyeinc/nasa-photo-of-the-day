import React from "react"; 


const Photo = props => {
  return (
    <div className="NASAimg">
      <img className="NASA-image" alt="Space Picture" src={props.url} />
    </div>
  );
};

export default Photo; 