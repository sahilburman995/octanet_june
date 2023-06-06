 
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { Box } from '@mui/material';
function App() {
  return (<BrowserRouter>
  <Box width="400px"  sx={{}}>
   <Routes>
<Route path="/"element={<Home/>}/>

<Route path="/about"element={<About/>}/>
<Route path="/contact"element={<Contact/>}/>




   </Routes>
   </Box>

  </BrowserRouter>
  );
}

export default App;
