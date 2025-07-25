import { useState } from "react";

const MapCycle = () => {

    // Creating a useState of arrays
    const [blogs, setBlogs] = useState([
        {title: 'My test website', author: 'Yash', id: 1},
        {title: 'My second website', author: 'Yashasvi', id: 2},
        {title: 'My third website', author: 'Mario', id: 3},
    ]);

    // The reason we use map is to cycle through every element in array
    // We need a key for every element in array. It should be a unique value since JSX cannot differentiate between same elements

    /* 
    ? notice the whole map is inclosed in {} braces as it is a part of JSX and not HTML (in return tags)
    ? notice the (blog) after map
    ? That means we are passing a function to map. A callback function () => ()     and 'NOT' () => {}
    */ 
    return (
        <div>
            {blogs.map(
                (blog) => (
                    <div key={blog.id}>
                        <h3>{blog.title}</h3>
                        <p>Written by {blog.author}</p>
                    </div>
                )
                
            )}
        </div>
    )
}

export default MapCycle