import React, { useState, useEffect } from "react"; 
import axios from "axios";
import "./App.css"; 


// function APODData() {

//   const [photo,setPhoto] = useState("");

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         let dataLink = await axios.get("https://api.nasa.gov/planetary/apod?api_key=85vcaunC1sbwAs2RujfNIfQ8IGQahxzv2iu4i0i2");

//         // console.log(typeof(results));
//         console.log(dataLink);

//         setPhoto(photo.data);

//       } catch (err) {
//         console.log(err); 
//       } 
//     }
//     fetchData();
//     return (
//       <div>
//         <img src={photo}/>
//         </div>
//     )
//   })
//  }

//  export default APODData; 

function APODData() {
  
  const [photo, setPhoto] = useState(""); 
  const [date, setDate] = useState("");
  const [info, setInfo] = useState("");
  const [title, setTitle] = useState(""); 

  useEffect(() => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=85vcaunC1sbwAs2RujfNIfQ8IGQahxzv2iu4i0i2')
    .then(response => {
      console.log(response.data);
      setPhoto(response.data); 
      setTitle(response.data);
      setDate(response.data);
      setInfo(response.data);

    })
    .catch(err => console.error(err));
    
  }, [])
  //console.log(photo)
  return (
    <div>
      <img src={photo.url} alt="space" />
      <h3>{title.title}</h3>
      <h4>{date.date}</h4>
      <p className="Info">{info.explanation}</p>
    </div>
  )
}

export default APODData; 
