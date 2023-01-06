import './App.css';
import './styles/styles.scss'

import { NavBar } from './components/Navbar';
import { RatesTableContainer } from './components/RatesTableContainer';
import { ConverterContainer } from './components/ConverterContainer';

function App() {
  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>
{/*       <RatesTableContainer></RatesTableContainer> */}
      <ConverterContainer></ConverterContainer>
    </>
  );
}

export default App;
