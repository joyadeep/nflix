import {Routes,Route} from 'react-router-dom';
import {Header } from "./components/Header";
import {Movielist} from './components/Movielist';
import {Movie} from './components/Movie';
function App() {
  return (
    <div className="bg-gray-700 w-full min-h-screen pb-10">
      <Header/>
    <Routes>
      <Route path="/" element={ <Movielist/> } />
      <Route path="/movie" element={ <Movie/> } />
      

    </Routes>
    </div>
  );
}

export default App;
