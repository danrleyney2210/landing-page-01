import Section02 from "./components/Section02";
import Home from "./components/Home";
import Information from "./components/Information";
import Mais from "./components/Mais";
import { GlobalStyle } from "./styles/global";
import Section03 from './components/Section03/index';
import Section04 from "./components/Section04";
import Section05 from "./components/Section05";
import { Section06 } from "./components/Section06";
import { Section07 } from "./components/Section07";
import { Section08 } from "./components/Section08";
import { Section09 } from "./components/Section09";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Home />
      <Information />
      <Mais />
      <Section02 />
      <Section03 />
      <Section04 />
      <Section05 />
      <Section06 />
      <Section07 />
      <Section08 />
      <Section09 />
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
