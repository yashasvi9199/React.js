import { useState } from "react";
import Child from "./PropsChild";

const Parent = () => {
  const [data, setData] = useState([
    { sr: 1, fname: "Aayush", lname: "Agarwal" },
    { sr: 1, fname: "Paresh", lname: "Sisodiya" },
    { sr: 1, fname: "Zafar", lname: "Khan" },
  ]);

  return (
    <div>
      <Child data={data} title="Student Data" />
      {/* 
            We passed information/data as props to Child Component here
            The funstion 'setData can also be sent as an object attribute here
            */}
    </div>
  );
};

export default Parent;
