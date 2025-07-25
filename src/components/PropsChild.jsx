const Child = (props) => {
  const data = props.data;
  const title = props.title;
  const handleDelete = props.handleDelete;

  //* We extracted the attributes of props sent from Parent component to here using JSX/javascript
  //* Altewrnatively we can use destructuring
  //TODO Syntax : const Child = ({data, title}) => {}

  return (
    <div>
      <h3 style={{ color: "red" }}>{title}</h3>
      <hr />
      {/* Begingnning of JSX */}
      {/* Notice the usage of {} and (). 
        {} = JSX in HTML and 
        () is HTML in jsx */}

      {data.map((stud) => (
        <div key={stud.sr}>
          <p>First Name : {stud.fname}</p>
          <p>Last Name : {stud.lname}</p>

          {handleDelete && ( //This is to check is handleDelete attr is present. If yes then =>
            <button onClick={() => handleDelete(stud.sr)}>Delete</button>
          )}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Child;

/* 
Notice something here

We passed the button in child since we wish to render the button with every data cell here or Every item in array
but the original function is written in Parent component, since setState cannot be transferred as prop
*/
