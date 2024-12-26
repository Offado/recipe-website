import './App.css';
import FooterPage from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import ImproveSkills from './Components/ImproveSkills/improveSkills';
import QuoteSection from './Components/QuoteSection/QuoteSection';
import Search from './Components/Search/Search';
import Section from './Components/Sections/Section';

function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <ImproveSkills />
      <QuoteSection />
      <Search />
      <FooterPage />
    </div>
  );
}

export default App;
