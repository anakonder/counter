import { Counter } from "../Counter/Counter";
import { Header } from "../Layout/Header/Header";
import { Modal } from "../Modal/Modal";

import css from './App.module.css'



function App() {
  return (
    <div className="App">
      <div className={css.appContainer}>
        <Header/>
        <Counter/>
        <Modal/>
      </div>
      
    </div>
  );
}

export default App;
