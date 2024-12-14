import React, { useState } from "react";
import { MadeGoal, MissedGoal } from "./Goal";

// const Learn = ({ isGoal }) => {
const Learn = () => {
  //   if (isGoal) {
  //     return <MadeGoal />;
  //   } else {
  //     return <MissedGoal />;
  //   }
  //   let name = "godbless";
  //   let count = 1;
  //   const [count, setCount] = useState(0);
  //   const increaseCount = () => {
  //     setCount(count + 1);
  //     console.log(count);
  //   };
  // a state or the usestate can hold anything
  //   number
  //   const [myState, setMyState] = useState(0);
  //   string
  //   const [myState, setMyState] = useState("godbless");
  // boolean
  //   const [myState, setMyState] = useState(false);
  //   object
  //   const [user, setUser] = useState({
  //     username: "user101",
  //     email: "user@gmail.com",
  //   });
  //   const changeState = () => {
  //     setMyState(!myState);
  //   };
  //   const changeState = (prev) => {
  //     setUser({ ...prev, email: "user101@gmail.com" });
  //     console.log(user);
  //   };
  //   let user = false;
  //   if (user) {
  //     return (
  //       <>
  //         <h1>Hello user</h1>
  //       </>
  //     );
  //   } else
  //     return (
  //       <>
  //         <h1>Welcome guest</h1>
  //       </>
  //     );
  //   return (
  //     <div>
  //       {/* <h1>
  //         Hello my name is {user.username} and my email is {user.email}
  //       </h1>
  //       <button onClick={changeState}>change state</button> */}
  //       {/* <h1>Hello my count is {count}</h1> */}
  //       {/* <button onClick={() => increaseCount()}>click me</button> */}
  //     </div>
  //   );

  //   let user = false;

  //   let users = ["freeman", "lancelot", "lancelot", "maxwell", "Collins"];
  let users = [];

  let blogs = [
    { id: 1, title: "the new blog One" },
    { id: 2, title: "the new blog Two" },
    { id: 3, title: "the new blog Three" },
    { id: 4, title: "the new blog Four" },
    { id: 5, title: "the new blog Five" },
  ];
  return (
    // <>{users.length > 0 && users.map((user, i) => <li key={i}>{user}</li>)}</>
    <>
      {/* {users.length > 0
        ? users.map((user, i) => <li key={i}>{user}</li>)
        : "No user on this list"} */}
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h1>{blog.title}</h1>
        </div>
      ))}
    </>
  );
};

export default Learn;
