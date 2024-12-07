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
import "./Hello.css";

function Hello() {
  return <h1>Hello from hello component</h1>;
}

export default Hello;
