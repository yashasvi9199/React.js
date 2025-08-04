import axios from "axios";
import { Fragment, useEffect, useState } from "react";

export const Mapp = () => {
  const API = "https://api.imgflip.com/get_memes";
  const [memes, setMemes] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(API);
    console.log(res.data.data.memes);

    setMemes(res.data.data.memes);
    console.log("PRINTING MEMEME", memes);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
        {/* Slicing the array as I only wish to see top 3. There are 100 meme templates in total in API */}
      {memes.slice(0, 3).map((meme) => {
        return (
          <Fragment key={meme.id}>
            <h5>{meme.name}</h5>
            <img
              src={meme.url}
              alt={meme.captions}
              height={meme.height}
              width={meme.width}
            />
          </Fragment>
        );
      })}
    </div>
  );
};
