import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=a5ef1268`);
      setDetails(response.data);
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <img src={details.Poster} alt={details.Title} />
      <h2>{details.Title}</h2>
      <h3>{details.Actors}</h3>
      {details.Ratings?.map((rating, index) => (
        <div key={index}>
          <h4>{rating.Source}</h4>
          <p>{rating.Value}</p>
        </div>
      ))}
    </div>
  );
};

export default Detail;
