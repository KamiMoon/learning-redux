import React, { Component } from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Route } from 'react-router-dom';

import LoadingSpinner from './components/LoadingSpinner';
import Feedback from './components/feedback/Feedback';

import CrudView from './crud/CrudView';
import BlogContainer from './blog/BlogContainer';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Main from './main/Main';
import Portfolio from './main/Portfolio';
import Contact from './main/Contact';
import Login from './account/Login';
import Signup from './account/Signup';

export class App extends Component {
  constructor(props) {
    super(props);

    if (this.props.history) {
      this.props.history.listen(this.onRouteChange);
    }
  }

  onRouteChange(location, action) {
    //console.log("on route change");
    //console.log(`The current URL is ${location.pathname}${location.search}${location.hash}`)
    //console.log(`The last navigation action was ${action}`)
  }

  render() {
    return (
      <div>
        <NavBar />
        <LoadingSpinner />

        <div id="main-container" className="container-fluid">
          <br />
          <Feedback />

          <Route exact path="/" component={Main} />
          <Route path="/blog" component={BlogContainer} />
          <Route exact path="/crud" component={CrudView} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </div>

        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps() {
  return {};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
