import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import "./Layout.css";
import NavBar from "../../components/Navbar/Navbar";
import SideBar from "../../components/SideBar/SideBar";
import ArticleList from "../../containers/ArticleListView";

class CustomLayout extends Component {
  render() {
    return (
      // <div>
      //   <NavBar />
      //   <main role="main" class="container">
      //     <div class="row">
      //       <div class="col-md-8">
      //         <ArticleList />
      //       </div>
      //       <div class="col-md-4">
      //         <SideBar />
      //       </div>
      //     </div>
      //   </main>
      // </div>
    );
  }
}

export default CustomLayout;
