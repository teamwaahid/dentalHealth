import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import Footer from './Pages/Shared/Footer/Footer';
import Register from './Pages/Login/Register/Register';
import Services from './Pages/Home/Services/Services';
import SingleService from './Pages/Home/Services/SingleService';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Experts from './Pages/Home/Experts/Experts';
import NewPatient from './Pages/Home/NewPatient/NewPatient';
import Appoinment from './Pages/Home/Appointment/Appoinment';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <Route exact path="/experts">
              <Experts></Experts>
            </Route>
            <PrivateRoute exact path="/newpatient">
              <NewPatient></NewPatient>
            </PrivateRoute>
            <PrivateRoute exact path="/appoinment">
              <Appoinment></Appoinment>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute exact path="/services/:id">
              <SingleService></SingleService>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
