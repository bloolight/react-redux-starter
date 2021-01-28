import './App.css';
import { Chat } from './components/chat';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="m-0">Cognigy Chat</p>
      </header>
      <div className="App-body">
        <Chat/>
      </div>
    </div>
  );
}

export default App;
