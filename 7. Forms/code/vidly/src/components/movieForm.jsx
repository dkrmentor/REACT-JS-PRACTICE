import React from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";


const MovieForm = () => {
    let { id } = useParams(); 
    const history = useHistory()

  return (
    <>
      <h1>
        MovieForm
        {id}
      </h1>
      <button className="btn-primary"
      onClick={()=>{history.push("/movies")}}
      >
          Save
      </button>
    </>
  );
};

export default MovieForm;
