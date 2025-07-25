const ClickHandler = () => {
    
    const clickMe = () => {
        console.log("You clicked me")
    }

    const clickMeAgain = (name) => {
        console.log("Welcome " + name)
    }


    return (
        <div>
            <button onClick={clickMe}>Click Me</button>

            {/* 
            // * Notice that clickMe has not been passsed as function here but a dynamic value
            // * because we do not want to call the function as soon as page loads (but on click event)
            */}

            <button onClick={() => clickMeAgain("Yashasvi")}>Click Again</button>

            {/* 
            // * Reason for anonymous arrow function is that we wish to passs parameters in it.
            // * This is to wrap the process in a function.
            */}
        </div>
    )
}

export default ClickHandler