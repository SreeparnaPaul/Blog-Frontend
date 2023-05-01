import logo from './logo.svg';
import './App.css';
import { lazy ,Suspense} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route,Switch, Redirect  } from "react-router-dom";
const Registration=lazy(()=>import('./page/Registration')) ;
const SignIn =lazy(()=>import('./page/SignIn'));

const Home = lazy(()=>import("./page/Home"))
const Navbar = lazy(()=> import("./components/Navbar"))
function App() {  

  return (
   <div className='App'>
   <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
  
     <Switch>
     <Route exact path="/" render={() => <><Navbar /><Home /></>} />
     <Route path="/signIn" component={SignIn}/>
     <Route path="/registration" component={Registration}/>
     </Switch>
    </Suspense>
    </BrowserRouter>
    </div>
 
  );
}

export default App;
