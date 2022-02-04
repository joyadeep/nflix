import {Routes,Route} from 'react-router-dom';
import {Header } from "./components/Header";
import {Movielist} from './components/Movielist';
import {Movie} from './components/Movie';
import {Landing} from "./components/Landing";
function App() {
  return (
    <div className="bg-gray-700 w-full min-h-screen pb-10">
      <Header/>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/movies" element={ <Movielist/> } />
      <Route path="/movie/:id" element={ <Movie/> } />
      

    </Routes>
    </div>
  );
}

export default App;
