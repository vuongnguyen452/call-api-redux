import React, { Component } from 'react';
import './App.css';
import Menu from './conponents/Menu/Menu';
import routes from './routes';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { connect } from "react-redux"
import { showLoading, hideLoading } from "../src/action/index"
class App extends Component {
  renderLoading = () => {
    if (!this.props.isShow) {
      return null;
    }
    return (
      <div style={{ position: "fixed", zIndex: 99, width: '100%', height: '100%' }} >
        Loading...
      </div>
    )
  }
  render() {
    const loading = this.renderLoading()
    return (
      <Router>
        <div>
          <Menu />
          {loading}
          <div className="container">
            <div className="row">
              {this.showContentMenu(routes)}
            </div>
          </div>
        </div>
      </Router>

    );
  }
  showContentMenu = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return <Switch>{result}</Switch>
  }
}
const mapStateToProps = (state, props) => {
  return {
    isShow: state.loading.isShow
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    showLoading: () => {
      dispatch(showLoading());
    },
    hideLoading: () => {
      dispatch(hideLoading());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);