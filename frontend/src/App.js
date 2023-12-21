import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Editbook from './pages/Editbook';
import Addbook from './pages/Addbook';
import "./styles/style.css"

function App() {
  return (
    <div className='app'> 

<BrowserRouter>

<Routes>

    <Route path='/' exact Component={Home}/>
    <Route path='/edit/:id_book' Component={Editbook}/>
    <Route path='/add' Component={Addbook}/>


</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
