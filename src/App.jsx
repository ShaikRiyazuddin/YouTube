import './App.css';
import {Nav} from "./components/nav";
import {Home} from "./components/home";
import { Route, Routes } from "react-router";
import {Video} from "./components/video";
import {Auth} from "./components/authentication";

function App() {
  return (
    <div className="App">
    {/* <Nav /> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/video/:id" element={<Video />} />
      <Route path="/auth" element={<Auth />} />


    </Routes>
    </div>
  );
}

export default App;
