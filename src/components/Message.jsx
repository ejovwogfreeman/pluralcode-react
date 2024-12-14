import { useState } from "react";

const Message = ({ name, color }) => {
  // const [school, setSchool] = useState("w3school");
  const [school, setSchool] = useState(true);

  // setSchool("pluralcode");
  // function updateSch() {
  //   return setSchool("pluralcode");
  // }

  // const updateSch = () => setSchool("pluralcode");

  return (
    <>
      <h2 style={{ color: color ? "blue" : "red" }}>
        Hello {name}, my school is {school ? "pluralcode" : "w3school"}
      </h2>
      {/* <button onClick={updateSch}>click me</button> */}
      <button onClick={() => setSchool(!school)}>click me</button>
    </>
  );
};

export default Message;
