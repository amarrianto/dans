import React from "react";
import { Route, Switch } from "react-router";
import "./App.css"
import AppNavbar from "./components/Navbar/AppNavbar";
import Sidebar from "./components/Sidebar/Sidebar";
import SidebarData from "./components/Sidebar/SidebarData";
import Dashboard from "./views/Dashboard";
import Admin from "./views/Admin";
import Setting from './views/Setting'

function MainLayout() {
  return (
    <>
      <AppNavbar />
      <Sidebar menus={SidebarData} />
      <div>
        <Switch>
          <Route path="/" component={Admin} exact />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/setting" component={Setting} />
        </Switch>
      </div>
    </>
  );
}

export default MainLayout;
