// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   );
// }

// export default App;

// function App() {
//   return (
//     <>
//       <h1>Hello</h1>
//       <p>Hello i am a paragraph</p>
//     </>
//   );
// }

// export default App;

// const App = () => {
//   return (
//     <>
//       <h1>Hello world</h1>
//     </>
//   );
// };

// export default App;

import { Component } from "react";
import Hello from "./components/Hello";

class App extends Component {
  render() {
    return (
      <>
        <h1>Hello class based component</h1>
        <Hello />
      </>
    );
  }
}

export default App;
