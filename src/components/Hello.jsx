// inline css
// function Hello() {
//   <h1 style={{ textAlign: "center", color: "red", backgroundColor: "blue" }}>
//     Hello from hello component
//   </h1>;
// }

// // internal css
// function Hello() {
//   return <h1 style={style}>Hello from hello component</h1>;
// }

// const style = {
//   textAlign: "right",
//   color: "green",
// };

// external css
// import "./Hello.css";

// passing props by using the props key word
// function Hello(props) {
//   return (
//     <h1>
//       Hello my name is {props.name} and i am {props.age} years old{" "}
//     </h1>
//   );
// }

// export default Hello;

import "./Hello.css";

// passing props by destructuring
function Hello({ name, age }) {
  return (
    <h1>
      Hello my name is {name} and i am {age} years old{" "}
    </h1>
  );
}

export default Hello;
