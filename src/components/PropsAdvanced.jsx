const PropAd = () => {
  return (
    <div>
      <ProfileCard
        name="Yash"
        age={28}
        greeting={
          <div>
            <strong>Hi Yash!</strong>
          </div>
        }
      >
        <p>Hobbies : Coding, Gaming, Cooking</p>
        <button>Click Me!</button>
      </ProfileCard>
    </div>
  );
};

function ProfileCard(props) {
    return(
        <>
            <strong>Name: {props.name}</strong>
            <p>Age: {props.age}</p>
            <p>{props.greeting}</p>
            <div>{props.children}</div>
        </>
    )
}

export default PropAd;
