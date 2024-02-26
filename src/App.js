
import './App.css';
import Home from "../src/Pages/Home/Home";
import Signup from './Pages/Signup/Signup';

import{BrowserRouter as Router , Routes,Route} from "react-router-dom";
function App() {
  return (
    <>
     
      
      <Router>
        <Routes>
          <Route path='/'element={<Home/>}/>
          <Route path='/Signup'element={<Signup/>}/>
         </Routes>
      </Router>
    </>
  );
}

export default App;
