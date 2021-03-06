import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch
} from 'react-router-dom';
import Auth from "./utils/Auth";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Register from "./components/Register";
import PublicRoute from "./pages/PublicRoute";
import ProtectedRoute from "./pages/ProtectedRoute";
import './App.css';
import { UserProvider } from "./utils/UserContext";
import Home from './pages/PublicRoute/Home';
import Profile from './pages/ProtectedRoute/Profile';
import { StoreProvider } from "../src/components/utils/GlobalState";
import CreateProfile from "./pages/ProtectedRoute/CreateProfile/profile";
import Footer from "../src/components/Footer/footer";
import AboutUs from "../src/pages/PublicRoute/AboutUs";

//Now we have all the stuff we need .. let's render some components with the Router
const AuthExample = () => (
	<UserProvider>
		<Router>
			<div>
				<StoreProvider>
					<Nav className="App-header" />
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/aboutus" component={AboutUs} />
							<Route path="/public" component={PublicRoute} />
							<Route path="/login" component={Login} />
							<Route path="/register" component={Register} />
							<PrivateRoute path="/profilepage" component={ProtectedRoute} />
							<Route exact path="/profile" component={Profile} />
							<PrivateRoute exact path ="/createprofile" component={CreateProfile} />
							{/* <Route component={NoMatch} /> */}
						</Switch>
					<Footer />
				</StoreProvider>
			</div>
		</Router>
	</UserProvider>
)




// This is the private route component this checks for an authorized user here
const PrivateRoute = ({ component: Component, ...rest }) => (
	<Router>
		<div>

			<Route {...rest} render={props => (

				Auth.isAuthenticated ? (
					<Component {...props} />
				) : (
						<div>
							<div className="alert alert-danger text-center" role="alert">
								This page is private, please sign up or login to gain access.
					</div>
							
							<Redirect to={{
								pathname: '/login',
								state: { from: props.location }
							}} />
						</div>
					)
			)} />
		</div>
	</Router>
)








export default AuthExample

