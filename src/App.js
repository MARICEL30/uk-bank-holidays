import './App.css';
import { WomanIcon } from './WomanIcon';
// import pic  from '../src/assets/uk-b-holidays.svg';

function App() {
  return (
    <div className="App">
      <header className="header-container">
        {/* <img src={pic} className="App-header" alt="pic" /> */}
        <WomanIcon/>
      </header>
      <p>Hello this is bank holidays uk!!</p>
    </div>
  );
}

export default App;
