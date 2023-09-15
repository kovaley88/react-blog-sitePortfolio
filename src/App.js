import "./styles/main.css"


import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Projects from "./components/pages/Projects";
// import Contacts from "./components/pages/Contacts";
// import Home from "./components/pages/Home";


function App() {

  return (
    <div className='App'>
      <Navbar />
      {/* <Home /> */}
      <Projects />
      {/* <Contacts /> */}
      <Footer />
    </div>
  );
}

export default App;
