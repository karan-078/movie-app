import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context";

const MovieList = () => {
  const { movie, Loading } = useGlobalContext();

  if (Loading) {
    return  <div className="grid place-items-center h-[70vh] w-npm[100vw]">
       <div className="w-52 m-auto ">
        <h1 className="text-center font-semibold text-xl">Loading...</h1>
       </div>
    </div>

  }
  return (


  
      <div className="  pt-8 pb-8 p-4 flex   flex-wrap gap-6 mt-8 mb-8 m-auto md:w-[68vw] lg:w-[68vw]" >
        
        {movie.map((movie) => {
          const { imdbID, Title, Poster } = movie;
          const movieName = Title.substring(0, 15);
          return ( 

            
            <Link to={`/moviedetail/${imdbID}`} key={imdbID} className="">
             
                <div className="card-details  h-[25rem] w-[20rem] mt-5 flex-col  items-center p-4">
            

               
                    <img
                      src={Poster}
                      alt={imdbID}
                      className="w-72 h-72 object-cover m-auto rounded-sm image1"
                    />
                    
              
              <h2 className="mt-2 font-bold">
                    {/* {movieName.length >= 15 ? `${movieName}...` : movieName} */}
                    {movieName}
            </h2>
              </div>
            </Link>
         
          );
        })}
      </div>
  
  );
};

export default MovieList;
