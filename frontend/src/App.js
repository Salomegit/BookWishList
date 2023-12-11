import { BrowserRouter as Router, Route, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    
    <Route path='/' Component={Home}></Route>
    </BrowserRouter>  
  );
}

export default App;
