import './App.css';
// import Form from './components/Form';
// import Results from './components/Results';
import UserForm from './components/UserForm';
import ValidatorForm from './components/ValidatorForm';

import React, { useState } from 'react'

function App() {
  const [state, setState] = useState({
    // firstName: '',
    // lastName: '',
    // email: '',
    // password: '',
    // confirmpassword: '',
    username: '',
    email: '',
    password: '',
  })
  return (
    <div className="App">
      {/* <Form inputs={state} setInputs={setState} />
      <Results data={state} /> */}
      <UserForm user={user} setUser={setUser} />
      <ValidatorForm />
      <UserData {...user} />
    </div>
  );
}


export default App;
