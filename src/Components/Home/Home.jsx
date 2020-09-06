import React, { Component } from 'react';
import Header from '../WrapperComponents/Header';
import Sidebar from '../WrapperComponents/Sidebar';
import Content from '../WrapperComponents/Content';
import Footer from '../WrapperComponents/Footer';
import { withAuthorization } from '../../Session';
import { withFirebase } from '../../Firebase';
class Home extends Component {
  render() {
    console.log(this.props);
    return (
      <div id="page-top">
          <div id="wrapper">
      <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Header />
            <Content />
            <Footer />
          </div>
          </div>
          </div>
        </div>
    )
  }
}
const condition = authUser => !!authUser;
export default withAuthorization(condition)(Home);