import { useState, useEffect } from "react";

const Fetch = () => {
  const [cars, setCars] = useState(null);
  const [pending, setPending] = useState(true); //This will be used to check rendered data and conditions
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/cars")
        .then((res) => {
          if (!res.status == 200) {
            throw Error("Facing Problem fetching data. Please try again"); // custom error in jsx
          }

          return res.json(); // converting the json data to javascript object
        })
        .then((data) => {
          setCars(data); // setting the array to the state: cars
          console.log(cars); // printing array but notice that this will print null. WHY? Check bottom notes
          console.log(data); // this will successfully print the array data

          setPending(false);
          setError(null);
        })
        .catch((err) => {
          setPending(false);

          // Instead of simply logging the error in console, we will show it on page using useState
          setError(err.message); // message is an attribute of error
        });
    }, 3000); //* The only purpose of setTimeout is to render the loading status. Not needed in realtime project
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {pending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {cars &&
        cars.map((car) => (
          <div key={car.id}>
            <p>Car Name: {car.model}</p>
            <button>Remove</button>
          </div>
        ))}
    </div>
  );
};

export default Fetch;

/* 
! NOTES
? useEffect render at initial load but fetch takes time to load the data from API
? the reason why it is printing null in console is because the useState is set to null at initialization at line:4
? we either need to put another .then hook and print the state or we can apply a setTimeout to wait for the data to load
*/
