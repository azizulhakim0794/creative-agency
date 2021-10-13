import React, { createContext, useState,Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Loading from './Components/CommonComponent/Loading/Loading';
const ConnectUs = React.lazy(()=> import('./Components/ConnectUs/ConnectUs'))
const AddServices = React.lazy(()=> import('./Components/Dashboard/AddServices/AddServices'))
const AdminList = React.lazy(()=> import('./Components/Dashboard/AdminList/AdminList'))
const AllUser = React.lazy(()=> import('./Components/Dashboard/AllUser/AllUser'))
const Dashboard = React.lazy(()=> import('./Components/Dashboard/Dashboard'))
const MakeAdmin = React.lazy(()=> import('./Components/Dashboard/MakeAdmin/MakeAdmin'))
const OrderList = React.lazy(()=> import('./Components/Dashboard/OrderList/OrderList'))
const Home = React.lazy(()=> import('./Components/Home/Home'))
const Review = React.lazy(()=> import('./Components/Dashboard/Review/Review'))
const ReviewComment = React.lazy(()=> import('./Components/Dashboard/Review/ReviewComment/ReviewComment'))
const Login = React.lazy(()=> import('./Components/Login/Login'))
const NoMatch = React.lazy(()=> import('./Components/NoMatch/NoMatch'))
const PrivateRoute = React.lazy(()=> import('./Components/Login/PrivateRoute/PrivateRoute'))
const OurTeam = React.lazy(()=> import('./Components/OurTeam/OurTeam'))
const ServicesSelect = React.lazy(()=> import('./Components/ServicesSelect/ServicesSelect'))
const WebOverview = React.lazy(()=> import('./Components/WebOverview/WebOverview'))

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
    
    <Suspense fallback={<Loading/>}>
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
          <Route path="/dashboard/allUser">
            <AllUser />
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
    </Suspense>

  );
}

export default App;
