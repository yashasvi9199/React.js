import { useState, useEffect } from "react";

//* useEffect code runs everytime code reders (loads, refresh, update in useState)

const ChangeVar = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect function ran");
  });

  return (
    <div>
        <button onClick={() => setCount((count) => count + 1)}>   count is {count}  </button>
    </div>
  );
};

export default ChangeVar;
