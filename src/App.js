import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Routes, Route } from 'react-router-dom';
import LazyComponent from "./LazyComponent";
import MyTabComponent from "./MyTabComponent";
// import { useSelector, useDispatch } from "react-redux";
// import { addCounter, resetCounter } from "./redux/actions/index";
import Navbar from "./Navbar";
import Products from "./Products";
import Calendar from "./Calendar";
import { Button, ThemeProvider, createTheme } from "@mui/material";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { MyDocument } from "./Document";
import Calendar123 from "./Calendar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";

// const imageUrls = [
//   'http://localhost:3000/assets/img1.jpg',
//   'http://localhost:3000/assets/img2.jpg',
//   'http://localhost:3000/assets/img3.jpg',
//   'http://localhost:3000/assets/img4.jpg',
//   'http://localhost:3000/assets/img5.jpg',
//   'http://localhost:3000/assets/img1.jpg',
//   'http://localhost:3000/assets/img2.jpg',
//   'http://localhost:3000/assets/img3.jpg',
//   'http://localhost:3000/assets/img4.jpg',
//   'http://localhost:3000/assets/img5.jpg',
//   'http://localhost:3000/assets/img1.jpg',
//   'http://localhost:3000/assets/img2.jpg',
//   'http://localhost:3000/assets/img3.jpg',
//   'http://localhost:3000/assets/img4.jpg',
//   'http://localhost:3000/assets/img5.jpg',
//   'http://localhost:3000/assets/img1.jpg',
//   'http://localhost:3000/assets/img2.jpg',
//   'http://localhost:3000/assets/img3.jpg',
//   'http://localhost:3000/assets/img4.jpg',
//   'http://localhost:3000/assets/img5.jpg',
//   'http://localhost:3000/assets/img1.jpg',
//   'http://localhost:3000/assets/img2.jpg',
//   'http://localhost:3000/assets/img3.jpg',
//   'http://localhost:3000/assets/img4.jpg',
//   'http://localhost:3000/assets/img5.jpg',
//   'http://localhost:3000/assets/img1.jpg',
//   'http://localhost:3000/assets/img2.jpg',
//   'http://localhost:3000/assets/img3.jpg',
//   'http://localhost:3000/assets/img4.jpg',
//   'http://localhost:3000/assets/img5.jpg',
//   'http://localhost:3000/assets/img1.jpg',
//   'http://localhost:3000/assets/img2.jpg',
//   'http://localhost:3000/assets/img3.jpg',
// ];

// const tabData = [
//   { title: "Tab 1", content: <div>Tab 1 Content</div> },
//   { title: "Tab 2", content: <div>Tab 2 Content</div> },
//   { title: "Tab 3", content: <div>Tab 3 Content</div> },
// ];

function App() {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });
  // const { amount } = useSelector((state) => state.counter);
  // const dispatch = useDispatch();

  // const handleAdd = () => {
  //   dispatch(addCounter());
  // };

  // const handleReset = () => {
  //   dispatch(resetCounter());
  // };
  return (
    <>
     {/* <Navbar /> */}
      {/* <Products /> */}
      {/* <ThemeProvider theme={theme}>
        <Calendar123 />
      </ThemeProvider> */}
    
      {/* <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={<Contact/>} />
      </Routes> */}

      <Routes>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
      </Routes>
    </>
    //     <h4>{amount}</h4>
    //     <button onClick={handleAdd}> ADD </button>
    //     <button onClick={handleReset}> RESET </button>
    //   </div>
  );
}

export default App;
