import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Nav from './components/Nav';
// import './App.css';
import Home from './components/Home';
import View from './components/View';

function App() {
  return (
    <div >
<BrowserRouter>
<Nav/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/view' element={<View/>}/>
  </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
