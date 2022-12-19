import './App.css';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import Nav from './components/nav';
import Home from './pages/home';
import About from './pages/about';
import Footer from './components/footer';
import Fourohfour from './pages/fourohfour';
import Projects from './pages/projects';
import EnquireForm from './components/enquireForm';
import TodoList from './pages/todoList';
import FoodGallery from './pages/foodGallery';
import Book from './pages/book';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from "./theme/ThemeProvider";
import AuthContext from './auth/auth-context';
import Login from './pages/login';
import Profile from './pages/profile';


function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.darkMode;
  let history = useHistory();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
      if (storedUserLoggedInInformation === "1") {
        setIsLoggedIn(true);
      }
  }, []);

  const loginHandler = (email, password, name) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
    setName(name);
    setEmail(email);
    history.push("/");
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    history.push("/");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        name: name,
        email: email,
        onLogin: loginHandler,
        onLogout: logoutHandler
      }}
    >
      
      <div className={darkMode ? "dark-theme" : "light-theme"}>
        <Router>
          <Nav />
          
          <main>
            <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            {/* you can add exact or not for extension path, but the main has to have exact in it */}
            <Route exact path={`/projects/todo-app`}>
              <TodoList />
            </Route>
            <Route exact path={`/projects/food-gallery`}>
              <FoodGallery />
            </Route>
            <Route exact path={`/projects/books`}>
              <Book />
            </Route>
            <Route exact path="/contact">
              <EnquireForm />
            </Route>
              {/* <Route path="/" exact component={Home}/>
                
              <Route path="/about" exact pages={About}/>
                
              <Route path="/projects" exact pages={Projects}/>
                
              <Route path={`/projects/todo-app`} exact pages={TodoList}/>
              
              <Route path={`/projects/food-gallery`} exact pages={FoodGallery}/>
              
              <Route path={`/projects/books`} exact pages={Book}/>
                
              <Route path="/contact" exact pages={EnquireForm}/> */}
              
              {!isLoggedIn && (
                <Route path={`/login`} exact pages={Login}/>
              )}
              {isLoggedIn && (
                <Route path={`/profile`} exact pages={Profile}/>
              )}
              <Route path="*">
                <Fourohfour />
              </Route>
            </Switch>
          </main>
        </Router>
       
        <Footer />
        
      </div>
    </AuthContext.Provider>
  );
}

export default App;
