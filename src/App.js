import './App.css';
import FooterPage from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Search from './Components/Search/Search';
import Section from './Components/Sections/Section';

function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <Search />
      <FooterPage />
    </div>
  );
}

export default App;
