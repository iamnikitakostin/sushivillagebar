import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';
import AboutUs from './components/AboutUs/AboutUs';
import Gallery from './components/Gallery/Gallery';
import ContactUs from './components/ContactUs/ContactUs';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Landing/>
      <AboutUs/>
      <Gallery />
      <ContactUs />
    </div>
  );
}

export default App;
