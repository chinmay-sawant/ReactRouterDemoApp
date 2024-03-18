import {  Routes, Route } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { Login } from "./pages/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from "./pages/Navbar";
import { Home } from "./pages/Home";
import DataTable from "./pages/DataTable";
import { useEffect } from "react";
import { Counter } from "./pages/Counter";
import { ListofFood } from "./pages/ListofFood";

function App() {
  useEffect(() => {
    document.title = 'React Application Demo'; // Set the page title
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/table" element={<DataTable />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/listfood" element={<ListofFood />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
