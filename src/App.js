import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ConnectUs from './Components/ConnectUs/ConnectUs';
import AddServices from './Components/Dashboard/AddServices/AddServices';
import AdminList from './Components/Dashboard/AdminList/AdminList';
import Dashboard from './Components/Dashboard/Dashboard';
import MakeAdmin from './Components/Dashboard/MakeAdmin/MakeAdmin';
import OrderList from './Components/Dashboard/OrderList/OrderList';
import Review from './Components/Dashboard/Review/Review';
import ReviewComment from './Components/Dashboard/Review/ReviewComment/ReviewComment';
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import NoMatch from './Components/NoMatch/NoMatch';
import OurTeam from './Components/OurTeam/OurTeam';
import ServicesSelect from './Components/ServicesSelect/ServicesSelect';
import WebOverview from './Components/WebOverview/WebOverview';
export const UserContext = createContext()
export const Navigation = createContext()
function App() {
  const handleNavigationOff = () => {
      const userDataInfo = {...nav}
    userDataInfo.show = ''
    userDataInfo.btnPosition = 'fixed-top'
    setNav(userDataInfo)
    
  }
  const handleNavigationOn = () => {
    const userDataInfo = {...nav}
    userDataInfo.show = 'active'
    userDataInfo.btnPosition = "d-none"
    setNav(userDataInfo)
}
const [nav , setNav] = useState({
  show: '',
  btnPosition: 'fixed-top',
  handleNavigationOff:handleNavigationOff,
  handleNavigationOn:handleNavigationOn
})
  const [loggedInUser, setLoggedInUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    photo: '',
    uid: '',
    admin: '',
  })

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Navigation.Provider value={[nav , setNav]}>
      <Router>
        <Switch>
          <PrivateRoute path="/servicesSelect/:id">
            <ServicesSelect />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/dashboard/addServices">
            <AddServices />
          </Route>
          <Route path="/dashboard/orderReview/:id">
            <ReviewComment />
          </Route>
          <Route path="/dashboard/makeAdmin">
            <MakeAdmin />
          </Route>
          <Route path="/dashboard/adminList">
            <AdminList />
          </Route>
          <Route path="/dashboard/reviewItem">
            <Review />
          </Route>
          <Route path="/dashboard/myOrders">
            <OrderList />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/ourTeam">
            <OurTeam />
          </Route>
          <Route path="/connectUs">
            <ConnectUs />
          </Route>
          <Route path="/webOverview">
            <WebOverview />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
      </Navigation.Provider>
    </UserContext.Provider>

  );
}

export default App;
