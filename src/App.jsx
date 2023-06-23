import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/dashboard/Dashboard'
import Activities from './pages/activities/Activities';
import Species from './pages/species/Species';
import AddPlanting from './pages/planting/Add Planting Activity';
import Questionnaire from './pages/questionnaire/Questionnaire';
import Main from './pages/questionnaire/Main';
import Result from './pages/questionnaire/Result';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/'>
      <Route index element = {<Home/>}/>
      <Route path='activities' element = {<Activities/>}/>
      <Route path='/species' element ={<Species/>}/>
      <Route path='/planting' element= {<AddPlanting/>}/>
      </Route>
      <Route path='/main' element ={<Main/>}/>
      <Route path='/questionnaire' element ={<Questionnaire/>}/>
      <Route path='/result' element = {<Result/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
