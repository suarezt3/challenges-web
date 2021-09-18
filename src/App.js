import './App.css';
import { BoxProjects } from './components/BoxProjects/BoxProjects';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <BoxProjects />
      <Footer />
    </div>
  );
}

export default App;
