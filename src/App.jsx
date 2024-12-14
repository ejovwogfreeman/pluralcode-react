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

// import Hello from "./components/Hello";
// import Message from "./components/Message";
// import Learn from "./components/Learn";
// import Form from "./components/Form";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  // let name = "Godbless";
  // let age = 35;
  // // let color = "blue";
  // let color = false;
  return (
    <Router>
      {/* <Hello name={name} age={age} />
      <Message name={name} color={color} /> */}
      {/* <Learn isGoal={true} /> */}
      {/* <Learn /> */}
      {/* <Form /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

// import { Component } from "react";
// import Hello from "./components/Hello";

// class App extends Component {
//   render() {
//     return (
//       <>
//         <Hello />
//       </>
//     );
//   }
// }

// export default App;
