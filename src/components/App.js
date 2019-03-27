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

class App extends Component {
  render() {
    return (
      <HashRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/navbox" component={NavboxPage} />
          </Switch>
          <CountrySection />
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
