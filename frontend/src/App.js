
import './App.css';
import Chat from './pages/Chat';
import Home from './pages/Home';
import { Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Route path='/' component={Home} exact />
      <Route path='/chats' component={Chat} />
    </div>
  );
}

export default App;
