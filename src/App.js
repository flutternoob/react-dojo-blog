//import logo from './logo.svg';
import Navbar from './navBar';
import Home from './Home';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Create from './create';
import BlogDetails from './blogdetails';
import NotFound from './NotFound';

function App() {
  //const title = "Welcome to the new blog";
  //const likes = 50;
  //const link = "https://www.google.com";
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        {/* <h1>{ title }</h1>
        <p>Liked { likes } times</p>
        <p>{10}</p>
        <p>{"hello, ninjas"}</p>
        <p>{[1,2,3,4,5]}</p>
        <p>{Math.random() * 10}</p>
        <a href={link}>Google Site</a> */}

       {/*  <Home /> */}

       <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/create" element={<Create />}></Route>
        <Route exact path="/blogs/:id" element={<BlogDetails />}></Route>
        <Route exact path="*" element={<NotFound />}></Route>
       </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
