import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom"


const RouteComp = () => {

    // const {id} = useParams();   //Getting params from URL
    const [inputValue, setInputValue] = useState('');
    const [cars, setCars] = useState([])
    const [allCars, setAllCars] = useState([])

    useEffect( () => {
        const getData = async() => {

            fetch("http://localhost:8000/cars")
            .then( res => {
                console.log("This is first block")
                return res.json()
            })
            .then( data => {
                setAllCars(data)    //Store all data from fetch API
                // setCars(data)       //initializing cars with all data

            })
            .catch( err => {
                console.log("This is .catch. Here is output for 'ERROR'" + err)
            })

        }
        getData();
    },[])

    const handleChange = (e) => {
        const val = e.target.value.toLowerCase()
        setInputValue(val)
        
        console.log("Value of event " + val)
        console.log("Value of Inputs " + inputValue)

        const fliteredCars = allCars.filter( car => {
            return car.model.toLowerCase().includes(val)
        })
        setCars(fliteredCars)
        console.log("Value of cars " + cars)


        

    }


    return(
        <div>
            <h3>This is the Route Component</h3>
            <input type="text"  id="inputID" value = {inputValue} onChange={handleChange}
            style={{ fontSize: 64, padding: 10, width: 500 }}/>

            {inputValue && cars.map((car) => (
                    <div key={car.id}>  <p>Car Name: {car.model}</p>    </div>
      ))}
        </div>
    )
}

export default RouteComp