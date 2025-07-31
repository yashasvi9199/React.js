import { useState } from "react";
import Child from "./PropsChild";

const Parent = () => {
  const [data, setData] = useState([
    { sr: 1, fname: "Aayush", lname: "Agarwal" },
    { sr: 2, fname: "Paresh", lname: "Sisodiya" },
    { sr: 3, fname: "Yash", lname: "Agarwal" },
  ]);

  const handleDelete = (id) => {
    console.log(id);
    const newData = (data.filter((stud) => stud.sr !== id));    //Showing results except the one with matching ID
    setData(newData);
  };

//!   This method is not usable however as the state changes only remain untill the page is refreshed

  return (
    <div>
      <Child data={data} title="Student Data" />
      {/* 
        We passed information/data as props to Child Component here
        The prop attributes being 'data and title'
        The function setData 'CAN NOT' be sent as an object attribute here unless made in a callback function (as done below)
     */}

     {/* Filtered Data as Props */}
      <Child data={data.filter((stud) => stud.lname == 'Agarwal')} title="Filtered Data" />

    {/* Deleting elements from array and passing callback functions as props */}
    <Child data={data} handleDelete={handleDelete} title= "Deleting Elements" />

    
    </div>
  );
};

export default Parent;
