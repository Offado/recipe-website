import './App.css';
import FooterPage from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import ImproveSkills from './Components/ImproveSkills/improveSkills';
import QuoteSection from './Components/QuoteSection/QuoteSection';
import Section from './Components/Sections/Section';
import TopChef from './Components/TopChef/TopChef';

function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <ImproveSkills />
      <QuoteSection />
      <TopChef />
      <FooterPage />
    </div>
  );
}

export default App;
