import './App.css';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/nav';
import Home from './pages/home';
import About from './pages/about';
import Footer from './components/footer';
import Fourohfour from './pages/fourohfour';
import Projects from './pages/projects';

function App() {
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
