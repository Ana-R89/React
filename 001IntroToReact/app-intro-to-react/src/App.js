//import './App.css';
//import PrimerReactJsx from './components/PrimerReactJsx'
import PersonCard from './Components/PersonCard'
import UserForm from './Components/UserForm'
// import Header from './Components/Header';
// import Navigation from './Components/Navigation';
// import Main from './Components/Main';

import { ReactDOM } from 'react-dom';



function App() {
  return (
    <div className="App">
      {/* <PrimerReactJsx /> */}
      <UserForm />
      <PersonCard firstName='Jane' lastName='Doe' age='45' hairColor='Black' />
      <PersonCard firstName='John' lastName='Smith' age='88' hairColor='Brown' />
      <PersonCard firstName='Juanito' lastName='Perez' age='35' hairColor='Red' />
      {/* <Header />
      <Navigation />
      <Main /> */}
    </div>
  );
}
export default App;
