import axios from "axios";
import { useEffect, useState } from "react";

export const AxioAPI = () => {
  const [data, setData] = useState([]);
  const [movies, setMovies] = useState([]);
  const API = "https://www.whenisthenextmcufilm.com/api";

  const getData = async () => {
    // TODO We added async here because axio returns a promise object and we will have to use await keyword
    try {
      const res = await axios.get(API);
      setData(res.data); // Asign data property of res

      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  //   Checking few details on data
  console.log("Checking if data is an Array : ", Array.isArray(data));
  console.log("Check the datatype : ", typeof data);
  console.log("Checking if data is empty : ", data.length === 0);

  //* Conditioning begins
  //* Updating a state called movies and then setting it directly as innerHTML for <div>. Upon every change in Data

  useEffect(() => {
    if (Array.isArray(data)) {
      // Data is an array
      const movies = data
        .map((item) => {
          return `<img src="${item.poster_url}" alt="{item.title}" width="200 height="200" key="${item.id}
          <h4>Title : ${item.title}<h4/>
        <p>Description: ${item.overview}</p>
        <p>Release Date: ${item.release_date}</p>
        `;
        })
        .join("");
      setMovies(movies);
    } else {
      // Data is an object
      setMovies(`<img src="${data.poster_url}" alt="Image" width="200" height="200">
        <h4>Title : ${data.title}<h4/>
        <p>Description: ${data.overview}</p>
        <p>Release Date: ${data.release_date}</p>
        `);
    }
  }, [data]);

  return (
    <div id="movie-container" dangerouslySetInnerHTML={{ __html: movies }}>
       
      {/* We can not be using data.map here as the API only returns one object. 
      However in situation where API returns multiple objects in future (multiple movies), we will need the map feature
      Thus we are adding a condition here  
      
      TODO we used dangerouslySetInnerHTML attribute here as document.getElementById doesn't work in React javascript
      */}
    </div>
  );
};
