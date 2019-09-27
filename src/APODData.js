import React, { useState, useEffect } from "react"; 
import axios from "axios";
import "./App.css"; 
import { Container, Row, Col, Button } from 'reactstrap';
import Photo from "./components/Photo.js";
import Title from "./components/Title.js"; 
import Info from "./components/Info.js"; 



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
    <Container>
      <Row> 
        <Col><Photo url={photo.url} /></Col>
      </Row>
      <Row>
        <Col sm={{ size: 'auto', offset: 4}}><Title title={title.title} date={date.date} />
       </Col>
      </Row>
      <Row>
      <Col sm={{ size: 6, offset: 3}}><Info info={info.explanation} /></Col>
      </Row>
      <Row>
        <Col sm={{ size: 'auto', offset: 4}}> <h5> Discover more NASA API</h5></Col>
      </Row>
      <Row>
        <Col sm={{ size: 'auto', offset: 5}}><Button color="primary" size="lg">Click Here</Button></Col>
      </Row>
    </Container>
  )
}

export default APODData; 
