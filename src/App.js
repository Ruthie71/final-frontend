import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import AccountSettings from "./components/AccountSettings";
import NotFound from "./components/NotFound";
import { Fragment } from "react";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import ContactInfo from "./components/ContactInfo";
import ProfileInfo from "./components/ProfileInfo";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";

const App = () => {
    return (
        <Fragment>
            <Navigation />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/profile" component={Profile} />
                <Route path="/newcontactinfo" component={ContactInfo} />
                <Route path="/editcontactinfo" component={ContactInfo} />
                <Route path="/newprofileinfo" component={ProfileInfo} />
                <Route path="/editprofileinfo" component={ProfileInfo} />
                <Route path="/neweducation" component={Education} />
                <Route path="/editeducation" component={Education} />
                <Route path="/newworkexperience" component={WorkExperience} />
                <Route path="/editworkexperience" component={WorkExperience} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/login" component={LogIn} />
                <Route
                    exact
                    path="/accountsettings"
                    component={AccountSettings}
                />
                <Route path="*" component={NotFound} />
            </Switch>
        </Fragment>
    );
};

export default App;
