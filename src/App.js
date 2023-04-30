import logo from './logo.svg';
import './App.css';
import { lazy ,Suspense} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = lazy(()=>import("./page/Home"))
const Navbar = lazy(()=> import("./components/Navbar"))
function App() {
  return (
   <div className='App'>
    <Suspense fallback={<div>Loading...</div>}>
     <Navbar/>
     <Home />
  
    </Suspense>
    </div>
 
  );
}

export default App;
