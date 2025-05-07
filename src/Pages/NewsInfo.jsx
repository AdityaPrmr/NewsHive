import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function NewsInfo() {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the news item from an API
    // fetch(`https://localhost:3000/news/${id}`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setNewsItem(data);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     setError(error);
    //     setLoading(false);
    //   });
    const getData = async()=>{
        try
        {
        const data  = await axios.post("https://newshive-express-1.onrender.com/newsInfo",{id});
        if(data.status == 200)
        {
            setNewsItem(data.data[0]);
            console.log(data.data[0]);
            setLoading(false);
        }
        else
        {
            setError(error);
            setLoading(false);
        }
        }
        catch(error)
        {
            console.log(error);
        }
    };
    getData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!newsItem) {
    return <div>News not found. Please go back and try again.</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white p-6 rounded-lg shadow-md border border-[#E5E5E5]">
        <img
          src={"https://newshive-express-1.onrender.com/images/" + newsItem.media.path}
          alt={newsItem.title}
          className="w-full h-64 object-cover rounded-md"
        />
        <h3 className="text-3xl font-bold mt-4">{newsItem.title}</h3>
        <p className="mt-2 text-[#555555]">{newsItem.description}</p>
        <p
          className="mt-4 text-lg"
          dangerouslySetInnerHTML={{ __html: newsItem.content }}
        ></p>
      </div>
    </div>
  );
}

export default NewsInfo;