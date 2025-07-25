import { useState } from "react";

// *useState is a Hook that we can use to change the value or attributes of a component
// *The useState Hook returns two values : the current state(variable) and function to change its value
// TODO Syntax : const [variable, function] = useState(initial value)
// *Notice the function is without () because we are not calling it

const ChangeVariable = () =>{

    const [name, setName] = useState('Yash');

    const changeName = () => {
        if(name === 'Yash'){
            setName('Yashasvi');
            console.log("Name changed")
        }else if (name === 'Yashasvi'){
            setName('Yash');
            console.log("Name changed")
        }
    }

    return (
        <div>
            <h3>{ name }</h3>
            <button onClick={ changeName }>Clck to change</button>
        </div>
    )
}

export default ChangeVariable