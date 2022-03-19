import { useState } from 'react';
import Header from './containers/header/header';
import './App.css';
import TodoApp from './containers/todo-app/todo-app';
import Horloge from './components/horloge/horloge';
import DateDuJour from './components/date-du-jour/date-du-jour';


function App() {

  const [display, setDisplay] = useState(false);

  const handleToggleDisplay = () => {
    setDisplay(c => !c);
  };

  return (
    <div className="App">
      <Header />
      <TodoApp/>
      <h1>Exo 06 - Le cycle de vie</h1>

      <button onClick={handleToggleDisplay}>Toggle</button>

      {display ? (
       <Horloge />
       ): (
         <DateDuJour />
       )}
    </div>
  );
 }

 



export default App;
