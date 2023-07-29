import logo from './logo.svg';
import './App.css';
import { lazy ,Suspense} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route,Switch, Redirect  } from "react-router-dom";
import { Provider } from 'react-redux';
import store from "../src/store/configureStore"

const WriteBlog =lazy(()=>import('./page/WriteBlog'));
const Registration=lazy(()=>import('./page/Registration')) ;
const SignIn =lazy(()=>import('./page/SignIn'));

const Home = lazy(()=>import("./page/Home"))
const Navbar = lazy(()=> import("./components/Navbar"))
const ViewBlog = lazy(()=> import("./page/ViewBlog"))
const About = lazy(()=> import("./page/About"))
const Blogs = lazy(()=> import('./page/Blogs'))
function App() {  

  return (
   <div className='App' >
   <Provider store={store}>
   <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
  
     <Switch>
     <Route exact path="/" render={() => <><Navbar /><Home /></>} />
     <Route path="/signIn" component={SignIn}/>
     <Route path="/registration" component={Registration}/>
     <Route path="/writeBlog" render={() => <><Navbar /><WriteBlog /></>} />  
     <Route path="/viewBlog" render={() => <><Navbar /><ViewBlog /></>} />
     <Route path="/about" render={() => <><Navbar /><About /></>} />
     <Route path="/blogs" render={() => <><Navbar /><Blogs /></>} />
     </Switch>
    </Suspense>
    </BrowserRouter>
    </Provider>
    </div>
 
  );
}

export default App;
