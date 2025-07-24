const DynamicValue = () => {

    const title = ' Welcome to tutorials ';
    const likes = 50;
    const link =  'www.google.com'


    return (
        <>
            <h4>{title}</h4>
            <p>Liked {likes} times</p>
            <p>Printing Arrays { [1,2,3,4] }</p>
            <p>Math operation { Math.random() }</p>
            <a href= { link }>Google</a>
        </>
    )
}

export default DynamicValue