import { useState, useEffect } from "react";

//* useEffect code runs everytime code reders (loads, refresh, update in useState)

const ChangeVar = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Yashasvi");

  //! will render at beginning and every change in page
  useEffect(() => {
    console.log("useEffect function ran without dependency");
  });

  //! will only render at the initial load
  useEffect(() => {
    console.log("useEffect function ran with empty dependency");
  }, [])

  //! will render at beginning and every change in state: name
  useEffect(() => {
    console.log("useEffect function ran with dependency");
    console.log("Name = " + name);
  }, [name])

  return (
    <div>
        <button onClick={() => setCount((count) => count + 1)}>   count is {count}  </button> <br />
        <button onClick={() => setName("Yash") } > Change </button>
    </div>
  );
};

export default ChangeVar;
