import React from "react";
import { useParams } from "react-router-dom";

const Detail = ({ data, loaing }) => {
  const params = useParams();
  console.log(params.id);
  return (
    <div>
      {data &&
        data.map((x) => (
          <>
            {x.id === Number(params.id) ? (
              <div key={x.id}>
                <h2> {x.title}</h2>
                <p>{x.body}</p>
              </div>
            ) : (
              ""
            )}
          </>
        ))}
    </div>
  );
};

export default Detail;
