import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../Context";
const MovieDetail = () => {
  const { id } = useParams();

  const [movie, setmovie] = useState("");
  const [Loading, setLoading] = useState(true);

  const fetchMovie = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.Response === "True") {
        setLoading(false);
        setmovie(data);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let fixTime = setTimeout(() => {
      fetchMovie(`${API_URL}&i=${id}`);
    }, 1000);

    return () => clearTimeout(fixTime);
  }, [id]);

  if (Loading) {
    return (
      <div className="grid place-items-center h-[70vh] w-npm[100vw]">
        <div className="w-52 m-auto ">
          <h1 className="text-center font-semibold text-xl">Loading...</h1>
        </div>
      </div>
    );
  }
  const { Poster, Title, Year, Actors,  Language, Plot } = movie;
  return (
    <div className=" h-[100vh] grid place-items-center">
      <div
        className="flex justify-center items-center flex-col bg-slate-200 w-[90vw] 
     p-12 gap-6 md:w-[60vw] md:flex-row"
      >
        <div>
          <figure>
            <img src={Poster} alt={Title} className="" />
          </figure>
        </div>
        <div className="content">
          <h2>
            {" "}
            <span>movie :</span>
            {Title}
          </h2>
          <h2>
            {" "}
            <span>Language :</span>
            {Language}
          </h2>
          <p>
            <span>Relesdyear :</span>
            {Year}
          </p>

          <p>
            {" "}
            <span>Actors :</span>
            {Actors}
          </p>
          <p>
            {" "}
            <span>Plot :</span>
            {Plot}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
