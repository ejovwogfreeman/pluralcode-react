import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Hooks = ({ data, loading }) => {
  //   const [color, setColor] = useState("red");
  //   const [count, setCount] = useState(0);
  //   useEffect(<function>, <dependency>)

  //   useEffect(() => {
  //     console.log("use effect ran");
  //   }, [count]);

  //   const [timer, setTimer] = useState(0);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setTimer((prev) => prev + 1);
  //     }, 1000);

  //     return () => clearInterval(interval);
  //   }, []);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setTimer((timer) => timer + 1);
  //     }, 1000);
  //   });

  //   const [data, setData] = useState([]);
  //   const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     async function fetchData() {
  //       try {
  //         const res = await fetch("http://localhost:8000/posts");
  //         const apiData = await res.json();
  //         setData(apiData);
  //         console.log(data);
  //       } catch (err) {
  //         console.log("error getting data", err);
  //       } finally {
  //         setLoading(false);
  //       }
  //     }

  //     fetchData();
  //   }, []);

  //   if (loading) return <p>loading...</p>;

  return (
    <div>
      {data &&
        data.map((x) => (
          <div key={x.id}>
            <h2> {x.title}</h2>
            <p>
              {x.body.slice(0, 100)}...
              <Link to={`/detail/${x.id}`}>Read More</Link>
            </p>
          </div>
        ))}
      {/* <h1 style={{ color: color }}>Hello my color is {color}</h1>
      <button onClick={() => setColor("blue")}>blue</button>
      <button onClick={() => setColor("pink")}>pink</button>
      <button onClick={() => setColor("red")}>red</button>
      <button onClick={() => setColor("purple")}>purple</button>
      <button onClick={() => setColor("green")}>green</button>
      <h1>My count is {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <h1>My timer is {timer}</h1> */}
    </div>
  );
};

export default Hooks;
