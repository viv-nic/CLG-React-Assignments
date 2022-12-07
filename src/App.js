import './App.css';
import { Route, Switch } from 'react-router-dom';
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
import React, { useContext } from 'react';
import { ThemeContext } from "./theme/ThemeProvider";


function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.darkMode;
  console.log(darkMode);
  
  return (
    <div className="App">
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
          <Route path="*">
            <Fourohfour />
          </Route>
        </Switch>
      </main>
      <Footer />
      
    </div>
  );
}

export default App;
