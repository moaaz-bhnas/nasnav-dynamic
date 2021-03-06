import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import '../sass-basic-components/Container.scss';
import '../sass-basic-components/Button.scss';
import '../sass-basic-components/List.scss';
import '../sass-basic-components/Image.scss';
import '../sass-basic-components/Paragraph.scss';
import '../sass-basic-components/Logo.scss';
import '../sass-basic-components/Link.scss';
import CountrySection from './countries/CountrySection';
import Footer from './footer/Footer';
import NavboxPage from './NavboxPage/NavboxPage';
import NavstylePage from './NavstylePage/NavstylePage';
import ShoppingPage from './ShoppingPage/ShoppingPage';
import Editor360Page from './Editor360Page/Editor360Page';
import DashboardPage from './DashboardPage/DashboardPage';

class App extends Component {
  render() {
    return (
      <HashRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/navbox" component={NavboxPage} />
            <Route path="/navstyle" component={NavstylePage} />
            <Route path="/shopping" component={ShoppingPage} />
            <Route path="/360editor" component={Editor360Page} />
            <Route path="/dashboard" component={DashboardPage} />
          </Switch>
          <CountrySection />
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
