import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { ThemeContext } from './contexts/ThemeContext';
import { Main } from './pages'
import { BackToTop } from './components'
import ScrollToTop from './utils/ScrollToTop'

import './App.css'

function App() {

  const { theme } = useContext(ThemeContext);

  return (
    <div className="app">
      <Router>
        <ScrollToTop/>
        <Switch>
          <Route path="/" exact component={Main} />
          {/* <Route path="/blog" exact component={BlogPage} /> */}
          {/* <Route path="/projects" exact component={ProjectPage} /> */}
          <Route path="/error" component={()=><h1>Sorry for inconvenience</h1>} />

          <Redirect to="/error"  />
        </Switch>
      </Router>
      <BackToTop />
    </div>
  );
}

export default App;
