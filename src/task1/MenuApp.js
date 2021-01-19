import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from './components/Menu';
import HomePage from './components/HomePage';
import DriftPage from './components/DriftPage';
import ForzaPage from './components/ForzaPage';
import TimeAttackPage from './components/TimeAttackPage';

function MenuApp() {
  return (
    <Router>
      <div className="menu-app">
        <Menu />
        <div className="page">
          <Route path="/" component={HomePage} exact/>
          <Route path="/drift" component={DriftPage} />
          <Route path="/timeattack" component={TimeAttackPage} />
          <Route path="/forza" component={ForzaPage} />
        </div>
      </div>
    </Router>
  );
}

export default MenuApp;