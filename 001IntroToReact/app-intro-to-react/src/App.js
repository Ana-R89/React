import './App.css';
import PrimerReactJsx from './components/PrimerReactJsx'
import PersonCard from './components/PersonCard'


function App() {
  return (
    <div className="App">
      {/* <PrimerReactJsx /> */}
      <PersonCard firstName='Jane' lastName='Doe' age='45' hairColor='Black' />
      <PersonCard firstName='John' lastName='Smith' age='88' hairColor='Brown' />
      <PersonCard firstName='Juanito' lastName='Perez' age='35' hairColor='Red' />
    </div>
  );
}


export default App;
