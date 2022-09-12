import './App.css';
import Nav from './components/nav/Nav';
import Chartcontent from './components/chart/Chartcontent';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Nav />
        <Chartcontent  />
        <Footer />


      </header>
    </div>
  );
}

export default App;
