import { useParams } from "react-router-dom"

const RouteComp = () => {

    const {id} = useParams();   //Getting params from URL

    const fetchData = (id) => {
        console.log(id);
    }

    return(
        <div>
            <h3>This is the Route Component</h3>
            <input type="text"  id="inputID"/> <button onClick={() => fetchData(id)}>Submit</button>
        </div>
    )
}

export default RouteComp