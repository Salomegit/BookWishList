import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Editbook from './pages/Editbook';
import Addbook from './pages/Addbook';

function App() {
  return (
<BrowserRouter>

<Routes>

    <Route path='/' exact Component={Home}/>
    <Route path='/edit' Component={Editbook}/>
    <Route path='/add' Component={Addbook}/>


</Routes>
</BrowserRouter>
  );
}

export default App;
