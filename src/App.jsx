import './App.css';
import {Nav} from "./components/nav";
import {Home} from "./components/home";
import { Route, Routes } from "react-router";
import {Video} from "./components/video";

function App() {
  return (
    <div className="App">
    <Nav />
    {/* <Home /> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/video/:id" element={<Video />} />

    </Routes>
    </div>
  );
}

export default App;
