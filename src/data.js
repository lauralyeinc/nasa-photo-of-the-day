import React, { useState, useEffect } from "react"; 
import axios from "axios";


function APODData() {

  const [photo,setPhoto] = useState;

  useEffect(() => {
    async function fetchData() {
      try {
        let dataLink = await axios.get("https://api.nasa.gov/planetary/apod?api_key=85vcaunC1sbwAs2RujfNIfQ8IGQahxzv2iu4i0i2");

        // console.log(typeof(results));
        console.log(dataLink);

        setPhoto(photo.data);

      } catch (err) {
        console.log(err); 
      } 
    }
    fetchData();
  })
 }

 export default APODData; 

