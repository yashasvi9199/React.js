const Child = (props) => {
  const data = props.data;
  const title = props.title;

  //* We extracted the attributes of props sent from Parent component to here using JSX/javascript
  //* Altewrnatively we can use destructuring
  //TODO Syntax : const Child = ({data, title}) => {}

  return (
    <div>
      <h3>{title}</h3>
      <hr />
      {/* Begingnning of JSX */}

      {data.map((stud) => (
        <div key={stud.sr}>
          <p>First Name : {stud.fname}</p>
          <p>Last Name : {stud.lname}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Child;
